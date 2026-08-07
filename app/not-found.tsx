import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-4">
      {/* Subtle background grid */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl mx-auto font-mono text-sm sm:text-base leading-relaxed space-y-6">
        {/* Command: whoami */}
        <div>
          <div className="flex gap-3 mb-3">
            <span className="text-sky-600 dark:text-sky-400 select-none" aria-hidden="true">
              ~/viko $
            </span>
            <span className="text-slate-500 dark:text-slate-400">whoami</span>
          </div>
          <div className="flex gap-3 items-start pl-0 sm:pl-2">
            <span className="text-sky-500 dark:text-sky-400 select-none shrink-0" aria-hidden="true">
              &gt;
            </span>
            <span className="text-slate-900 font-semibold dark:text-slate-100">
              404 — page not found
            </span>
          </div>
        </div>

        {/* Command: ls */}
        <div>
          <div className="flex gap-3 mb-3">
            <span className="text-sky-600 dark:text-sky-400 select-none" aria-hidden="true">
              ~/viko $
            </span>
            <span className="text-slate-500 dark:text-slate-400">ls available-routes/</span>
          </div>
          <ul className="pl-0 sm:pl-2 space-y-2">
            {[
              { label: "./home", href: "/" },
              { label: "./experience", href: "/#experience" },
              { label: "./case-studies", href: "/#case-studies" },
              { label: "./live-projects", href: "/#live-projects" },
              { label: "./contact", href: "/#contact" },
            ].map((route) => (
              <li key={route.label}>
                <Link
                  href={route.href}
                  className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 hover:underline underline-offset-4 decoration-sky-400 dark:text-sky-400 dark:hover:text-sky-300"
                >
                  {route.label}
                  <span className="text-slate-400 dark:text-slate-500 text-xs" aria-hidden="true">
                    ↵
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Blinking cursor */}
        <div className="flex gap-3 items-center pt-2">
          <span className="text-sky-600 dark:text-sky-400 select-none" aria-hidden="true">
            ~/viko $
          </span>
          <span
            className="inline-block w-2.5 h-4 bg-slate-700 dark:bg-slate-200 caret-blink"
            aria-hidden="true"
          />
        </div>
      </div>
    </main>
  );
}
