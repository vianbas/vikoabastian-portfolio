"use client";

import { skillGroups } from "@/data/skills";
import Reveal from "@/components/Reveal";
import { pick, useLang } from "@/lib/i18n";

const categoryIcons: Record<string, string> = {
  "Backend Engineering": "⚙",
  "Frontend Engineering": "◻",
  "Database Engineering": "⬡",
  "DevSecOps & Infrastructure": "⬢",
  "Observability, Security & Quality": "◈",
};

export default function Skills() {
  const { lang, t } = useLang();
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle dot texture */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sky-600 dark:text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
              {t("skills.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">
              {t("skills.title")}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              {t("skills.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category.en} delay={i * 70} className="h-full">
              <div className="h-full p-6 rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-300 group dark:border-slate-800 dark:bg-slate-950 dark:hover:border-sky-800 dark:hover:shadow-black/40">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <span
                    className="text-xl mt-0.5 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    {categoryIcons[group.category.en] ?? "▸"}
                  </span>
                  <div>
                    <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-base group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                      {pick(lang, group.category)}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                      {pick(lang, group.description)}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50 transition-colors dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:text-sky-300 dark:hover:bg-sky-950"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
