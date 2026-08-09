"use client";

import Reveal from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { translations } from "@/data/translations";

const workflowCode = `git status
git checkout feature/example-branch
npm install
npm audit --audit-level=high
npm run lint
npm test
npm run build
codegraph sync .
git add .
git commit -m "feat: implement production-ready feature"
git push origin feature/example-branch`;

export default function DevSecOpsWorkflow() {
  const { lang, t } = useLang();
  const disciplines: readonly string[] = translations[lang].devsecops.disciplines;
  return (
    <section id="devsecops" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sky-600 dark:text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
              {t("devsecops.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">
              {t("devsecops.title")}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              {t("devsecops.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Disciplines list */}
          <Reveal>
            <div>
              <h3 className="text-slate-700 dark:text-slate-300 font-semibold mb-5 text-sm uppercase tracking-wider">
                {t("devsecops.practices")}
              </h3>
              <ul className="space-y-3">
                {disciplines.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 rounded flex items-center justify-center bg-sky-50 border border-sky-200 text-sky-700 text-xs mt-0.5 font-semibold dark:bg-sky-950 dark:border-sky-800 dark:text-sky-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Code block — kept dark intentionally to read like a real terminal */}
          <Reveal delay={120}>
            <div>
              <h3 className="text-slate-700 dark:text-slate-300 font-semibold mb-5 text-sm uppercase tracking-wider">
                {t("devsecops.sampleWorkflow")}
              </h3>
              <div className="rounded-xl border border-slate-300 overflow-hidden shadow-md shadow-slate-200/60 hover:shadow-lg hover:shadow-slate-300/50 transition-shadow dark:border-slate-700 dark:shadow-black/30 dark:hover:shadow-black/50">
                {/* Terminal header */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-slate-400 text-xs font-mono">bash — feature/example-branch</span>
                </div>
                {/* Code */}
                <pre className="p-5 overflow-x-auto text-sm font-mono bg-slate-900 leading-relaxed">
                  {workflowCode.split("\n").map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-slate-600 select-none w-4 shrink-0 text-right">{i + 1}</span>
                      <span className="text-emerald-400">{line}</span>
                    </div>
                  ))}
                </pre>
              </div>

              {/* Notes */}
              <div className="mt-4 p-4 rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {t("devsecops.notes")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
