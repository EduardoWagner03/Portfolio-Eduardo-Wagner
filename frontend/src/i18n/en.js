// English content. Mirrors the shape of pt.js exactly — the language toggle
// simply swaps which object feeds the components.
const en = {
  meta: {
    locale: "en-US",
    title: "Eduardo Wagner — Full Stack Developer",
    description:
      "Portfolio of Eduardo Gregório Wagner, Junior Full Stack Developer focused on front-end. React, Node.js, PostgreSQL and IoT integrations.",
    switchTo: "PT",
    switchLabel: "Switch language to Portuguese",
  },

  loader: {
    text: "Loading portfolio",
  },

  nav: {
    items: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "contact", label: "Contact" },
    ],
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
    downloadCv: "Download CV",
    cvUnavailable: "CV being updated",
    skipToContent: "Skip to content",
    backToTop: "Back to top",
  },

  hero: {
    badge: "Hi, I'm",
    firstName: "Eduardo Gregório",
    lastName: "Wagner",
    roles: [
      "Junior Full Stack Developer",
      "Front-end Specialist",
      "Software Engineer",
      "IoT & Real-time Integrations",
    ],
    subtitle: "Junior Full Stack Developer focused on front-end",
    description:
      "Junior Full Stack Developer focused on front-end, with hands-on experience in web and desktop development. I work with React, Node.js, PostgreSQL, JavaScript and other technologies, committed to delivering quality solutions that balance performance, usability and solid engineering practices.",
    primaryCta: "View Projects",
    secondaryCta: "Get in Touch",
    scroll: "Scroll to explore",
    photoAlt: "Eduardo Wagner",
    stats: [
      {
        label: "High-impact projects",
        desc: "End-to-end solutions for companies and institutions",
      },
      {
        label: "Specialty",
        desc: "Full Stack & advanced integrations",
      },
      {
        label: "Results",
        desc: "Automation, performance and innovation",
      },
    ],
    orbit: [
      "Software Engineering",
      "Databases",
      "Cloud",
      "Jira",
      "Desktop Apps",
      "GitHub",
    ],
  },

  about: {
    badge: "Get to know me",
    title: "About Me",
    subtitle: "A developer passionate about building solutions that matter",
    introTitle: "Hi! I'm Eduardo",
    introText:
      "A 21-year-old developer from Paraná, Brazil, in the final year of my Software Engineering degree. My journey into programming started with the curiosity to understand how technology works — and how I could build solutions that make a real difference in people's lives.",
    facts: [
      { label: "Age", value: "21 years old" },
      { label: "Location", value: "Paraná, Brazil" },
      { label: "Degree", value: "Software Engineering" },
      { label: "Graduation", value: "Dec/2025" },
    ],
    journey: [
      {
        title: "Academic Background",
        text: "I'm in the final semester of my Software Engineering degree at UGV – Centro Universitário, graduating in December 2025. Throughout the program I built complete projects applying agile methodologies, Git/GitHub versioning and full front-end to back-end integration. I've worked on both academic and personal projects, focusing on real solutions for companies and institutions.",
      },
      {
        title: "Teamwork",
        text: "I work well in teams, keeping communication and collaboration flowing day to day. I have practical experience in teams organized around agile methodologies, always contributing proactively to the work at hand. I use Git, GitHub and Jira to keep the workflow organized and efficient.",
      },
      {
        title: "Work Philosophy",
        text: "My approach is built on commitment, organization and shipping solutions that actually work. I aim to align technical quality with agreed deadlines, paying attention to detail and pursuing continuous improvement. I value clear communication and collaboration to reach consistent results as a team.",
      },
    ],
    ctaTitle: "Ready for the next challenge",
    ctaText:
      "I'm looking for my first opportunity as a junior developer or intern, focused on collaborating on real projects, contributing to the team's growth and delivering efficient, well-structured solutions.",
    ctaPrimary: "Let's talk",
    ctaSecondary: "Download CV",
  },

  skills: {
    badge: "Tech Stack",
    title: "Skills",
    subtitle: "Technologies and tools I work with",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Databases",
      cloud: "Cloud Services",
      desktop: "Desktop",
      tools: "Tools",
      methodologies: "Methodologies",
      learning: "Currently Learning",
    },
  },

  projects: {
    badge: "Portfolio",
    title: "Featured Projects",
    subtitle: "A selection of the main projects I've built",
    viewDetails: "View Details",
    openProject: "Open project details",
    status: {
      done: "Completed",
      wip: "In Development",
    },
    modal: {
      close: "Close project details",
      overview: "Overview",
      responsibilities: "My Responsibilities on the Project",
      team: "Project Team",
      iot: "IoT Integration developed by Victor",
      features: "Features",
      stack: "Stack & Integrations",
      expandImage: "Expand image",
      stackLabels: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        libraries: "Libraries",
        integrations: "APIs & Integrations",
      },
    },
    lightbox: {
      close: "Close image",
      prev: "Previous image",
      next: "Next image",
      hint: "Use arrow keys to navigate • ESC to close",
    },
    items: {
      flowtime: {
        title: "FlowTime",
        subtitle: "Completed System",
        description:
          "A complete web system for managing podiatry clinics, bringing efficiency, organization and convenience to daily operations. FlowTime streamlines scheduling, patient care and administrative processes in a single intuitive platform.",
        story:
          "FlowTime started in October 2024 and was completed in January 2025, built by a team of 3. The system came from the need to digitize and automate the workflow of podiatry clinics. It offers an interactive dashboard, PDF reports, digital signatures and advanced features to manage appointments, patients and revenue. With a modern interface and robust functionality, FlowTime brought more agility, security and quality to patient care — and was successfully deployed in a real production environment.",
        period: "Oct/2024 — Jan/2025",
        role: "Frontend Developer",
        teamSize: "Team of 3",
        responsibilities: [
          "Complete Frontend — Built the entire user interface",
          "Interactive Charts — Dashboards and data visualizations",
          "Token System — Authentication and security implementation",
          "Responsiveness — Adapted for mobile and desktop devices",
          "UX/UI — Design implementation and user experience",
        ],
        features: [
          {
            title: "Interactive Dashboard",
            desc: "See the clinic's key indicators at a glance — appointments, treatments and revenue. Full front-end development and interactive chart implementation.",
          },
          {
            title: "Schedule Management",
            desc: "Book, edit and review appointments quickly and simply. Fully built responsive and intuitive interface.",
          },
          {
            title: "PDF Reports",
            desc: "Generate detailed reports on treatments, revenue and patients in a few clicks. Front-end of the feature plus a security token system for access.",
          },
        ],
        team: [
          {
            role: "Frontend Developer",
            resp: "Complete front-end, interactive charts, security token system",
          },
          {
            role: "Backend Developer",
            resp: "Entire back-end architecture, APIs, database",
          },
          {
            role: "UI/UX Designer",
            resp: "Page prototyping in Figma, design system",
          },
        ],
      },
      tonnertrack: {
        title: "TonnerTrack",
        subtitle: "Completed System",
        description:
          "A system built to automate printing-supply control in educational institutions, reducing waste and providing complete reporting. TonnerTrack simplifies printer and toner management, bringing more efficiency and organization to the school environment.",
        story:
          "TonnerTrack was an Academic Extension project that ran from February 2025 to June 2025 at a public school. The system came from a real need to control printer and toner usage — automating records, generating detailed reports and cutting waste. It features an intuitive interface and smart resources, improving supply management and being successfully deployed at the institution.",
        period: "Feb/2025 — Jun/2025",
        role: "Solo Full Stack",
        teamSize: "Solo project",
        responsibilities: [
          "Complete Development — Front-end and back-end from scratch",
          "Database — PostgreSQL modeling and implementation",
          "Authentication — Login system and access control",
          "Reporting — Report generation and dashboards",
          "Responsive Interface — Design adapted to every device",
          "Deploy & Maintenance — Rollout to a production environment",
        ],
        features: [
          {
            title: "Supply Control",
            desc: "Manage toner and printer stock, avoiding both waste and shortages. A complete system built from scratch.",
          },
          {
            title: "Detailed Reports",
            desc: "Generate complete reports on printer usage to support decision-making. Interface and back-end built end to end.",
          },
          {
            title: "Smart Alerts",
            desc: "Get notified when stock runs low or maintenance is needed. Notification system developed entirely in-house.",
          },
        ],
        team: [
          {
            role: "Solo Full Stack Developer",
            resp: "Complete system development, from planning through final rollout",
          },
        ],
      },
      thermaltech: {
        title: "ThermalTech",
        subtitle: "System in Progress",
        description:
          "An academic project built as a pair: a CMMS system integrated with IoT for monitoring and controlling climate-controlled environments. It manages air-conditioning equipment, logs service tickets, generates work orders and monitors environmental conditions in real time through MQTT sensors — plus real-time team chat.",
        story:
          "ThermalTech is being developed as part of an academic project started in 2025, built as a pair. The goal is a robust system for monitoring and automating industrial environments, integrating IoT sensors, dashboards, reporting and team communication. The system keeps evolving, receiving improvements and new features as development progresses.",
        period: "2025 — Ongoing",
        role: "Frontend & Security",
        teamSize: "Pair",
        responsibilities: [
          "Complete Frontend — Built the entire system interface",
          "Audit Middleware — Advanced threat detection system",
          "Threat Detection — SQL injection, XSS, malicious bots",
          "Threat Scoring — Intelligent threat-scoring system",
          "Smart Blocking — Suspicious IPs and rate limiting",
          "Real-time Alerts — Automatic email notifications",
          "Security Reports — Automated continuous monitoring",
        ],
        features: [
          {
            title: "Real-time Monitoring",
            desc: "Track equipment temperature and status in real time through IoT sensors. Complete front-end plus the security system implementation.",
          },
          {
            title: "Ticket Management",
            desc: "Log, track and resolve technical tickets in one centralized, efficient place. Interface built with an advanced auditing system.",
          },
          {
            title: "Integrated Chat",
            desc: "Talk to the team directly inside the system, speeding up support and maintenance. Front-end and security middleware implemented.",
          },
        ],
        team: [
          {
            role: "Frontend & Security Developer",
            resp: "Complete front-end, advanced security system, audit middleware, threat detection",
          },
          {
            role: "Backend & IoT Developer",
            resp: "Back-end, IoT integration, ESP sensors, Firebase Realtime Database, WebSocket/SSE communication",
          },
        ],
        iot: [
          "Temperature Capture — Sensors via HTTP POST on the /api/sensor-data endpoint",
          "Two-way Communication — ESP through Firebase Realtime Database",
          "Real Time — Server-Sent Events (SSE) and WebSocket",
          "Remote Control — Temperature, fan speed and mode commands",
          "Automatic Alerts — Per-room threshold checks",
        ],
      },
    },
  },

  experience: {
    badge: "Professional Journey",
    title: "Professional Experience",
    subtitle: "How my software development practice has evolved",
    items: {
      studies: {
        period: "2021",
        title: "Started Studying Programming",
        org: "Independent Courses",
        bullets: [
          "HTML5, CSS3, JavaScript",
          "Static pages and programming logic fundamentals",
          "Version control with Git",
        ],
      },
      college: {
        period: "Feb/2022 — Dec/2025",
        title: "Software Engineering",
        org: "UGV University Center",
        bullets: [
          "Focused on web and desktop development",
          "Projects with JavaScript, Node.js, PostgreSQL, Firebase, Google Cloud",
          "Participation in real-world and academic projects",
        ],
      },
      events: {
        period: "2022 — 2024",
        title: "Academic Events",
        org: "UGV University Center",
        bullets: [
          "17th Scientific Initiation Meeting 2022 — Attendee",
          "18th Scientific Initiation Meeting 2023 — Presenter",
          "19th Scientific Initiation Meeting 2024 — Attendee",
          "SEMTEC — UGV Technology Week 2022",
          "SEMTEC — UGV Technology Week 2024",
        ],
      },
      robotics: {
        period: "Feb/2024 — Jun/2024",
        title: "Robotic Claw Project",
        org: "Robotics Course",
        bullets: [
          "Built a robotic claw controlled by a microcontroller",
          "Developed automated commands and motion control",
          "Hardware/software integration with embedded programming",
        ],
      },
      battle: {
        period: "2024",
        title: "Robot Battle Project",
        org: "Internal Competition",
        bullets: [
          "Built a combat robot with collision sensors",
          "Prototyping, testing and arena combat against other teams",
          "Teamwork plus physical and logical performance tuning",
        ],
      },
      thermal: {
        period: "2024",
        title: "IoT Developer",
        org: "Thermal Tech Project",
        bullets: [
          "Thermal monitoring with Electron.js and sensors",
          "Node.js back-end and interactive dashboard",
          "Built by a team of 2",
        ],
      },
      flowtime: {
        period: "Oct/2024 — Jan/2025",
        title: "Full Stack Developer",
        org: "FlowTime Project",
        bullets: [
          "System for a podiatry clinic with dashboard and reporting",
          "Front-end (HTML, CSS, JS), back-end with Node.js/Firebase",
          "Desktop build with Electron.js, deployed in a real environment",
        ],
      },
      tonner: {
        period: "Mar/2025 — Jun/2025",
        title: "Full Stack Developer",
        org: "TonerTrack Project",
        bullets: [
          "Management system for school printers",
          "PostgreSQL, authentication and admin panels",
          "Solo development focused on scalability",
        ],
      },
    },
  },

  contact: {
    badge: "Let's talk",
    title: "Get in Touch",
    subtitle: "I'm always open to new opportunities and interesting projects",
    introTitle: "Let's work together!",
    introText:
      "I'm always open to new opportunities, partnerships and innovative projects. If you have an interesting idea or need a dedicated developer on your team, let's talk!",
    methods: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    copy: "Copy",
    copied: "Copied!",
    available: "Available for opportunities",
    formTitle: "Send a message",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      subject: "Subject",
      subjectPlaceholder: "What would you like to talk about?",
      message: "Message",
      messagePlaceholder: "Type your message...",
      submit: "Send Message",
      sending: "Sending...",
      sent: "Message ready!",
      required: "This field is required",
      invalidEmail: "Enter a valid email address",
      minMessage: "Write at least 20 characters",
      counter: "characters",
      fallbackNote:
        "Submitting opens your email client with the message pre-filled.",
    },
    privacy:
      "Your information is safe and will never be shared with third parties.",
  },

  footer: {
    role: "Junior Full Stack Developer",
    location: "Paraná, Brazil",
    quote:
      "Turning ideas into code, code into solutions, solutions into impact",
    rights: "All rights reserved.",
    builtWith: "Built with React, Tailwind CSS and Framer Motion",
  },
};

export default en;
