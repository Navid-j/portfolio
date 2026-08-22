export const SITE = {
  title: "Navid Jahangiri | Software Engineer",
  description: "Personal portfolio of Navid Jahangiri, Software Engineer and Project Control Specialist with experience in C#, .NET MAUI, Python, Unity, automation, and EPC infrastructure projects.",
  author: "Navid Jahangiri",
  locale: "en-US",
  type: "Person",
};

export const PROFILE = {
  identity: {
    name: "Navid Jahangiri",
    location: "Iran",
    title: "Software Engineer",
    secondaryTitle: "Project Control Specialist",
    email: "navid.jahangiry@live.com",
    phone: "+98 939 628 1508",
    linkedin: "https://www.linkedin.com/in/navid-jahangiri/",
    github: "https://github.com/Navid-j",
  },
  summary:
    "Software Engineer with experience in C#, .NET MAUI, Unity, Python, and software automation, currently working as a Project Control Specialist on large-scale EPC oil & gas infrastructure projects. Skilled in cross-platform application development, REST API integration, Oracle Primavera P6, and engineering project controls. Strong analytical mindset with the ability to bridge software engineering and project controls to deliver practical, efficient, and scalable solutions.",
};

export const SKILLS = {
  programming: ["C#", "Python", "Java", "Kotlin", "SQL"],
  frameworks: [".NET", ".NET MAUI", "ASP.NET Core", "Unity"],
  backend: ["REST APIs", "JSON", "WordPress REST API"],
  tools: ["Git", "GitHub", "Oracle Primavera P6", "Microsoft Excel"],
  other: ["Object-Oriented Programming", "Web Scraping", "Automation"],
};

export const EXPERIENCE = [
  {
    id: "indie-dev",
    role: "Independent Software Developer",
    company: "Self-employed",
    period: "Jun 2023 – Present",
    type: "personal",
    responsibilities: [
      "Developing cross-platform applications using C#, .NET MAUI, and Python.",
      "Building personal software products, automation tools, and backend services.",
      "Designing and developing a cross-platform media streaming application with .NET MAUI and a WordPress REST API backend.",
      "Developing Python automation tools, Telegram bots, and web scraping solutions.",
      "Working with REST APIs, JSON, Git, and modern software development practices.",
    ],
  },
  {
    id: "smi",
    role: "Project Control Specialist",
    company: "Sanat va Modiriat IRAN (SMI)",
    period: "Oct 2025 – Present",
    project: "56-inch National Gas Transmission Pipeline EPC Project",
    responsibilities: [
      "Project control activities for a major gas transmission pipeline EPC project.",
      "Monitoring project progress, schedule performance, contractor reports, and milestones.",
      "Supporting schedule updates and reporting using Oracle Primavera P6 and Microsoft Excel.",
    ],
  },
  {
    id: "mee",
    role: "Project Control Specialist",
    company: "Middle East Energy Development Engineers Co.",
    period: "Jul 2024 – Oct 2025",
    project: "24-inch Propane & Butane Pipeline EPC Project",
    responsibilities: [
      "Monitored project progress for the 24-inch Propane & Butane Pipeline EPC project.",
      "Reviewed contractor reports and supported project reporting and schedule control.",
    ],
  },
  {
    id: "danial-1",
    role: "Project Control Specialist",
    company: "Danial Petro Company",
    period: "Dec 2023 – Jun 2024",
    responsibilities: [
      "Monitored project progress against approved schedules.",
      "Supported progress measurement using Primavera P6 and Microsoft Excel.",
    ],
  },
  {
    id: "dc",
    role: "Document Control Coordinator",
    company: "Danial Petro Company",
    period: "Dec 2022 – Dec 2023",
    project: "64-inch seawater transfer pipeline project",
    responsibilities: [
      "Managed engineering documentation, RFIs, drawings, transmittals, and revision control.",
    ],
  },
  {
    id: "smart-clouds",
    role: "Mobile Game Developer",
    company: "Smart Clouds",
    period: "Jun 2023 – Jun 2026",
    responsibilities: [
      "Unity and C# mobile game development.",
      "Implemented gameplay mechanics and UI systems.",
      "Collaborated with designers and artists during development.",
    ],
  },
];

export const PROJECTS = [
  {
    id: "streaming",
    title: "Movie Streaming Application",
    technologies: [".NET MAUI", "WordPress REST API"],
    description:
      "A cross-platform media streaming application currently under active development.",
    features: [
      "Movie catalog",
      "Search",
      "Online streaming",
      "Responsive user interface",
      "WordPress REST API integration",
    ],
    status: "Active development",
  },
  {
    id: "telegram-bot",
    title: "Telegram Automation Bot",
    technologies: ["Python"],
    description:
      "Personal automation tools and Telegram bots for scheduled workflows, API integration, content processing, and automation.",
  },
  {
    id: "vpn-config",
    title: "VPN Configuration Automation Tool",
    technologies: ["Python"],
    description:
      "Personal automation tooling involving web scraping, HTTP requests, data processing, and VPN configuration workflows.",
  },
];

export const EDUCATION = [
  {
    degree: "Associate Degree",
    field: "Computer Software Engineering",
    institution: "Razi University of Ardabil",
    period: "2012 – 2013",
  },
  {
    degree: "Bachelor's Degree",
    field: "Computer Software Engineering",
    institution: "Shahriyar Astara University",
    period: "2014 – 2016",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Specialized Course in Project Control in Oil & Gas Industries",
    issuer: "South Pars Gas Complex (SPGC)",
    issued: "Jul 2024",
  },
];

export const LANGUAGES = {
  persian: "Native",
  english: "Professional Working Proficiency",
};

export const OIL_GAS_PROJECTS = [
  {
    id: "gas-56",
    diameter: '56"',
    name: "National Gas Transmission Pipeline",
    type: "EPC Project",
  },
  {
    id: "propane-24",
    diameter: '24"',
    name: "Propane & Butane Pipeline",
    type: "EPC Project",
  },
  {
    id: "seawater-64",
    diameter: '64"',
    name: "Seawater Transfer Pipeline",
    type: "EPC Project",
  },
];