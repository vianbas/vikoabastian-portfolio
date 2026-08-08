export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  summary: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "ArtSwara (PT Mahhasa Artswara Persada)",
    role: "Freelance Fullstack Web Developer",
    period: "June 2026 – Present",
    location: "Jakarta",
    type: "Freelance",
    summary:
      "Developing the ArtSwara e-commerce platform (artswara.co.id) under a service agreement with PT Asia Media Grup Agensi — customer e-commerce features, admin panel, and an offline POS module integrated with the existing ticketing system.",
    highlights: [
      "Built customer features: product catalog, shopping cart, checkout, and payment",
      "Integrated Midtrans payment gateway and courier/expedition APIs",
      "Developed admin panel with dashboard, product, inventory, order, shipping, voucher management, and reports",
      "Built voucher system tied to the ArtSwara ticketing platform",
      "Delivered offline Point of Sales (POS) module with automatic transaction sync",
      "Integrated the e-commerce module with the existing ArtSwara ticketing system",
    ],
  },
  {
    company: "PT Bank Mandiri (Persero) Tbk",
    role: "Software Engineer",
    period: "July 2020 – Present",
    location: "West Jakarta",
    summary:
      "Developing, supporting, deploying, and maintaining banking applications across dispute management, SKN Incoming Debet, WAPU tax collection, ATM/CRM monitoring, TPS Adapter, Telegraphic Transfer, and RTGS systems.",
    highlights: [
      "Built and maintained enterprise banking applications across multiple core banking domains",
      "Delivered fullstack features across Spring Boot backends and React.js / AngularJS frontends",
      "Collaborated with security teams on penetration testing findings and vulnerability remediation",
      "Managed CI/CD workflows using Jenkins across DC and DRC environments",
      "Supported production readiness checks and deployment across private cloud infrastructure",
    ],
  },
  {
    company: "Kita Kitchen",
    role: "Software and DevOps Engineer",
    period: "May 2020 – Dec 2020",
    location: "Remote",
    type: "Part-time",
    summary:
      "Built backend middleware, tenant management functionality, cloud infrastructure, Nginx reverse proxy configuration, and deployment pipelines for Go and Laravel applications on GCP.",
    highlights: [
      "Built middleware gateway API using Go",
      "Built tenant management dashboard using PHP Laravel",
      "Provisioned and configured GCP infrastructure",
      "Configured Nginx reverse proxy for production environments",
      "Automated deployment pipelines for Go and Laravel applications",
    ],
  },
  {
    company: "PT Digital Artha Media",
    role: "Backend Developer",
    period: "Oct 2017 – June 2020",
    location: "South Jakarta",
    summary:
      "Developed and maintained payment, digital wallet, internet payment gateway, and POS applications using Java Struts 2 and Java Spring.",
    highlights: [
      "Developed payment and digital wallet applications using Java Spring",
      "Built and integrated internet payment gateway for LinkAja digital wallet platform",
      "Maintained Point of Sale (POS) application",
      "Used Java Struts 2 and Spring Framework for backend services",
      "Integrated REST APIs for digital wallet payment flows",
    ],
  },
];
