export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend Engineering",
    description: "Server-side systems, APIs, and business logic",
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
    category: "Frontend Engineering",
    description: "User interfaces, dashboards, and browser-side applications",
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
    category: "Database Engineering",
    description: "Relational databases, query optimization, and data modeling",
    skills: ["Oracle SQL", "MySQL", "SQL Server", "HQL"],
  },
  {
    category: "DevSecOps & Infrastructure",
    description: "CI/CD pipelines, cloud, containerization, and deployment",
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
    category: "Observability, Security & Quality",
    description: "Monitoring, security hardening, and engineering quality",
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
