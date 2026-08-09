import type { Localized } from "@/lib/i18n";

export interface SkillGroup {
  category: Localized<string>;
  description: Localized<string>;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: { en: "Backend Engineering", id: "Rekayasa Backend" },
    description: {
      en: "Server-side systems, APIs, and business logic",
      id: "Sistem server-side, API, dan logika bisnis",
    },
    skills: [
      "Java",
      "Spring Boot",
      "Java Struts 1",
      "Java Struts 2",
      "Go / Golang",
      "PHP Laravel",
      "REST API",
      "Microservices",
      "Flowable BPMN",
      "Payment Gateway Integration",
      "Core Banking Systems",
    ],
  },
  {
    category: { en: "Frontend Engineering", id: "Rekayasa Frontend" },
    description: {
      en: "User interfaces, dashboards, and browser-side applications",
      id: "Antarmuka pengguna, dashboard, dan aplikasi sisi browser",
    },
    skills: [
      "React.js",
      "AngularJS",
      "JavaScript",
      "TypeScript",
      "JSP",
      "HTML5",
      "CSS3",
      "SASS",
      "Responsive Design",
      "Enterprise Dashboards",
    ],
  },
  {
    category: { en: "Database Engineering", id: "Rekayasa Database" },
    description: {
      en: "Relational databases, query optimization, and data modeling",
      id: "Database relasional, optimasi query, dan pemodelan data",
    },
    skills: ["Oracle SQL", "MySQL", "SQL Server", "HQL"],
  },
  {
    category: { en: "DevSecOps & Infrastructure", id: "DevSecOps & Infrastruktur" },
    description: {
      en: "CI/CD pipelines, cloud, containerization, and deployment",
      id: "Pipeline CI/CD, cloud, kontainerisasi, dan deployment",
    },
    skills: [
      "Jenkins",
      "Docker",
      "Linux / RHEL",
      "Nginx",
      "Google Cloud Platform",
      "Mandiri Private Cloud",
      "cPanel",
      "Cloudflare",
      "Shell Scripting",
      "DC / DRC Deployment",
      "Production Readiness",
    ],
  },
  {
    category: { en: "Observability, Security & Quality", id: "Observability, Keamanan & Kualitas" },
    description: {
      en: "Monitoring, security hardening, and engineering quality",
      id: "Monitoring, penguatan keamanan, dan kualitas rekayasa",
    },
    skills: [
      "ELK Stack",
      "System Monitoring",
      "Google Analytics",
      "Penetration Testing Support",
      "Performance Testing Support",
      "Vulnerability Assessment",
      "Vulnerability Remediation",
      "Red Hat Single Sign-On",
    ],
  },
];
