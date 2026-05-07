// Placeholder content for the SRE portfolio. Edit freely.

export const profile = {
    name: "Nishaant Dhingra",
    handle: "nish",
    role: "Site Reliability Engineer",
    location: "Toronto",
    email: "hello@yourname.dev", //create new portfolio email
    shortBio:
        "I work on making systems reliable and observable through better monitoring, alerting, and automation. Focused on reducing incident impact and improving how teams understand production behavior.",
    longBio:
        "Site Reliability Engineer focused on automation, observability, and building reliable systems. I work on monitoring, alerting, and automation to reduce incidents and make systems easier to operate and debug.",
    socials: {
        github: "https://github.com/dhingranishaant",
        linkedin: "https://www.linkedin.com/in/nishaant-dhingra/",
        resume: "#",
    },
    metrics: [
        { label: "mttr", value: "< 12m" },
        { label: "on-call", value: "available" },
    ],
};

export const stack = [
    { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Java"] },
    { group: "Observability", items: ["New Relic", "Dynatrace", "Moogsoft", "xMatters"] },
    { group: "Infrastructure & CI", items: ["Terraform", "Jenkins"] },
    { group: "Monitoring", items: ["Synthetic monitoring", "Dashboards", "Alerting"] },
    { group: "Developer Tools", items: ["Git", "Postman", "Bruno", "Jira"] },
];

export const experience = [
    {
        company: "Manulife | Full-time",
        role: "Site Reliability Engineer",
        period: "July 2024 — Present",
        bullets: [
            "Built and maintained New Relic observability stack, including synthetic monitors, alert policies, and dashboarding for production services.",
            "Configured incident alerting workflows using Moogsoft and xMatters for paging, escalation, and situation creation.",
            "Investigated production issues raised via Jira tickets, performing root-cause analysis and coordinating remediation with engineering teams.",
            "Tuned monitoring and alerting signals to reduce noise and improve actionable incident detection.",
        ],
        tags: ["New Relic", "Moogsoft", "xMatters", "Python"],
    },
    {
        company: "Manulife | Co-op",
        role: "Platform Engineer",
        period: "September 2023 — December 2023",
        bullets: [
            "Built and maintained browser and HTTP synthetic monitoring scripts using Dynatrace and New Relic to improve observability and incident detection.",
            "Developed and deployed a Python automation solution that reduced manual operational workload by 95% and became part of daily production workflows.",
            "Contributed to large-scale synthetic migration efforts from Dynatrace to New Relic while helping establish monitoring best practices that improved incident response efficiency.",
        ],
        tags: ["New Relic", "Dynatrace", "xMatters", "PRTG", "Python"],
    },
    {
        company: "SOTI | Co-op",
        role: "Software Developer",
        period: "May 2022 — April 2023",
        bullets: [
            "Collaborated with cross-functional teams in an agile environment to develop and deliver new application features across frontend and backend systems.",
            "Built Single Page Application functionality using Angular, Redux, C#, and SQL while contributing through feature development, code reviews, and unit testing.",
            "Improved application reliability and code quality by increasing unit test coverage by 15% and working closely with product managers to align features with customer requirements.",
        ],
        tags: ["Typescript", "Angular", "Java", "C#", "SQL"],
    },
];

export const education = [
    {
        school: "York University",
        degree: "B.Sc. Honors in Computer Science",
        period: "2019 — 2024",
        details: "Focused on software engineering, systems, databases, and algorithms.",    }
];

export const projects = [
    {
      title: "techtronix",
      summary:
        "Full-stack e-commerce web application built with JSP featuring shopping cart, checkout flow, and admin sales/order management capabilities.",
      stack: ["Java Servlets", "HTML", "CSS", "JavaScript", "SQL"],
      status: "academic",
      link: "#",
    },
    {
      title: "eazy-survey",
      summary:
        "Survey management platform developed in a team environment allowing administrators to create surveys and users to complete them through a responsive web interface.",
      stack: ["Angular", "TypeScript", "C#", "SQL", "Entity Framework"],
      status: "internship",
      link: "#",
    },
    {
      title: "personal-portfolio",
      summary:
        "Personal portfolio website focused on responsive UI design and smooth user experience with interactive navigation and modern frontend styling.",
      stack: ["HTML5", "CSS", "Bootstrap", "JavaScript", "GitHub"],
      status: "experimental",
      link: "#",
    },
  ];

export const navItems = [
    { id: "about", label: "About", key: "1" },
    { id: "education", label: "Education", key: "2" },
    { id: "experience", label: "Experience", key: "3" },
    { id: "projects", label: "Projects", key: "4" },
    { id: "contact", label: "Contact", key: "5" },
];
