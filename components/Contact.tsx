import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sky-600 text-sm font-mono uppercase tracking-widest mb-3">
          {"// Contact"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-slate-600 text-lg mb-12 max-w-xl mx-auto">
          Open to senior engineering roles, freelance engagements, and collaboration on banking, fintech, and enterprise systems.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {/* Email */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-md hover:shadow-slate-200/60 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
              <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <div className="text-slate-500 text-xs mb-1">Email</div>
              <div className="text-slate-800 text-sm font-medium group-hover:text-sky-700 transition-colors break-all">
                {siteConfig.email}
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={`https://${siteConfig.linkedinDisplay}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-md hover:shadow-slate-200/60 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
              <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <div className="text-slate-500 text-xs mb-1">LinkedIn</div>
              <div className="text-slate-800 text-sm font-medium group-hover:text-sky-700 transition-colors">
                {siteConfig.linkedinDisplay}
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-200 bg-white">
            <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <div>
              <div className="text-slate-500 text-xs mb-1">Location</div>
              <div className="text-slate-800 text-sm font-medium">{siteConfig.location}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md shadow-sky-600/20 hover:shadow-sky-500/30"
        >
          Send me an email
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
    </section>
  );
}
