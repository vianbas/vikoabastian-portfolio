export interface LiveProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  domain: string;
  liveUrl: string;
  githubUrl?: string;
  /** Optional screenshot shown at the top of the card */
  image?: string;
  tech: string[];
  highlights: string[];
}

export const liveProjects: LiveProject[] = [
  {
    id: "kpr-calculator",
    title: "KPR Calculator",
    subtitle: "Simulasi Kredit Pemilikan Rumah",
    description:
      "Client-side Indonesian mortgage simulation tool — runs entirely in the browser, no backend, no account required.",
    domain: "Personal Finance · Mortgage · Banking",
    liveUrl: "https://kpr.vikoabastian.com",
    image: "/project-shots/kpr-calculator-home.webp",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Decimal.js", "PWA"],
    highlights: [
      "Annuity & flat-rate simulation with fixed, floating, and multi-tier rate schedules",
      "KPR Syariah/iB: Murabahah (margin tetap) and Musyarakah Mutanaqishah (ujrah menurun)",
      "Affordability analysis: DSR check, stress test (+1–+3%), reverse affordability estimator",
      "Upfront cost calculator: DP, provision, notary, BPHTB, PPN, life & fire insurance",
      "Refinancing simulator, LTV guardrail vs BI caps, Buy vs Rent, FLPP subsidy check",
      "Shareable URL (LZString), PDF/CSV export, up to 3 side-by-side scenarios, installable PWA",
    ],
  },
  {
    id: "w-commerce",
    title: "W-Commerce",
    subtitle: "WhatsApp Catalog Commerce",
    description:
      "Lightweight product-catalog storefront for small sellers — customers browse and check out by sending a pre-filled order to the store's WhatsApp.",
    domain: "E-Commerce · WhatsApp · Small Business",
    liveUrl: "https://w-commerce.vikoabastian.com",
    image: "/project-shots/w-commerce-home.webp",
    tech: ["Next.js", "TypeScript", "Tailwind CSS v4", "Supabase", "Zod", "shadcn/ui", "Vercel"],
    highlights: [
      "Mobile-first catalog with category filter, product detail, and stock status",
      "One-tap WhatsApp checkout — builds a formatted order summary into a wa.me link",
      "Admin panel: product & category management, store settings, protected by Supabase Auth",
      "RLS-first security — anon key only in app code; row-level policies are the security boundary",
      "Defense-in-depth: session-refresh proxy + admin layout role check (admin vs staff)",
      "Strict TypeScript + Zod schemas shared across form validation and server mutations",
    ],
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    subtitle: "This site — vikoabastian.com",
    description:
      "This portfolio: a fast static-export site built with Next.js, deployed to Cloudflare Pages with a GitHub Actions pipeline.",
    domain: "Personal · Static Export · CI/CD",
    liveUrl: "https://vikoabastian.com",
    githubUrl: "https://github.com/vianbas/vikoabastian-portfolio",
    image: "/project-shots/portfolio-home.webp",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudflare Pages", "GitHub Actions"],
    highlights: [
      "Static export (output: export) deployed to Cloudflare Pages via GitHub Actions",
      "Class-based dark mode with localStorage persistence and anti-FOUC init",
      "Terminal-style hero, scroll-reveal animations, count-up stats",
      "Scroll progress bar, back-to-top, custom 404 page, JSON-LD structured data",
    ],
  },
];
