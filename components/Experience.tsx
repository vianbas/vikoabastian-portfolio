import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-600 text-sm font-mono uppercase tracking-widest mb-3">
            {"// Experience"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Work History
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-[-4px] md:left-[20px] top-2 w-2.5 h-2.5 rounded-full bg-sky-600 border-2 border-white shadow-md shadow-sky-300/50" />

                <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/60 transition-all">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-slate-900 font-semibold text-lg">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-sky-700 font-medium text-sm">{exp.company}</span>
                        {exp.type && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700">
                            {exp.type}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-slate-600 text-sm">{exp.period}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{exp.location}</div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{exp.summary}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-sky-600 mt-1 shrink-0 text-xs">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
