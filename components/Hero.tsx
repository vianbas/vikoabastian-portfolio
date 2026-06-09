import { siteConfig } from "@/data/site";

const PROMPT = "~/viko $";

const identity = [
  "Viko Andri Bastian Manurung",
  "Fullstack Software Engineer · DevSecOps Engineer",
  "Jakarta, ID · 8+ years · banking / fintech",
];

const about = [
  "Senior fullstack engineer with DevSecOps strength.",
  "Building secure, reliable software for banking,",
  "fintech, payments, and enterprise platforms.",
];

const actions: { label: string; href: string; download?: boolean }[] = [
  { label: "./view-experience", href: "#experience" },
  { label: "./view-case-studies", href: "#case-studies" },
  { label: "./view-live-projects", href: "#live-projects" },
  { label: "./download-resume.pdf", href: siteConfig.resumeUrl, download: true },
  { label: "./contact", href: "#contact" },
];

function Prompt() {
  return (
    <span className="text-sky-600 select-none" aria-hidden="true">
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
      <span className="text-sky-500 select-none shrink-0" aria-hidden="true">
        &gt;
      </span>
      <span
        className={
          emphasis
            ? "text-slate-900 font-semibold"
            : "text-slate-700"
        }
      >
        {children}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Single soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Eyebrow */}
        {siteConfig.availableForRoles && (
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              {siteConfig.availableForRolesText}
            </div>
          </div>
        )}

        {/* Terminal content */}
        <div className="font-mono text-sm sm:text-base leading-relaxed space-y-6">
          {/* whoami */}
          <div>
            <div className="flex gap-3 mb-3">
              <Prompt />
              <span className="text-slate-500">whoami</span>
            </div>
            <div className="space-y-1.5 pl-0 sm:pl-2">
              <OutputLine emphasis>{identity[0]}</OutputLine>
              <OutputLine>{identity[1]}</OutputLine>
              <OutputLine>{identity[2]}</OutputLine>
            </div>
          </div>

          {/* cat about.md */}
          <div>
            <div className="flex gap-3 mb-3">
              <Prompt />
              <span className="text-slate-500">cat about.md</span>
            </div>
            <div className="pl-0 sm:pl-2 text-slate-700 space-y-1.5">
              {about.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          {/* ls -1 actions/ */}
          <div>
            <div className="flex gap-3 mb-3">
              <Prompt />
              <span className="text-slate-500">ls -1 actions/</span>
            </div>
            <ul className="pl-0 sm:pl-2 space-y-2">
              {actions.map((action) => (
                <li key={action.label}>
                  <a
                    href={action.href}
                    {...(action.download ? { download: true } : {})}
                    className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 hover:underline underline-offset-4 decoration-sky-400"
                  >
                    {action.label}
                    <span
                      className="text-slate-400 text-xs"
                      aria-hidden="true"
                    >
                      ↵
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blinking cursor */}
          <div className="flex gap-3 items-center pt-2">
            <Prompt />
            <span
              className="inline-block w-2.5 h-4 bg-slate-700 animate-pulse"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 text-xs font-mono">
        <span>scroll</span>
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
