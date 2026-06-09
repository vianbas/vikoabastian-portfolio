import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-600 text-sm font-mono uppercase tracking-widest mb-3">
            {"// Career"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Timeline
          </h2>
          <p className="text-slate-500 text-sm mt-3">Jobs &amp; key projects, newest first</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-12">
                {item.type === "job" ? (
                  <>
                    {/* Job dot — filled sky */}
                    <div className="absolute left-[9px] top-3 w-4 h-4 rounded-full bg-sky-600 border-2 border-white shadow-md shadow-sky-300/50" />
                    <div className="p-5 rounded-xl border border-sky-200 bg-white shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div>
                          <span className="text-xs font-mono uppercase tracking-widest text-sky-600 mb-1 block">
                            role
                          </span>
                          <h3 className="text-slate-900 font-semibold text-base">{item.title}</h3>
                          <p className="text-sky-700 text-sm font-medium">{item.company}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-slate-600 text-sm">{item.period}</p>
                          {item.location && (
                            <p className="text-slate-400 text-xs mt-0.5">{item.location}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Project dot — outline */}
                    <div className="absolute left-[13px] top-3 w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-400" />
                    <div className="p-4 rounded-lg border border-slate-200 bg-white hover:border-sky-200 hover:shadow-sm transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                        <div>
                          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1 block">
                            project
                          </span>
                          <h4 className="text-slate-800 font-medium text-sm">{item.title}</h4>
                          <p className="text-slate-500 text-xs">{item.company}</p>
                        </div>
                        <p className="text-slate-500 text-xs font-mono shrink-0">{item.period}</p>
                      </div>
                      {item.tech && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
