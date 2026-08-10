// English content. Mirrors the shape of pt.js exactly — the language toggle
// simply swaps which object feeds the components.
const en = {
  meta: {
    locale: "en-US",
    title: "Eduardo Wagner — Mid-level Full Stack Developer",
    description:
      "Portfolio of Eduardo Gregório Wagner, mid-level Full Stack Developer and co-founder of StreamDev. React, Next.js, TypeScript, Node.js, PostgreSQL and Supabase.",
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
      "Mid-level Full Stack Developer",
      "React · Next.js · TypeScript",
      "Co-founder of StreamDev",
      "Software Engineer",
    ],
    subtitle: "Mid-level Full Stack Developer · React, Next.js and TypeScript",
    description:
      "Software Engineering graduate with 4 years of hands-on Full Stack experience and a front-end focus. I work across the modern JavaScript ecosystem — React, Next.js and TypeScript — building high-performance, scalable interfaces, and I cover the whole software lifecycle from architecture to delivery with Node.js, PostgreSQL, Supabase and Firebase.",
    primaryCta: "View Projects",
    secondaryCta: "Get in Touch",
    scroll: "Scroll to explore",
    photoAlt: "Eduardo Wagner",
    stats: [
      {
        label: "4 years of experience",
        desc: "Full cycle: architecture, code, deployment and maintenance",
      },
      {
        label: "Co-founder of StreamDev",
        desc: "My own software house, leading projects technically",
      },
      {
        label: "BSc in Software Engineering",
        desc: "UGV University Center, completed in 2025",
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
      "A 23-year-old developer from Irineópolis, Brazil, with a bachelor's degree in Software Engineering. My journey into programming started with the curiosity to understand how technology works — four years on, I turn business requirements into robust web and desktop systems, with a focus on clean code, scalability and continuous delivery of value.",
    facts: [
      { label: "Age", value: "23 years old" },
      { label: "Location", value: "Irineópolis, Brazil" },
      { label: "Degree", value: "BSc Software Engineering" },
      { label: "Experience", value: "4 years" },
    ],
    journey: [
      {
        title: "Academic Background",
        text: "I hold a bachelor's degree in Software Engineering from UGV – Centro Universitário, completed in December 2025. Throughout the program I led multiple development teams on practical projects, applying agile methodologies and coordinating the entire software lifecycle: from requirements analysis and architecture diagramming (UML/ERD) through to production deployment.",
      },
      {
        title: "StreamDev — Software House",
        text: "As co-founder of StreamDev, I'm responsible for technical leadership and project management, focused on scalable solutions and modern system architecture. It's where I bring together the stack I know best — React, Next.js, TypeScript and Supabase — to take products from concept all the way into the client's real operation.",
      },
      {
        title: "Leadership and Teamwork",
        text: "I have practical experience leading and working within teams organized around agile methodologies, keeping communication clear and collaboration flowing day to day. I've served as Technical Co-Lead and Front-end Lead, splitting scope, reviewing deliverables and keeping the workflow organized with Git, GitHub and Jira.",
      },
      {
        title: "Work Philosophy",
        text: "My approach is built on commitment, organization and shipping solutions that actually work. I aim to align technical quality with agreed deadlines, paying attention to detail and pursuing continuous improvement. I value clear communication and collaboration to reach consistent results as a team.",
      },
    ],
    ctaTitle: "Let's build something together",
    ctaText:
      "I'm open to new projects, partnerships and opportunities involving modern web products, e-commerce and custom systems. If you need someone who can own the problem end to end — from architecture through to running in production — let's talk.",
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
      commerce: "E-commerce & Integrations",
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
    featured: "Featured",
    status: {
      done: "Completed",
      wip: "In Development",
      live: "In Operation",
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
      bloco3d: {
        title: "Bloco3D",
        subtitle: "Platform in Operation",
        description:
          "An e-commerce platform specialized in the 3D technology market — printers, filaments and accessories. Built on React, Next.js and TypeScript with Supabase, and administered through a modular Medusa infrastructure, with stock and invoice syncing via the Bling API and payments through Mercado Pago.",
        story:
          "Bloco3D is the project I lead at StreamDev, the software house I co-founded. I took on the architecture and end-to-end development: the front-end in React, Next.js and TypeScript; Supabase handling the database, authentication and storage; and the Medusa framework backing a modular, scalable admin area. The work included complex administrative dashboards synced through the Bling API for stock management and invoice issuing, integration of the Mercado Pago payment gateway, and full compliance with Brazil's LGPD data protection law.",
        period: "Jan/2026 — Present",
        role: "Architecture & Full Stack",
        teamSize: "Technical lead",
        responsibilities: [
          "Platform Architecture — Stack decisions, data modeling and project structure",
          "Next.js Front-end — React and TypeScript interfaces built for performance",
          "Supabase — Database, authentication and storage",
          "Medusa Infrastructure — Modular, scalable e-commerce administration",
          "Admin Dashboards — Complex management and monitoring panels",
          "ERP Integration — Stock and invoice syncing through the Bling API",
          "Payments — Mercado Pago gateway integration",
          "LGPD — Compliance in handling personal data",
        ],
        features: [
          {
            title: "Next.js Storefront",
            desc: "Storefront and checkout built in React, Next.js and TypeScript, with a catalog specialized in 3D printers, filaments and accessories.",
          },
          {
            title: "Medusa Administration",
            desc: "Admin panel on top of the Medusa framework, enabling modular management of products, orders and store operations at scale.",
          },
          {
            title: "Stock and Invoices via Bling",
            desc: "Automatic syncing with the Bling API for stock control and invoice issuing, removing manual data entry from the loop.",
          },
          {
            title: "Payments and LGPD",
            desc: "Checkout wired to the Mercado Pago gateway, with personal data handled in full compliance with the LGPD.",
          },
        ],
        team: [
          {
            role: "Co-founder & Software Engineer",
            resp: "Architecture, Next.js front-end, ERP and payment gateway integrations, LGPD compliance",
          },
        ],
      },
      flowtime: {
        title: "FlowTime",
        subtitle: "Completed System",
        description:
          "A complete web system for managing podiatry clinics, bringing efficiency, organization and convenience to daily operations. FlowTime streamlines scheduling, patient care and administrative processes in a single intuitive platform.",
        story:
          "FlowTime started in October 2024 and was completed in January 2025, built by a team of 3. The system came from the need to digitize and automate the workflow of podiatry clinics. It offers an interactive dashboard, PDF reports, digital signatures and advanced features to manage appointments, patients and revenue. With a modern interface and robust functionality, FlowTime brought more agility, security and quality to patient care — and was successfully deployed in a real production environment.",
        period: "Oct/2024 — Jan/2025",
        role: "Technical Co-Lead & Front-end",
        teamSize: "Team of 3",
        responsibilities: [
          "Technical Co-Leadership — Drove the project alongside the team",
          "Modeling — UML/ERD diagrams and Figma prototyping",
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
            role: "Technical Co-Lead & Frontend Developer",
            resp: "Technical co-leadership, UML/ERD modeling, Figma prototyping, complete front-end, interactive charts, security token system",
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
    currentLabel: "Current",
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
        title: "BSc in Software Engineering",
        org: "UGV University Center · Completed",
        bullets: [
          "Focused on web and desktop development",
          "Projects with JavaScript, Node.js, PostgreSQL, Firebase, Google Cloud",
          "Led multiple teams on practical projects",
          "Full cycle: requirements, architecture (UML/ERD) and production deployment",
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
        title: "Technical Co-Lead and Front-end Lead",
        org: "FlowTime Project",
        bullets: [
          "SaaS for a podiatry clinic with dashboard and reporting",
          "UML/ERD modeling and Figma prototyping",
          "Front-end (HTML, CSS, JS), back-end with Node.js/Firebase",
          "Desktop build with Electron.js, running in commercial operation",
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
      streamdev: {
        period: "Jan/2026 — Present",
        title: "Software Engineer and Co-founder",
        org: "StreamDev — Software House",
        bullets: [
          "Technical leadership and project management at my own software house",
          "Architecture of Bloco3D, an e-commerce for the 3D technology market",
          "React, Next.js and TypeScript integrated with Supabase",
          "Administrative infrastructure on top of the Medusa framework",
          "Bling (ERP) and Mercado Pago integrations, compliant with the LGPD",
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
      "I'm always open to new opportunities, partnerships and innovative projects — a web product from scratch, an e-commerce, or a custom system. If you have an interesting idea or need an experienced developer on your team, let's talk!",
    methods: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    copy: "Copy",
    copied: "Copied!",
    available: "Available for new projects and partnerships",
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
    role: "Mid-level Full Stack Developer · StreamDev",
    location: "Irineópolis, Brazil",
    quote:
      "Turning ideas into code, code into solutions, solutions into impact",
    rights: "All rights reserved.",
    builtWith: "Built with React, Tailwind CSS and Framer Motion",
  },
};

export default en;
