// Placeholder content for the SRE portfolio. Edit freely.

export const profile = {
  name: "Nishaant Dhingra",
  handle: "nish",
  role: "Site Reliability Engineer",
  location: "Toronto, Canada",
  email: "nishaantdhingra@gmail.com", //create new portfolio email
  shortBio:
    "I work on making systems reliable and observable through better monitoring, alerting, and automation. Focused on reducing incident impact and improving how teams understand production behavior.",
  longBio: "Currently working in Site Reliability Engineering with experience in monitoring, alerting, observability, and automation for production systems. Interested in building reliable systems and improving operational efficiency through practical engineering solutions.",  
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
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Java"],
  },
  {
    group: "Observability",
    items: ["New Relic", "Dynatrace", "Moogsoft", "xMatters"],
  },
  { group: "Infrastructure & CI", items: ["Terraform", "Jenkins"] },
  {
    group: "Monitoring",
    items: ["Synthetic monitoring", "Dashboards", "Alerting"],
  },
  { group: "Developer Tools", items: ["Git", "Postman", "Bruno", "Jira"] },
];

export const experience = [
  {
    company: "Manulife | Full-time",
    role: "Site Reliability Engineer",
    period: "July 2024 — Present",
    location: "Toronto",
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
    location: "Toronto",
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
    location: "Mississauga",
    bullets: [
      "Collaborated with cross-functional teams in an agile environment to develop and deliver new application features across frontend and backend systems.",
      "Built Single Page Application functionality using Angular, Redux, C#, and SQL while contributing through feature development, code reviews, and unit testing.",
      "Improved application reliability and code quality by increasing unit test coverage by 15% and working closely with product managers to align features with customer requirements.",
    ],
    tags: ["TypeScript", "Angular", "Java", "C#", "SQL"],
  },
];

export const education = [
  {
    school: "York University",
    degree: "Bachelor of Science with Honours in Computer Science",
    period: "2019 — 2024",
    details:
      "Focused on software engineering, systems, databases, and algorithms.",
  },
  {
    school: "K. R. Mangalam World School",
    degree: "High School",
    period: "2017 — 2018",
    details:
      "Studied physics, chemistry, mathematics, and computer science (C++)",
  },
];

export const projects = [
  {
    title: "techtronix",
    summary:
      "Full-stack e-commerce web application built with JSP featuring shopping cart, checkout flow, and admin sales/order management capabilities.",
    stack: ["Java Servlets", "HTML", "CSS", "JavaScript", "SQL"],
    status: "academic",
    link: "https://github.com/dhingranishaant/TechTronix",
  },
  {
    title: "eazy-survey",
    summary:
      "Survey management platform developed in a team environment allowing administrators to create surveys and users to complete them through a responsive web interface.",
    stack: ["Angular", "TypeScript", "C#", "SQL", "Entity Framework"],
    status: "professional",
    link: "https://github.com/dhingranishaant/Eazy-Survey",
  },
  {
    title: "sre-portfolio",
    summary:
      "Personal portfolio website built to showcase projects, experience, and technical skills through a modern responsive interface with custom UI components and smooth navigation.",
    stack: ["React", "JavaScript", "Tailwind CSS", "CRACO", "GitHub Pages"],
    status: "personal",
    link: "https://github.com/dhingranishaant/portfolio-react",
  },
  {
    title: "mini-soccer-game",
    summary:
      "Java Swing desktop game developed for EECS 3311 where players compete to score goals before the timer expires, with gameplay driven through keyboard input handling.",
    stack: ["Java", "Java Swing", "JUnit", "Eclipse"],
    status: "academic",
    link: "https://github.com/dhingranishaant/Mini-Soccer-Game",
  },
  {
    title: "transcript-generator",
    summary:
      "Java-based transcript generation system that processes student records, calculates GPAs, and generates unofficial transcripts using object-oriented programming principles.",
    stack: ["Java", "JUnit", "Eclipse"],
    status: "personal",
    link: "https://github.com/dhingranishaant/Transcript",
  },
  {
    title: "flask-weather-dashboard",
    summary:
      "Weather dashboard web application built with Flask and OpenWeatherMap API, allowing users to retrieve weather information across U.S. locations using zip codes.",
    stack: ["Python", "Flask", "HTML", "CSS", "OpenWeatherMap API"],
    status: "personal",
    link: "https://github.com/dhingranishaant/Flask-Weather-Dashboard",
  },
  {
    title: "shortest-path-finding",
    summary:
      "Recursive pathfinding application developed for EECS 2030 that calculates the shortest route for a vehicle to navigate through a grid-based city while handling repeated intersections and route resets.",
    stack: ["Java", "JUnit", "Eclipse"],
    status: "academic",
    link: "https://github.com/dhingranishaant/Path-Finder",
  },
];

export const navItems = [
  { id: "about", label: "About", key: "1" },
  { id: "education", label: "Education", key: "2" },
  { id: "experience", label: "Experience", key: "3" },
  { id: "projects", label: "Projects", key: "4" },
  { id: "contact", label: "Contact", key: "5" },
];

export const projectStatuses = [
    "all",
    "personal",
    "professional",
    "experimental",
    "academic",
];