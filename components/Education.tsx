import { educations } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-600 text-sm font-mono uppercase tracking-widest mb-3">
            {"// Education"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Academic Background
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {educations.map((edu, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/60 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-slate-900 font-semibold">{edu.institution}</h3>
                  <p className="text-sky-700 text-sm mt-1">
                    {edu.degree}, {edu.field}
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-200">
                    <span className="text-slate-500 text-xs">{edu.period}</span>
                    <span className="text-slate-500 text-xs">{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
