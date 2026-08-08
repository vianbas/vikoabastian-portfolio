export interface CaseStudy {
  id: string;
  title: string;
  period: string;
  domain: string;
  role: string;
  tech: string[];
  highlights: string[];
  /** Optional screenshot shown at the top of the card */
  image?: string;
  /** Set to false to hide the default NDA note (e.g. public projects) */
  nda?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "artswara-ecommerce",
    title: "ArtSwara — E-Commerce Platform & Ticketing Integration",
    period: "2026",
    domain: "E-commerce · Payment gateway · Logistics · Ticketing · POS",
    role: "Freelance Fullstack Web Developer (Contract)",
    image: "/project-shots/artswara-home.webp",
    nda: false,
    tech: ["Laravel", "React", "Inertia.js", "Vite", "Tailwind CSS", "MySQL", "Midtrans", "RabbitMQ"],
    highlights: [
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
  },
  {
    id: "echannel-go",
    title: "E-Channel Go — ATM & CRM Monitoring and Reporting Platform",
    period: "2024–2025",
    domain: "E-channel banking · ATM/CRM operations · Monitoring · Reporting",
    role: "Fullstack Engineer / DevOps Support / Security Remediation Support",
    tech: ["Spring Boot", "React.js", "SQL Server", "Jenkins", "Mandiri Private Cloud"],
    highlights: [
      "Built backend services using Spring Boot",
      "Built frontend dashboard functionality using React.js",
      "Integrated SQL Server for reporting and operational data",
      "Supported CI/CD deployment using Jenkins",
      "Prepared production readiness and deployment in DC and DRC environments",
      "Collaborated with security teams to remediate penetration testing findings",
    ],
  },
  {
    id: "orp-skn",
    title: "ORP — SKN Incoming Debet & WAPU Tax Collection Platform",
    period: "2025",
    domain: "Banking · National clearing · Tax collection · Secure access",
    role: "Fullstack / Backend / DevOps Engineer",
    tech: ["Spring Boot", "Microservices", "React.js", "Oracle SQL", "Red Hat SSO", "Jenkins"],
    highlights: [
      "Developed Spring Boot microservices for national clearing and tax collection",
      "Built React.js operational modules for banking users",
      "Integrated Oracle SQL for transactional data",
      "Integrated Red Hat Single Sign-On (RH-SSO) for secure access management",
      "Supported Jenkins deployment workflows",
    ],
  },
  {
    id: "dispute-management",
    title: "Enterprise Banking Dispute Management System",
    period: "2025–present",
    domain: "Banking · Transaction dispute · Workflow automation",
    role: "Fullstack / Backend / DevOps Engineer",
    tech: ["Spring Boot", "Microservices", "AngularJS", "Oracle SQL", "Flowable BPMN", "Jenkins"],
    highlights: [
      "Developed dispute resolution module for banking transactions",
      "Used Flowable BPMN for transaction discrepancy workflow automation",
      "Built backend services with Spring Boot microservices",
      "Built frontend features with AngularJS",
      "Supported Jenkins-based CI/CD delivery pipeline",
    ],
  },
  {
    id: "core-banking-tt-rtgs",
    title: "Core Banking — Telegraphic Transfer & RTGS Services",
    period: "2022–2024",
    domain: "Core banking · International remittance · High-value domestic payment",
    role: "Software Engineer / Maintenance Engineer",
    tech: ["Java Struts 1", "JSP", "JavaScript", "Oracle", "WebSphere", "AngularJS", "OPF Framework"],
    highlights: [
      "Maintained Incoming and Outgoing Telegraphic Transfer services",
      "Maintained RTGS (Real-Time Gross Settlement) services",
      "Collaborated with Solution Analysts to resolve production and development issues",
      "Managed deployment and database setup for cluster modules",
      "Supported penetration testing and performance testing before production release",
    ],
  },
  {
    id: "kita-kitchen",
    title: "Kita Kitchen — Restaurant Website & Tenant Management Dashboard",
    period: "2020",
    domain: "Restaurant operations · Tenant management · Cloud deployment",
    role: "Fullstack Engineer / DevOps Engineer",
    tech: ["Go", "PHP Laravel", "MySQL", "GCP", "Nginx"],
    highlights: [
      "Built middleware gateway API using Go",
      "Built tenant management dashboard using PHP Laravel",
      "Integrated MySQL for data persistence",
      "Provisioned and configured Google Cloud Platform infrastructure",
      "Configured Nginx reverse proxy",
      "Automated deployment pipelines",
    ],
  },
  {
    id: "ipg-linkaja",
    title: "Internet Payment Gateway — LinkAja Integration",
    period: "2019–2020",
    domain: "Digital wallet · Payment gateway · REST API integration",
    role: "Backend / Integration Engineer",
    tech: ["Java Spring", "JavaScript", "REST API"],
    highlights: [
      "Built Java Spring integration logic for payment gateway",
      "Integrated REST APIs for digital wallet payment flows",
      "Supported reliable payment gateway transaction processing",
    ],
  },
];
