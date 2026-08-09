import { siteConfig } from "@/data/site";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

const cardClass =
  "h-full group flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-800 dark:hover:shadow-black/40";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Soft glow behind the section */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-sky-100/50 dark:bg-sky-500/10 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sky-600 dark:text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
            {"// Contact"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Let&apos;s work together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Open to senior engineering roles, freelance engagements, and collaboration on banking, fintech, and enterprise systems.
          </p>
        </Reveal>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* Email */}
          <Reveal delay={0} className="h-full">
            <a href={`mailto:${siteConfig.email}`} className={cardClass}>
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center group-hover:bg-sky-100 transition-colors dark:bg-sky-950 dark:border-sky-800 dark:group-hover:bg-sky-900">
                <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <div className="text-slate-500 dark:text-slate-400 text-xs mb-1">Email</div>
                <div className="text-slate-800 dark:text-slate-200 text-sm font-medium group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors break-all">
                  {siteConfig.email}
                </div>
              </div>
            </a>
          </Reveal>

          {/* LinkedIn */}
          <Reveal delay={70} className="h-full">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center group-hover:bg-sky-100 transition-colors dark:bg-sky-950 dark:border-sky-800 dark:group-hover:bg-sky-900">
                <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <div className="text-slate-500 dark:text-slate-400 text-xs mb-1">LinkedIn</div>
                <div className="text-slate-800 dark:text-slate-200 text-sm font-medium group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors break-all">
                  {siteConfig.linkedinDisplay}
                </div>
              </div>
            </a>
          </Reveal>

          {/* GitHub */}
          <Reveal delay={140} className="h-full">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center group-hover:bg-sky-100 transition-colors dark:bg-sky-950 dark:border-sky-800 dark:group-hover:bg-sky-900">
                <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <div>
                <div className="text-slate-500 dark:text-slate-400 text-xs mb-1">GitHub</div>
                <div className="text-slate-800 dark:text-slate-200 text-sm font-medium group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                  {siteConfig.githubDisplay}
                </div>
              </div>
            </a>
          </Reveal>

          {/* Location */}
          <Reveal delay={210} className="h-full">
            <div className="h-full flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center dark:bg-sky-950 dark:border-sky-800">
                <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <div className="text-slate-500 dark:text-slate-400 text-xs mb-1">Location</div>
                <div className="text-slate-800 dark:text-slate-200 text-sm font-medium">{siteConfig.location}</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contact form */}
        <Reveal delay={150}>
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 mb-10 text-left dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 mb-1 dark:text-slate-100">
              Send me a message
            </h3>
            <p className="text-sm text-slate-500 mb-6 dark:text-slate-400">
              Fill this in and it lands straight in my inbox.
            </p>
            <ContactForm />
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={200}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white font-semibold text-sm transition-all shadow-md shadow-sky-600/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 dark:from-sky-500 dark:to-sky-400 dark:text-slate-950 dark:hover:from-sky-400 dark:hover:to-sky-300"
          >
            Send me an email
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
