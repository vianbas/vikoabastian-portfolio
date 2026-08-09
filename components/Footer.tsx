"use client";

import { siteConfig } from "@/data/site";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const exploreLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.caseStudies"), href: "#case-studies" },
    { label: t("nav.projects"), href: "#live-projects" },
    { label: t("nav.devsecops"), href: "#devsecops" },
  ];

  const contactLinks = [
    { label: t("contact.email"), href: `mailto:${siteConfig.email}`, external: false },
    { label: t("contact.linkedin"), href: siteConfig.linkedin, external: true },
    { label: t("contact.github"), href: siteConfig.github, external: true },
    { label: t("nav.resume"), href: siteConfig.resumeUrl, download: true },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#hero" className="inline-block">
              <span className="text-slate-900 font-bold text-lg tracking-tight dark:text-white">
                <span className="text-sky-600 dark:text-sky-400">V</span>iko
              </span>
            </a>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              {t("footer.brand")}
            </p>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
              {siteConfig.location}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
              {t("footer.explore")}
            </h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-sky-600 transition-colors dark:text-slate-400 dark:hover:text-sky-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-2.5">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    {...(link.download ? { download: true } : {})}
                    className="text-sm text-slate-600 hover:text-sky-600 transition-colors dark:text-slate-400 dark:hover:text-sky-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            {t("footer.copyright").replace("{name}", siteConfig.name)}
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-sky-600 transition-colors dark:text-slate-400 dark:hover:text-sky-400"
          >
            {t("footer.backToTop")}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
