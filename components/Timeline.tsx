import { timeline } from "@/data/timeline";
import Reveal from "@/components/Reveal";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sky-600 dark:text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
              {"// Career"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">
              Timeline
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">Jobs &amp; key projects, newest first</p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="relative pl-12">
                  {item.type === "job" ? (
                    <>
                      {/* Job dot — filled sky */}
                      <div className="absolute left-[9px] top-3 w-4 h-4 rounded-full bg-sky-600 dark:bg-sky-400 border-2 border-white dark:border-slate-900 shadow-md shadow-sky-300/50" />
                      <div className="p-5 rounded-xl border border-sky-200 bg-white shadow-sm hover:shadow-md hover:shadow-sky-100/60 hover:-translate-y-0.5 transition-all duration-300 dark:border-sky-800 dark:bg-slate-950 dark:hover:shadow-black/40">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-1 block">
                              role
                            </span>
                            <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-base">{item.title}</h3>
                            <p className="text-sky-700 dark:text-sky-400 text-sm font-medium">{item.company}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{item.period}</p>
                            {item.location && (
                              <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{item.location}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Project dot — outline */}
                      <div className="absolute left-[13px] top-3 w-2.5 h-2.5 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-400 dark:border-slate-500" />
                      <div className="p-4 rounded-lg border border-slate-200 bg-white hover:border-sky-200 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-sky-800">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                          <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1 block">
                              project
                            </span>
                            <h4 className="text-slate-800 dark:text-slate-200 font-medium text-sm">{item.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-xs">{item.company}</p>
                          </div>
                          <p className="text-slate-500 dark:text-slate-400 text-xs font-mono shrink-0">{item.period}</p>
                        </div>
                        {item.tech && (
                          <div className="flex flex-wrap gap-1.5">
                            {item.tech.map((t) => (
                              <span
                                key={t}
                                className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
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
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
