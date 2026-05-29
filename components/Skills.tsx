import { skillGroups } from "@/data/skills";

const categoryIcons: Record<string, string> = {
  "Backend Engineering": "⚙",
  "Frontend Engineering": "◻",
  "Database Engineering": "⬡",
  "DevSecOps & Infrastructure": "⬢",
  "Observability, Security & Quality": "◈",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-600 text-sm font-mono uppercase tracking-widest mb-3">
            {"// Core Expertise"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            A breadth of skills across the full engineering stack, from backend services to infrastructure and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-md hover:shadow-slate-200/60 transition-all group"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <span
                  className="text-xl mt-0.5 text-sky-600"
                  aria-hidden="true"
                >
                  {categoryIcons[group.category] ?? "▸"}
                </span>
                <div>
                  <h3 className="text-slate-900 font-semibold text-base group-hover:text-sky-700 transition-colors">
                    {group.category}
                  </h3>
                  <p className="text-slate-500 text-xs mt-0.5">{group.description}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
