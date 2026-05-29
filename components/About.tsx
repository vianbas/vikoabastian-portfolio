const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "3", label: "Companies" },
  { value: "9+", label: "Projects Delivered" },
  { value: "5", label: "Tech Domains" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-sky-600 text-sm font-mono uppercase tracking-widest mb-3">
              {"// About"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Engineering software that matters
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am a <strong className="text-slate-900 font-semibold">Fullstack Software Engineer and DevSecOps Engineer</strong> with over 8 years of professional experience building and operating software in the banking, fintech, payment, and enterprise sectors.
              </p>
              <p>
                My work spans the full software lifecycle — from writing backend microservices and frontend dashboards to configuring CI/CD pipelines, managing infrastructure, and supporting vulnerability remediation across production environments.
              </p>
              <p>
                At PT Bank Mandiri, one of Indonesia&apos;s largest state-owned banks, I have contributed to mission-critical systems including dispute management, national clearing (SKN), RTGS, telegraphic transfer, tax collection, and ATM/CRM monitoring platforms.
              </p>
              <p>
                I work with engineering discipline — feature branch isolation, code review, automated builds, dependency audits, penetration testing support, and reproducible deployments across DC and DRC environments.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#case-studies"
                className="px-5 py-2.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-700 hover:bg-sky-100 text-sm font-medium transition-all"
              >
                See my work
              </a>
              <a
                href="#skills"
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 text-sm font-medium transition-all"
              >
                Core expertise
              </a>
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50 text-center hover:border-slate-300 hover:bg-white transition-colors"
              >
                <div className="text-4xl font-bold text-sky-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}

            {/* Positioning card */}
            <div className="col-span-2 p-5 rounded-xl border border-sky-200 bg-sky-50">
              <div className="text-xs font-mono text-sky-700 uppercase tracking-widest mb-2">
                Main positioning
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Senior Fullstack Software Engineer with DevSecOps strength for banking, fintech, payments, and secure enterprise platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
