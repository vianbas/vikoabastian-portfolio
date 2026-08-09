import type { Localized } from "@/lib/i18n";

export interface Experience {
  company: string;
  role: Localized<string>;
  period: string;
  location: string;
  type?: Localized<string>;
  summary: Localized<string>;
  highlights: Localized<string[]>;
}

export const experiences: Experience[] = [
  {
    company: "ArtSwara (PT Mahhasa Artswara Persada)",
    role: {
      en: "Freelance Fullstack Web Developer",
      id: "Freelance Fullstack Web Developer",
    },
    period: "June 2026 – Present",
    location: "Jakarta",
    type: { en: "Freelance", id: "Freelance" },
    summary: {
      en: "Developing the ArtSwara e-commerce platform (artswara.co.id) under a service agreement with PT Asia Media Grup Agensi — customer e-commerce features, admin panel, and an offline POS module integrated with the existing ticketing system.",
      id: "Mengembangkan platform e-commerce ArtSwara (artswara.co.id) dalam perjanjian kerja sama dengan PT Asia Media Grup Agensi — fitur e-commerce untuk pelanggan, panel admin, dan modul POS offline yang terintegrasi dengan sistem ticketing yang sudah ada.",
    },
    highlights: {
      en: [
        "Built customer features: product catalog, shopping cart, checkout, and payment",
        "Integrated Midtrans payment gateway and courier/expedition APIs",
        "Developed admin panel with dashboard, product, inventory, order, shipping, voucher management, and reports",
        "Built voucher system tied to the ArtSwara ticketing platform",
        "Delivered offline Point of Sales (POS) module with automatic transaction sync",
        "Integrated the e-commerce module with the existing ArtSwara ticketing system",
      ],
      id: [
        "Membangun fitur pelanggan: katalog produk, keranjang belanja, checkout, dan pembayaran",
        "Mengintegrasikan payment gateway Midtrans dan API kurir/ekspedisi",
        "Mengembangkan panel admin dengan dashboard, manajemen produk, inventori, pesanan, pengiriman, voucher, dan laporan",
        "Membangun sistem voucher yang terhubung dengan platform ticketing ArtSwara",
        "Menyelesaikan modul Point of Sales (POS) offline dengan sinkronisasi transaksi otomatis",
        "Mengintegrasikan modul e-commerce dengan sistem ticketing ArtSwara yang sudah ada",
      ],
    },
  },
  {
    company: "PT Bank Mandiri (Persero) Tbk",
    role: {
      en: "Software Engineer",
      id: "Software Engineer",
    },
    period: "July 2020 – Present",
    location: "West Jakarta",
    summary: {
      en: "Developing, supporting, deploying, and maintaining banking applications across dispute management, SKN Incoming Debet, WAPU tax collection, ATM/CRM monitoring, TPS Adapter, Telegraphic Transfer, and RTGS systems.",
      id: "Mengembangkan, mendukung, men-deploy, dan memelihara aplikasi perbankan di bidang manajemen sengketa, SKN Incoming Debet, pemungutan pajak WAPU, monitoring ATM/CRM, TPS Adapter, Telegraphic Transfer, dan sistem RTGS.",
    },
    highlights: {
      en: [
        "Built and maintained enterprise banking applications across multiple core banking domains",
        "Delivered fullstack features across Spring Boot backends and React.js / AngularJS frontends",
        "Collaborated with security teams on penetration testing findings and vulnerability remediation",
        "Managed CI/CD workflows using Jenkins across DC and DRC environments",
        "Supported production readiness checks and deployment across private cloud infrastructure",
      ],
      id: [
        "Membangun dan memelihara aplikasi perbankan enterprise di berbagai domain core banking",
        "Menyelesaikan fitur fullstack di backend Spring Boot dan frontend React.js / AngularJS",
        "Berkolaborasi dengan tim keamanan pada temuan penetration testing dan perbaikan kerentanan",
        "Mengelola alur kerja CI/CD menggunakan Jenkins di lingkungan DC dan DRC",
        "Mendukung pemeriksaan kesiapan produksi dan deployment di infrastruktur private cloud",
      ],
    },
  },
  {
    company: "Kita Kitchen",
    role: {
      en: "Software and DevOps Engineer",
      id: "Software and DevOps Engineer",
    },
    period: "May 2020 – Dec 2020",
    location: "Remote",
    type: { en: "Part-time", id: "Paruh waktu" },
    summary: {
      en: "Built backend middleware, tenant management functionality, cloud infrastructure, Nginx reverse proxy configuration, and deployment pipelines for Go and Laravel applications on GCP.",
      id: "Membangun middleware backend, fungsionalitas manajemen tenant, infrastruktur cloud, konfigurasi Nginx reverse proxy, dan pipeline deployment untuk aplikasi Go dan Laravel di GCP.",
    },
    highlights: {
      en: [
        "Built middleware gateway API using Go",
        "Built tenant management dashboard using PHP Laravel",
        "Provisioned and configured GCP infrastructure",
        "Configured Nginx reverse proxy for production environments",
        "Automated deployment pipelines for Go and Laravel applications",
      ],
      id: [
        "Membangun API middleware gateway menggunakan Go",
        "Membangun dashboard manajemen tenant menggunakan PHP Laravel",
        "Menyiapkan dan mengonfigurasi infrastruktur GCP",
        "Mengonfigurasi Nginx reverse proxy untuk lingkungan produksi",
        "Mengotomatiskan pipeline deployment untuk aplikasi Go dan Laravel",
      ],
    },
  },
  {
    company: "PT Digital Artha Media",
    role: {
      en: "Backend Developer",
      id: "Backend Developer",
    },
    period: "Oct 2017 – June 2020",
    location: "South Jakarta",
    summary: {
      en: "Developed and maintained payment, digital wallet, internet payment gateway, and POS applications using Java Struts 2 and Java Spring.",
      id: "Mengembangkan dan memelihara aplikasi pembayaran, dompet digital, internet payment gateway, dan POS menggunakan Java Struts 2 dan Java Spring.",
    },
    highlights: {
      en: [
        "Developed payment and digital wallet applications using Java Spring",
        "Built and integrated internet payment gateway for LinkAja digital wallet platform",
        "Maintained Point of Sale (POS) application",
        "Used Java Struts 2 and Spring Framework for backend services",
        "Integrated REST APIs for digital wallet payment flows",
      ],
      id: [
        "Mengembangkan aplikasi pembayaran dan dompet digital menggunakan Java Spring",
        "Membangun dan mengintegrasikan internet payment gateway untuk platform dompet digital LinkAja",
        "Memelihara aplikasi Point of Sale (POS)",
        "Menggunakan Java Struts 2 dan Spring Framework untuk layanan backend",
        "Mengintegrasikan REST API untuk alur pembayaran dompet digital",
      ],
    },
  },
];
