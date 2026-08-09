"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

function StatCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match?.[2] ?? "";

  // Start counting when the card enters the viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Defer with rAF to avoid synchronous setState in the effect body.
      const raf = requestAnimationFrame(() => setStarted(true));
      return () => cancelAnimationFrame(raf);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Count up with ease-out cubic
  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Jump straight to the target, deferred to avoid synchronous setState.
      const raf = requestAnimationFrame(() => setDisplay(target));
      return () => cancelAnimationFrame(raf);
    }
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return (
    <Reveal delay={delay} className="h-full">
      <div
        ref={ref}
        className="h-full p-6 rounded-xl border border-slate-200 bg-slate-50 text-center hover:border-slate-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70 transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:shadow-black/40"
      >
        <div className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2 tabular-nums">
          {display}
          {suffix}
        </div>
        <div className="text-slate-600 dark:text-slate-400 text-sm">{label}</div>
      </div>
    </Reveal>
  );
}

export default function About() {
  const { t } = useLang();
  const stats = [
    { value: "8+", label: t("about.stats.years") },
    { value: "3", label: t("about.stats.companies") },
    { value: "9+", label: t("about.stats.projectsDelivered") },
    { value: "5", label: t("about.stats.techDomains") },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <Reveal>
              <p className="text-sky-600 dark:text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
                {t("about.eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                {t("about.title")}
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  {t("about.p1.lead")}
                  <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                    {t("about.p1.strong")}
                  </strong>
                  {t("about.p1.rest")}
                </p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
                <p>{t("about.p4")}</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#case-studies"
                  className="px-5 py-2.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-700 hover:bg-sky-100 text-sm font-medium transition-all dark:bg-sky-950 dark:border-sky-800 dark:text-sky-300 dark:hover:bg-sky-900"
                >
                  {t("about.seeWork")}
                </a>
                <a
                  href="#skills"
                  className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 text-sm font-medium transition-all dark:border-slate-700 dark:text-slate-300 dark:hover:text-white dark:hover:border-slate-500"
                >
                  {t("about.coreExpertise")}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 80} />
            ))}

            {/* Positioning card */}
            <Reveal delay={320} className="col-span-2">
              <div className="h-full p-5 rounded-xl border border-sky-200 bg-sky-50 hover:border-sky-300 hover:shadow-md hover:shadow-sky-100/60 transition-all duration-300 dark:border-sky-800 dark:bg-sky-950 dark:hover:border-sky-700 dark:hover:shadow-black/30">
                <div className="text-xs font-mono text-sky-700 dark:text-sky-300 uppercase tracking-widest mb-2">
                  {t("about.positioningLabel")}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {t("about.positioningText")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
