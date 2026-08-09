import type { Localized } from "@/lib/i18n";

export interface LiveProject {
  id: string;
  title: string;
  subtitle: Localized<string>;
  description: Localized<string>;
  domain: Localized<string>;
  liveUrl: string;
  githubUrl?: string;
  /** Optional screenshot shown at the top of the card */
  image?: string;
  tech: string[];
  highlights: Localized<string[]>;
}

export const liveProjects: LiveProject[] = [
  {
    id: "kpr-calculator",
    title: "KPR Calculator",
    subtitle: {
      en: "Indonesian Mortgage (KPR) Simulation",
      id: "Simulasi Kredit Pemilikan Rumah",
    },
    description: {
      en: "Client-side Indonesian mortgage simulation tool — runs entirely in the browser, no backend, no account required.",
      id: "Alat simulasi KPR Indonesia yang berjalan sepenuhnya di browser — tanpa backend, tanpa akun.",
    },
    domain: {
      en: "Personal Finance · Mortgage · Banking",
      id: "Keuangan Pribadi · KPR · Perbankan",
    },
    liveUrl: "https://kpr.vikoabastian.com",
    image: "/project-shots/kpr-calculator-home.webp",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Decimal.js", "PWA"],
    highlights: {
      en: [
        "Annuity & flat-rate simulation with fixed, floating, and multi-tier rate schedules",
        "KPR Syariah/iB: Murabahah (fixed margin) and Musyarakah Mutanaqishah (declining ujrah)",
        "Affordability analysis: DSR check, stress test (+1–+3%), reverse affordability estimator",
        "Upfront cost calculator: DP, provision, notary, BPHTB, PPN, life & fire insurance",
        "Refinancing simulator, LTV guardrail vs BI caps, Buy vs Rent, FLPP subsidy check",
        "Shareable URL (LZString), PDF/CSV export, up to 3 side-by-side scenarios, installable PWA",
      ],
      id: [
        "Simulasi anuitas & flat dengan jadwal suku bunga tetap, mengambang, dan bertingkat",
        "KPR Syariah/iB: Murabahah (margin tetap) dan Musyarakah Mutanaqishah (ujrah menurun)",
        "Analisis keterjangkauan: cek DSR, stress test (+1–+3%), estimator keterjangkauan terbalik",
        "Kalkulator biaya awal: DP, provisi, notaris, BPHTB, PPN, asuransi jiwa & kebakaran",
        "Simulator refinancing, pagu LTV vs ketentuan BI, Beli vs Sewa, cek subsidi FLPP",
        "URL yang dapat dibagikan (LZString), ekspor PDF/CSV, hingga 3 skenario berdampingan, PWA terpasang",
      ],
    },
  },
  {
    id: "w-commerce",
    title: "W-Commerce",
    subtitle: {
      en: "WhatsApp Catalog Commerce",
      id: "WhatsApp Catalog Commerce",
    },
    description: {
      en: "Lightweight product-catalog storefront for small sellers — customers browse and check out by sending a pre-filled order to the store's WhatsApp.",
      id: "Toko katalog produk ringan untuk penjual kecil — pelanggan melihat produk dan checkout dengan mengirim pesanan terisi otomatis ke WhatsApp toko.",
    },
    domain: {
      en: "E-Commerce · WhatsApp · Small Business",
      id: "E-Commerce · WhatsApp · Usaha Kecil",
    },
    liveUrl: "https://w-commerce.vikoabastian.com",
    image: "/project-shots/w-commerce-home.webp",
    tech: ["Next.js", "TypeScript", "Tailwind CSS v4", "Supabase", "Zod", "shadcn/ui", "Vercel"],
    highlights: {
      en: [
        "Mobile-first catalog with category filter, product detail, and stock status",
        "One-tap WhatsApp checkout — builds a formatted order summary into a wa.me link",
        "Admin panel: product & category management, store settings, protected by Supabase Auth",
        "RLS-first security — anon key only in app code; row-level policies are the security boundary",
        "Defense-in-depth: session-refresh proxy + admin layout role check (admin vs staff)",
        "Strict TypeScript + Zod schemas shared across form validation and server mutations",
      ],
      id: [
        "Katalog mobile-first dengan filter kategori, detail produk, dan status stok",
        "Checkout WhatsApp satu ketukan — menyusun ringkasan pesanan berformat ke link wa.me",
        "Panel admin: manajemen produk & kategori, pengaturan toko, dilindungi Supabase Auth",
        "Keamanan RLS-first — hanya anon key di kode aplikasi; kebijakan tingkat baris adalah batas keamanan",
        "Defense-in-depth: proxy penyegaran sesi + pemeriksaan peran layout admin (admin vs staff)",
        "TypeScript ketat + skema Zod yang dibagikan lintas validasi form dan mutasi server",
      ],
    },
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    subtitle: {
      en: "This site — vikoabastian.com",
      id: "Situs ini — vikoabastian.com",
    },
    description: {
      en: "This portfolio: a fast static-export site built with Next.js, deployed to Cloudflare Pages with a GitHub Actions pipeline.",
      id: "Portofolio ini: situs static-export cepat yang dibangun dengan Next.js, di-deploy ke Cloudflare Pages dengan pipeline GitHub Actions.",
    },
    domain: {
      en: "Personal · Static Export · CI/CD",
      id: "Pribadi · Static Export · CI/CD",
    },
    liveUrl: "https://vikoabastian.com",
    githubUrl: "https://github.com/vianbas/vikoabastian-portfolio",
    image: "/project-shots/portfolio-home.webp",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudflare Pages", "GitHub Actions"],
    highlights: {
      en: [
        "Static export (output: export) deployed to Cloudflare Pages via GitHub Actions",
        "Class-based dark mode with localStorage persistence and anti-FOUC init",
        "Terminal-style hero, scroll-reveal animations, count-up stats",
        "Scroll progress bar, back-to-top, custom 404 page, JSON-LD structured data",
      ],
      id: [
        "Static export (output: export) di-deploy ke Cloudflare Pages via GitHub Actions",
        "Dark mode berbasis class dengan persistensi localStorage dan inisialisasi anti-FOUC",
        "Hero bergaya terminal, animasi scroll-reveal, statistik count-up",
        "Scroll progress bar, back-to-top, halaman 404 kustom, data terstruktur JSON-LD",
      ],
    },
  },
];
