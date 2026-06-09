import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-600 text-sm font-mono uppercase tracking-widest mb-3">
            {"// Featured Work"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Case Studies
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Selected projects from banking, fintech, payments, and enterprise software delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              className="flex flex-col p-6 rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-md hover:shadow-slate-200/60 transition-all group"
            >
              {/* Domain */}
              <p className="text-xs text-slate-500 font-mono mb-3 leading-snug">{cs.domain}</p>

              {/* Title */}
              <h3 className="text-slate-900 font-semibold text-base leading-snug mb-2 group-hover:text-sky-700 transition-colors">
                {cs.title}
              </h3>

              {/* Period + Role */}
              <p className="text-slate-400 text-xs font-mono mb-1">{cs.period}</p>
              <p className="text-sky-700 text-xs mb-4">{cs.role}</p>

              {/* Highlights */}
              <ul className="space-y-1.5 flex-1 mb-5">
                {cs.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-sky-600 mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 mb-3">
                {cs.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* NDA note */}
              <p className="text-[11px] text-slate-400 font-mono">
                NDA · details available on request
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
