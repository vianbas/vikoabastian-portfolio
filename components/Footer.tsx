import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-600 text-sm">
              <span className="text-slate-900 font-semibold">{siteConfig.shortName}</span>
              {" — "}
              Fullstack Software Engineer &amp; DevSecOps Engineer
            </p>
            <p className="text-slate-500 text-xs mt-1">{siteConfig.location}</p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-slate-500 hover:text-sky-600 transition-colors text-sm"
            >
              Email
            </a>
            <a
              href={`https://${siteConfig.linkedinDisplay}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-600 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="text-slate-500 hover:text-sky-600 transition-colors text-sm"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-xs">
            © {year} {siteConfig.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
