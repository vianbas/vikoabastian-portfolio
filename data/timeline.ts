import type { Localized } from "@/lib/i18n";

export type TimelineItemType = "job" | "project";

export interface TimelineItem {
  type: TimelineItemType;
  title: Localized<string>;
  company: string;
  period: string;
  location?: string;
  tech?: string[];
  /** Optional short tag rendered on job entries, e.g. "Freelance" */
  badge?: Localized<string>;
}

export const timeline: TimelineItem[] = [
  {
    type: "job",
    title: {
      en: "Freelance Fullstack Web Developer",
      id: "Freelance Fullstack Web Developer",
    },
    company: "ArtSwara (PT Mahhasa Artswara Persada)",
    period: "June 2026 – Present",
    location: "Jakarta",
    badge: { en: "Freelance", id: "Freelance" },
  },
  {
    type: "project",
    title: {
      en: "ArtSwara — E-Commerce & Ticketing Integration",
      id: "ArtSwara — Integrasi E-Commerce & Ticketing",
    },
    company: "ArtSwara (artswara.co.id)",
    period: "2026",
    tech: ["Laravel", "React", "Inertia.js", "Midtrans", "MySQL", "RabbitMQ"],
  },
  {
    type: "project",
    title: {
      en: "Enterprise Banking Dispute Management System",
      id: "Sistem Manajemen Sengketa Perbankan Enterprise",
    },
    company: "PT Bank Mandiri",
    period: "2025–present",
    tech: ["Spring Boot", "AngularJS", "Oracle SQL", "Flowable BPMN", "Jenkins"],
  },
  {
    type: "project",
    title: {
      en: "ORP — SKN Incoming Debet & WAPU Tax Collection",
      id: "ORP — SKN Incoming Debet & Pemungutan Pajak WAPU",
    },
    company: "PT Bank Mandiri",
    period: "2025",
    tech: ["Spring Boot", "React.js", "Oracle SQL", "Red Hat SSO", "Jenkins"],
  },
  {
    type: "project",
    title: {
      en: "E-Channel Go — ATM & CRM Monitoring Platform",
      id: "E-Channel Go — Platform Monitoring ATM & CRM",
    },
    company: "PT Bank Mandiri",
    period: "2024–2025",
    tech: ["Spring Boot", "React.js", "SQL Server", "Jenkins"],
  },
  {
    type: "job",
    title: {
      en: "Software Engineer",
      id: "Software Engineer",
    },
    company: "PT Bank Mandiri (Persero) Tbk",
    period: "July 2020 – Present",
    location: "West Jakarta",
  },
  {
    type: "project",
    title: {
      en: "Core Banking — Telegraphic Transfer & RTGS",
      id: "Core Banking — Telegraphic Transfer & RTGS",
    },
    company: "PT Bank Mandiri",
    period: "2022–2024",
    tech: ["Java Struts", "Oracle", "WebSphere", "AngularJS"],
  },
  {
    type: "job",
    title: {
      en: "Software & DevOps Engineer",
      id: "Software & DevOps Engineer",
    },
    company: "Kita Kitchen",
    period: "May 2020 – Dec 2020",
    location: "Remote",
  },
  {
    type: "project",
    title: {
      en: "Kita Kitchen — Restaurant & Tenant Management",
      id: "Kita Kitchen — Manajemen Restoran & Tenant",
    },
    company: "Kita Kitchen",
    period: "2020",
    tech: ["Go", "PHP Laravel", "MySQL", "GCP", "Nginx"],
  },
  {
    type: "project",
    title: {
      en: "Internet Payment Gateway — LinkAja Integration",
      id: "Internet Payment Gateway — Integrasi LinkAja",
    },
    company: "PT Digital Artha Media",
    period: "2019–2020",
    tech: ["Java Spring", "REST API"],
  },
  {
    type: "job",
    title: {
      en: "Backend Developer",
      id: "Backend Developer",
    },
    company: "PT Digital Artha Media",
    period: "Oct 2017 – June 2020",
    location: "South Jakarta",
  },
];
