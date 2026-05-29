const disciplines = [
  "Feature branch isolation",
  "Code review readiness",
  "Build validation before merge",
  "Dependency and vulnerability checks",
  "CI/CD automation",
  "Secure access and authentication integration",
  "Environment-aware configuration",
  "Production readiness checks",
  "Penetration testing and vulnerability remediation support",
  "Performance testing before production release",
  "Deployment discipline across DC/DRC or cloud environments",
  "Monitoring and troubleshooting readiness",
  "Clear documentation and reproducible commands",
];

const workflowCode = `git status
git checkout feature/example-branch
npm install
npm audit --audit-level=high
npm run lint
npm test
npm run build
codegraph sync .
git add .
git commit -m "feat: implement production-ready feature"
git push origin feature/example-branch`;

export default function DevSecOpsWorkflow() {
  return (
    <section id="devsecops" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-600 text-sm font-mono uppercase tracking-widest mb-3">
            {"// Engineering Discipline"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            DevSecOps Workflow
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Delivery discipline applied consistently — from local development to production deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Disciplines list */}
          <div>
            <h3 className="text-slate-700 font-semibold mb-5 text-sm uppercase tracking-wider">
              Engineering practices
            </h3>
            <ul className="space-y-3">
              {disciplines.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded flex items-center justify-center bg-sky-50 border border-sky-200 text-sky-700 text-xs mt-0.5 font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code block — kept dark intentionally to read like a real terminal */}
          <div>
            <h3 className="text-slate-700 font-semibold mb-5 text-sm uppercase tracking-wider">
              Sample workflow
            </h3>
            <div className="rounded-xl border border-slate-300 overflow-hidden shadow-md shadow-slate-200/60">
              {/* Terminal header */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800 border-b border-slate-700">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-slate-400 text-xs font-mono">bash — feature/example-branch</span>
              </div>
              {/* Code */}
              <pre className="p-5 overflow-x-auto text-sm font-mono bg-slate-900 leading-relaxed">
                {workflowCode.split("\n").map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-slate-600 select-none w-4 shrink-0 text-right">{i + 1}</span>
                    <span className="text-emerald-400">{line}</span>
                  </div>
                ))}
              </pre>
            </div>

            {/* Notes */}
            <div className="mt-4 p-4 rounded-lg border border-slate-200 bg-slate-50">
              <p className="text-slate-600 text-xs leading-relaxed">
                Every commit on production-bound systems goes through audit, lint, test, and build validation before merge. Deployments are environment-aware and follow DC/DRC readiness checklists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
