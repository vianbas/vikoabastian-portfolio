"use client";

import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { translations } from "@/data/translations";

const PROMPT = "~/viko $";

type OutputLine = { text: string; emphasis?: boolean };

type TerminalGroup = {
  command: string;
  output: OutputLine[];
  isActions?: boolean;
};

const actions: { label: string; href: string; download?: boolean }[] = [
  { label: "./view-experience", href: "#experience" },
  { label: "./view-case-studies", href: "#case-studies" },
  { label: "./view-live-projects", href: "#live-projects" },
  { label: "./download-resume.pdf", href: siteConfig.resumeUrl, download: true },
  { label: "./contact", href: "#contact" },
];

function buildGroups(
  lang: "en" | "id",
): TerminalGroup[] {
  const dict = translations[lang];
  return [
    { command: "whoami", output: [...dict.hero.identity] },
    { command: "cat about.md", output: [...dict.hero.about] },
    { command: "ls -1 actions/", output: [], isActions: true },
  ];
}

type LiveState = {
  /** Index of the group currently animating; groups.length once finished */
  group: number;
  typed: string;
  /** Number of output lines revealed for the live group */
  shown: number;
};

function Prompt() {
  return (
    <span className="text-sky-600 dark:text-sky-400 select-none" aria-hidden="true">
      {PROMPT}
    </span>
  );
}

function OutputLine({
  children,
  emphasis,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-sky-500 dark:text-sky-400 select-none shrink-0" aria-hidden="true">
        &gt;
      </span>
      <span
        className={
          emphasis
            ? "text-slate-900 font-semibold dark:text-slate-100"
            : "text-slate-700 dark:text-slate-300"
        }
      >
        {children}
      </span>
    </div>
  );
}

export default function Hero() {
  const { lang, t } = useLang();
  const [live, setLive] = useState<LiveState>({ group: 0, typed: "", shown: 0 });
  const [finished, setFinished] = useState(false);

  const groups = useMemo(() => buildGroups(lang), [lang]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Show everything instantly. Defer with rAF so we don't call setState
      // synchronously inside the effect body.
      const raf = requestAnimationFrame(() => {
        setLive({ group: groups.length, typed: "", shown: 0 });
        setFinished(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    let cancelled = false;
    const timeouts: number[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = window.setTimeout(() => {
          if (!cancelled) resolve();
        }, ms);
        timeouts.push(id);
      });

    (async () => {
      for (let g = 0; g < groups.length; g++) {
        const cmd = groups[g].command;
        setLive({ group: g, typed: "", shown: 0 });

        // type the command
        for (let i = 1; i <= cmd.length; i++) {
          setLive((s) => ({ ...s, typed: cmd.slice(0, i) }));
          await sleep(34);
        }
        await sleep(240);

        // reveal output lines
        for (let j = 0; j < groups[g].output.length; j++) {
          setLive((s) => ({ ...s, shown: s.shown + 1 }));
          await sleep(130);
        }
        await sleep(360);
      }
      setLive({ group: groups.length, typed: "", shown: 0 });
      setFinished(true);
    })();

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [groups]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Subtle background grid */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      {/* Aurora glow blobs */}
      <div className="absolute top-[-10%] left-[5%] w-[520px] h-[520px] bg-sky-300/30 dark:bg-sky-500/20 rounded-full blur-3xl pointer-events-none animate-aurora" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[560px] h-[560px] bg-indigo-300/25 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none animate-aurora-slow" />
      <div
        className="absolute top-[38%] left-[58%] w-[400px] h-[400px] bg-emerald-300/20 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-aurora"
        style={{ animationDelay: "-9s" }}
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Eyebrow */}
        {siteConfig.availableForRoles && (
          <div className="flex justify-center mb-10 fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs font-mono tracking-widest uppercase dark:border-sky-800 dark:bg-sky-950 dark:text-sky-300">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              {t("hero.availableForRoles")}
            </div>
          </div>
        )}

        {/* Terminal content */}
        <div
          className="font-mono text-sm sm:text-base leading-relaxed space-y-6 fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {groups.map((group, g) => {
            const status =
              g < live.group ? "done" : g === live.group ? "active" : "waiting";
            const typedCommand =
              status === "waiting" ? "" : status === "active" ? live.typed : group.command;
            const commandDone = status === "done" || typedCommand.length === group.command.length;
            const shown =
              status === "done" ? group.output.length : status === "active" ? live.shown : 0;
            const isActionGroup = group.isActions === true;
            const showLinks = isActionGroup && status !== "waiting" && commandDone;

            return (
              <div key={group.command} className={status === "waiting" ? "invisible" : ""}>
                {/* Command line */}
                <div className="flex gap-3 mb-3">
                  <Prompt />
                  <span className="text-slate-500 dark:text-slate-400">
                    {typedCommand}
                    {status === "active" && !commandDone && (
                      <span
                        className="inline-block w-2 h-4 ml-0.5 bg-slate-700 dark:bg-slate-200 align-middle caret-blink"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </div>

                {/* Output */}
                {isActionGroup ? (
                  <ul
                    className={`pl-0 sm:pl-2 space-y-2 ${showLinks ? "" : "invisible"}`}
                  >
                    {actions.map((action) => (
                      <li key={action.label}>
                        <a
                          href={action.href}
                          {...(action.download ? { download: true } : {})}
                          className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 hover:underline underline-offset-4 decoration-sky-400 dark:text-sky-400 dark:hover:text-sky-300"
                        >
                          {action.label}
                          <span className="text-slate-400 dark:text-slate-500 text-xs" aria-hidden="true">
                            ↵
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-1.5 pl-0 sm:pl-2">
                    {group.output.slice(0, shown).map((line, idx) => (
                      <OutputLine key={idx} emphasis={line.emphasis}>
                        {line.text}
                      </OutputLine>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Final blinking cursor */}
          <div
            className={`flex gap-3 items-center pt-2 ${finished ? "" : "invisible"}`}
          >
            <Prompt />
            <span
              className="inline-block w-2.5 h-4 bg-slate-700 dark:bg-slate-200 caret-blink"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 text-xs font-mono fade-up"
        style={{ animationDelay: "1.4s" }}
      >
        <span>{t("hero.scroll")}</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
