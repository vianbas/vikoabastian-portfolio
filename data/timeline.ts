export type TimelineItemType = "job" | "project";

export interface TimelineItem {
  type: TimelineItemType;
  title: string;
  company: string;
  period: string;
  location?: string;
  tech?: string[];
}

export const timeline: TimelineItem[] = [
  {
    type: "project",
    title: "Enterprise Banking Dispute Management System",
    company: "PT Bank Mandiri",
    period: "2025–present",
    tech: ["Spring Boot", "AngularJS", "Oracle SQL", "Flowable BPMN", "Jenkins"],
  },
  {
    type: "project",
    title: "ORP — SKN Incoming Debet & WAPU Tax Collection",
    company: "PT Bank Mandiri",
    period: "2025",
    tech: ["Spring Boot", "React.js", "Oracle SQL", "Red Hat SSO", "Jenkins"],
  },
  {
    type: "project",
    title: "E-Channel Go — ATM & CRM Monitoring Platform",
    company: "PT Bank Mandiri",
    period: "2024–2025",
    tech: ["Spring Boot", "React.js", "SQL Server", "Jenkins"],
  },
  {
    type: "job",
    title: "Software Engineer",
    company: "PT Bank Mandiri (Persero) Tbk",
    period: "July 2020 – Present",
    location: "West Jakarta",
  },
  {
    type: "project",
    title: "Core Banking — Telegraphic Transfer & RTGS",
    company: "PT Bank Mandiri",
    period: "2022–2024",
    tech: ["Java Struts", "Oracle", "WebSphere", "AngularJS"],
  },
  {
    type: "job",
    title: "Software & DevOps Engineer",
    company: "Kita Kitchen",
    period: "May 2020 – Dec 2020",
    location: "Remote",
  },
  {
    type: "project",
    title: "Kita Kitchen — Restaurant & Tenant Management",
    company: "Kita Kitchen",
    period: "2020",
    tech: ["Go", "PHP Laravel", "MySQL", "GCP", "Nginx"],
  },
  {
    type: "project",
    title: "Internet Payment Gateway — LinkAja Integration",
    company: "PT Digital Artha Media",
    period: "2019–2020",
    tech: ["Java Spring", "REST API"],
  },
  {
    type: "job",
    title: "Backend Developer",
    company: "PT Digital Artha Media",
    period: "Oct 2017 – June 2020",
    location: "South Jakarta",
  },
];
