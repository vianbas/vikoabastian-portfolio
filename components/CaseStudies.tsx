"use client";

import { caseStudies } from "@/data/caseStudies";
import Reveal from "@/components/Reveal";
import { pick, useLang } from "@/lib/i18n";

export default function CaseStudies() {
  const { lang, t } = useLang();
  return (
    <section id="case-studies" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle dot texture */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sky-600 dark:text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
              {t("caseStudies.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">
              {t("caseStudies.title")}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              {t("caseStudies.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delay={(i % 3) * 80} className="h-full">
              <article className="h-full flex flex-col rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-300 group overflow-hidden dark:border-slate-800 dark:bg-slate-950 dark:hover:border-sky-800 dark:hover:shadow-black/40">
                {cs.image && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <img
                      src={cs.image}
                      alt={`${pick(lang, cs.title)} ${t("caseStudies.screenshot")}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1 p-6">
                {/* Domain */}
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3 leading-snug">
                  {pick(lang, cs.domain)}
                </p>

                {/* Title */}
                <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-base leading-snug mb-2 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                  {pick(lang, cs.title)}
                </h3>

                {/* Period + Role */}
                <p className="text-slate-400 dark:text-slate-500 text-xs font-mono mb-1">{cs.period}</p>
                <p className="text-sky-700 dark:text-sky-400 text-xs mb-4">{pick(lang, cs.role)}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 flex-1 mb-5">
                  {pick(lang, cs.highlights).map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="text-sky-600 dark:text-sky-400 mt-0.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800 mb-3">
                  {cs.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visit site */}
                {cs.url && (
                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-md bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition-colors dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950"
                  >
                    {t("caseStudies.visitSite")}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}

                {/* NDA note */}
                {cs.nda !== false && (
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    {t("caseStudies.nda")}
                  </p>
                )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
