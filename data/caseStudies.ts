import type { Localized } from "@/lib/i18n";

export interface CaseStudy {
  id: string;
  title: Localized<string>;
  period: string;
  domain: Localized<string>;
  role: Localized<string>;
  tech: string[];
  highlights: Localized<string[]>;
  /** Optional screenshot shown at the top of the card */
  image?: string;
  /** Set to false to hide the default NDA note (e.g. public projects) */
  nda?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "artswara-ecommerce",
    title: {
      en: "ArtSwara — E-Commerce Platform & Ticketing Integration",
      id: "ArtSwara — Platform E-Commerce & Integrasi Ticketing",
    },
    period: "2026",
    domain: {
      en: "E-commerce · Payment gateway · Logistics · Ticketing · POS",
      id: "E-commerce · Payment gateway · Logistik · Ticketing · POS",
    },
    role: {
      en: "Freelance Fullstack Web Developer (Contract)",
      id: "Freelance Fullstack Web Developer (Kontrak)",
    },
    image: "/project-shots/artswara-home.webp",
    nda: false,
    tech: ["Laravel", "React", "Inertia.js", "Vite", "Tailwind CSS", "MySQL", "Midtrans", "RabbitMQ"],
    highlights: {
      en: [
        "Developed product catalog with categories and search",
        "Built shopping cart with automatic transaction calculation",
        "Implemented checkout with customer, transaction, and shipping data",
        "Integrated Midtrans payment gateway with automatic status sync",
        "Integrated courier APIs for order, track & trace, tariff, and pickup",
        "Built automated email notification system for transaction and order updates",
        "Developed voucher system integrated with the ArtSwara ticketing platform",
        "Built admin panel: dashboard, product/category/inventory/order/shipping/voucher management, reports",
        "Developed offline Point of Sales (POS) module synced with the main system",
        "Integrated with the existing ArtSwara ticketing system",
      ],
      id: [
        "Mengembangkan katalog produk dengan kategori dan pencarian",
        "Membangun keranjang belanja dengan perhitungan transaksi otomatis",
        "Mengimplementasikan checkout dengan data pelanggan, transaksi, dan pengiriman",
        "Mengintegrasikan payment gateway Midtrans dengan sinkronisasi status otomatis",
        "Mengintegrasikan API kurir untuk pesanan, track & trace, tarif, dan pickup",
        "Membangun sistem notifikasi email otomatis untuk pembaruan transaksi dan pesanan",
        "Mengembangkan sistem voucher yang terintegrasi dengan platform ticketing ArtSwara",
        "Membangun panel admin: dashboard, manajemen produk/kategori/inventori/pesanan/pengiriman/voucher, laporan",
        "Mengembangkan modul Point of Sales (POS) offline yang tersinkron dengan sistem utama",
        "Mengintegrasikan dengan sistem ticketing ArtSwara yang sudah ada",
      ],
    },
  },
  {
    id: "echannel-go",
    title: {
      en: "E-Channel Go — ATM & CRM Monitoring and Reporting Platform",
      id: "E-Channel Go — Platform Monitoring dan Pelaporan ATM & CRM",
    },
    period: "2024–2025",
    domain: {
      en: "E-channel banking · ATM/CRM operations · Monitoring · Reporting",
      id: "Perbankan e-channel · Operasional ATM/CRM · Monitoring · Pelaporan",
    },
    role: {
      en: "Fullstack Engineer / DevOps Support / Security Remediation Support",
      id: "Fullstack Engineer / Dukungan DevOps / Dukungan Perbaikan Keamanan",
    },
    image: "/project-shots/echannelgo-home.webp",
    tech: ["Spring Boot", "React.js", "SQL Server", "Jenkins", "Mandiri Private Cloud"],
    highlights: {
      en: [
        "Built backend services using Spring Boot",
        "Built frontend dashboard functionality using React.js",
        "Integrated SQL Server for reporting and operational data",
        "Supported CI/CD deployment using Jenkins",
        "Prepared production readiness and deployment in DC and DRC environments",
        "Collaborated with security teams to remediate penetration testing findings",
      ],
      id: [
        "Membangun layanan backend menggunakan Spring Boot",
        "Membangun fungsionalitas dashboard frontend menggunakan React.js",
        "Mengintegrasikan SQL Server untuk data pelaporan dan operasional",
        "Mendukung deployment CI/CD menggunakan Jenkins",
        "Menyiapkan kesiapan produksi dan deployment di lingkungan DC dan DRC",
        "Berkolaborasi dengan tim keamanan untuk memperbaiki temuan penetration testing",
      ],
    },
  },
  {
    id: "orp-skn",
    title: {
      en: "ORP — SKN Incoming Debet & WAPU Tax Collection Platform",
      id: "ORP — Platform SKN Incoming Debet & Pemungutan Pajak WAPU",
    },
    period: "2025",
    domain: {
      en: "Banking · National clearing · Tax collection · Secure access",
      id: "Perbankan · Kliring nasional · Pemungutan pajak · Akses aman",
    },
    role: {
      en: "Fullstack / Backend / DevOps Engineer",
      id: "Fullstack / Backend / DevOps Engineer",
    },
    tech: ["Spring Boot", "Microservices", "React.js", "Oracle SQL", "Red Hat SSO", "Jenkins"],
    highlights: {
      en: [
        "Developed Spring Boot microservices for national clearing and tax collection",
        "Built React.js operational modules for banking users",
        "Integrated Oracle SQL for transactional data",
        "Integrated Red Hat Single Sign-On (RH-SSO) for secure access management",
        "Supported Jenkins deployment workflows",
      ],
      id: [
        "Mengembangkan microservices Spring Boot untuk kliring nasional dan pemungutan pajak",
        "Membangun modul operasional React.js untuk pengguna perbankan",
        "Mengintegrasikan Oracle SQL untuk data transaksional",
        "Mengintegrasikan Red Hat Single Sign-On (RH-SSO) untuk manajemen akses aman",
        "Mendukung alur kerja deployment Jenkins",
      ],
    },
  },
  {
    id: "dispute-management",
    title: {
      en: "Enterprise Banking Dispute Management System",
      id: "Sistem Manajemen Sengketa Perbankan Enterprise",
    },
    period: "2025–present",
    domain: {
      en: "Banking · Transaction dispute · Workflow automation",
      id: "Perbankan · Sengketa transaksi · Otomatisasi alur kerja",
    },
    role: {
      en: "Fullstack / Backend / DevOps Engineer",
      id: "Fullstack / Backend / DevOps Engineer",
    },
    tech: ["Spring Boot", "Microservices", "AngularJS", "Oracle SQL", "Flowable BPMN", "Jenkins"],
    highlights: {
      en: [
        "Developed dispute resolution module for banking transactions",
        "Used Flowable BPMN for transaction discrepancy workflow automation",
        "Built backend services with Spring Boot microservices",
        "Built frontend features with AngularJS",
        "Supported Jenkins-based CI/CD delivery pipeline",
      ],
      id: [
        "Mengembangkan modul penyelesaian sengketa untuk transaksi perbankan",
        "Menggunakan Flowable BPMN untuk otomatisasi alur kerja selisih transaksi",
        "Membangun layanan backend dengan microservices Spring Boot",
        "Membangun fitur frontend dengan AngularJS",
        "Mendukung pipeline pengiriman CI/CD berbasis Jenkins",
      ],
    },
  },
  {
    id: "core-banking-tt-rtgs",
    title: {
      en: "Core Banking — Telegraphic Transfer & RTGS Services",
      id: "Core Banking — Layanan Telegraphic Transfer & RTGS",
    },
    period: "2022–2024",
    domain: {
      en: "Core banking · International remittance · High-value domestic payment",
      id: "Core banking · Remitansi internasional · Pembayaran domestik bernilai tinggi",
    },
    role: {
      en: "Software Engineer / Maintenance Engineer",
      id: "Software Engineer / Maintenance Engineer",
    },
    tech: ["Java Struts 1", "JSP", "JavaScript", "Oracle", "WebSphere", "AngularJS", "OPF Framework"],
    highlights: {
      en: [
        "Maintained Incoming and Outgoing Telegraphic Transfer services",
        "Maintained RTGS (Real-Time Gross Settlement) services",
        "Collaborated with Solution Analysts to resolve production and development issues",
        "Managed deployment and database setup for cluster modules",
        "Supported penetration testing and performance testing before production release",
      ],
      id: [
        "Memelihara layanan Telegraphic Transfer Incoming dan Outgoing",
        "Memelihara layanan RTGS (Real-Time Gross Settlement)",
        "Berkolaborasi dengan Solution Analyst untuk menyelesaikan masalah produksi dan pengembangan",
        "Mengelola deployment dan setup database untuk modul cluster",
        "Mendukung penetration testing dan pengujian performa sebelum rilis produksi",
      ],
    },
  },
  {
    id: "kita-kitchen",
    title: {
      en: "Kita Kitchen — Restaurant Website & Tenant Management Dashboard",
      id: "Kita Kitchen — Website Restoran & Dashboard Manajemen Tenant",
    },
    period: "2020",
    domain: {
      en: "Restaurant operations · Tenant management · Cloud deployment",
      id: "Operasional restoran · Manajemen tenant · Deployment cloud",
    },
    role: {
      en: "Fullstack Engineer / DevOps Engineer",
      id: "Fullstack Engineer / DevOps Engineer",
    },
    tech: ["Go", "PHP Laravel", "MySQL", "GCP", "Nginx"],
    highlights: {
      en: [
        "Built middleware gateway API using Go",
        "Built tenant management dashboard using PHP Laravel",
        "Integrated MySQL for data persistence",
        "Provisioned and configured Google Cloud Platform infrastructure",
        "Configured Nginx reverse proxy",
        "Automated deployment pipelines",
      ],
      id: [
        "Membangun API middleware gateway menggunakan Go",
        "Membangun dashboard manajemen tenant menggunakan PHP Laravel",
        "Mengintegrasikan MySQL untuk penyimpanan data",
        "Menyiapkan dan mengonfigurasi infrastruktur Google Cloud Platform",
        "Mengonfigurasi Nginx reverse proxy",
        "Mengotomatiskan pipeline deployment",
      ],
    },
  },
  {
    id: "ipg-linkaja",
    title: {
      en: "Internet Payment Gateway — LinkAja Integration",
      id: "Internet Payment Gateway — Integrasi LinkAja",
    },
    period: "2019–2020",
    domain: {
      en: "Digital wallet · Payment gateway · REST API integration",
      id: "Dompet digital · Payment gateway · Integrasi REST API",
    },
    role: {
      en: "Backend / Integration Engineer",
      id: "Backend / Integration Engineer",
    },
    tech: ["Java Spring", "JavaScript", "REST API"],
    highlights: {
      en: [
        "Built Java Spring integration logic for payment gateway",
        "Integrated REST APIs for digital wallet payment flows",
        "Supported reliable payment gateway transaction processing",
      ],
      id: [
        "Membangun logika integrasi Java Spring untuk payment gateway",
        "Mengintegrasikan REST API untuk alur pembayaran dompet digital",
        "Mendukung pemrosesan transaksi payment gateway yang andal",
      ],
    },
  },
];
