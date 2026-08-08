import { openSourceContributions } from "@/data/openSource";
import Reveal from "@/components/Reveal";

function statusBadge(status: "open" | "merged" | "closed") {
  if (status === "merged") {
    return (
      <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-violet-50 text-violet-700 border border-violet-200 uppercase tracking-wide dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800">
        Merged
      </span>
    );
  }
  if (status === "closed") {
    return (
      <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wide dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
        Closed
      </span>
    );
  }
  return (
    <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wide dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800">
      Open PR
    </span>
  );
}

export default function OpenSource() {
  return (
    <section
      id="open-source"
      className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sky-600 dark:text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
              {"// Open Source"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">
              Open Source Contributions
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Upstream contributions to projects I use — small fixes that keep the ecosystem accurate.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6">
          {openSourceContributions.map((c, i) => (
            <Reveal key={c.id} delay={i * 90}>
              <article className="rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-300 group overflow-hidden dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-800 dark:hover:shadow-black/40">
                <div className="h-1 bg-gradient-to-r from-violet-400 to-sky-400" />

                <div className="p-6">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono leading-snug">
                        {c.repo}
                      </p>
                      <p className="text-sky-600 dark:text-sky-400 text-sm mt-0.5">{c.contributionType}</p>
                    </div>
                    {statusBadge(c.status)}
                  </div>

                  {/* Title + PR link */}
                  <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg leading-snug mb-1 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                    <a
                      href={c.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {c.prTitle}
                    </a>
                  </h3>
                  <p className="text-slate-400 dark:text-slate-500 text-xs font-mono mb-4">
                    PR #{c.prNumber} · {c.date} · {c.stars ? `⭐ ${c.stars} · ` : ""}+{c.additions}/−{c.deletions}
                  </p>

                  {/* Summary */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {c.summary}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {c.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="text-violet-500 dark:text-violet-400 mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Files changed */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {c.files.map((f) => (
                      <span
                        key={f}
                        className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700 border border-slate-200 font-mono dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                      >
                        {f}
                      </span>
                    ))}
                    <a
                      href={c.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded text-xs font-medium text-violet-700 hover:text-violet-900 border border-violet-200 hover:border-violet-300 hover:bg-violet-50 transition-colors dark:text-violet-300 dark:hover:text-violet-200 dark:border-violet-800 dark:hover:bg-violet-950"
                    >
                      View PR →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
