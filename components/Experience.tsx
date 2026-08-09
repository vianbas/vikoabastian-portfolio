"use client";

import { experiences } from "@/data/experience";
import Reveal from "@/components/Reveal";
import { pick, useLang } from "@/lib/i18n";

export default function Experience() {
  const { lang, t } = useLang();
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sky-600 dark:text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
              {t("experience.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">
              {t("experience.title")}
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-[-4px] md:left-[20px] top-2 w-2.5 h-2.5 rounded-full bg-sky-600 dark:bg-sky-400 border-2 border-white dark:border-slate-950 shadow-md shadow-sky-300/50" />

                  <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/70 hover:-translate-y-0.5 transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:shadow-black/40">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-lg">
                          {pick(lang, exp.role)}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <span className="text-sky-700 dark:text-sky-400 font-medium text-sm">{exp.company}</span>
                          {exp.type && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-300">
                              {pick(lang, exp.type)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-slate-600 dark:text-slate-400 text-sm">{exp.period}</div>
                        <div className="text-slate-500 dark:text-slate-500 text-xs mt-0.5">{exp.location}</div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {pick(lang, exp.summary)}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5">
                      {pick(lang, exp.highlights).map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="text-sky-600 dark:text-sky-400 mt-1 shrink-0 text-xs">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
