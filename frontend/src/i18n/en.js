// English content. Mirrors the shape of pt.js exactly. The language toggle
// simply swaps which object feeds the components.
const en = {
  meta: {
    locale: "en-US",
    title: "Eduardo Wagner | Mid-level Full Stack Developer",
    description:
      "Portfolio of Eduardo Gregório Wagner, mid-level Full Stack Developer and co-founder of StreamDev. React, Next.js, TypeScript, Node.js, PostgreSQL, Supabase and Google Cloud, focused on e-commerce and multi-tenant SaaS.",
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
      "Software Engineering graduate with 4 years of hands-on Full Stack experience and a front-end focus. I work across the modern JavaScript ecosystem (React, Next.js and TypeScript), building high-performance, scalable interfaces, and I cover the whole software lifecycle from architecture to running in production with Node.js, PostgreSQL, Supabase, Redis and Google Cloud, on multi-tenant SaaS architectures.",
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
      "A 23-year-old developer from Irineópolis, Brazil, with a bachelor's degree in Software Engineering. My journey into programming started with the curiosity to understand how technology works. Four years on, I turn business requirements into robust web and desktop systems, with a focus on clean code, scalability and continuous delivery of value.",
    graduationAlt:
      "Eduardo Wagner in cap and gown at his Software Engineering graduation",
    graduationCaption:
      "Software Engineering graduation ceremony · UGV, March 2026",
    facts: [
      { label: "Age", value: "23 years old" },
      { label: "Location", value: "Irineópolis, Brazil" },
      { label: "Degree", value: "BSc Software Engineering" },
      { label: "Experience", value: "4 years" },
    ],
    journey: [
      {
        title: "Academic Background",
        text: "I hold a bachelor's degree in Software Engineering from UGV - Centro Universitário, completed in December 2025, with the graduation ceremony in March 2026. My final thesis project was FlowTime, the management SaaS for podiatry clinics, awarded the top grade of 10 and later delivered for commercial use. Throughout the program I led multiple development teams on practical projects, applying agile methodologies and coordinating the entire software lifecycle: from requirements analysis and architecture diagramming (UML/ERD) through to production deployment.",
      },
      {
        title: "StreamDev - Software House",
        text: "As co-founder of StreamDev, I'm responsible for technical leadership and project management, focused on scalable solutions and modern system architecture. It's where I bring together the stack I know best (React, Next.js, TypeScript, Node.js and Supabase) to take products from concept all the way into the client's real operation, such as Bloco3D, an e-commerce for the 3D technology market, and MenuDigital, a multi-tenant digital-menu SaaS with stores running commercially.",
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
      "I'm open to new projects, partnerships and opportunities involving modern web products, e-commerce and custom systems. If you need someone who can own the problem end to end, from architecture through to running in production, let's talk.",
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
      cloud: "Cloud & Infrastructure",
      desktop: "Desktop & Mobile",
      quality: "Security & Quality",
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
        cloud: "Cloud & Infrastructure",
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
          "An e-commerce platform specialized in the 3D technology market: printers, filaments and accessories. Built in Next.js 15 and React on top of a headless backend, with serverless infrastructure on Google Cloud Run, asynchronous webhook processing via Pub/Sub and Redis, and integrations with Mercado Pago, Bling ERP and Melhor Envio.",
        story:
          "Bloco3D is the project I lead at StreamDev, the software house I co-founded. I took on the architecture and full-stack development, from the storefront to the headless backend: front-end in Next.js 15 and React, Supabase handling the database, authentication and storage, and Medusa v2 backing a modular admin area. The infrastructure runs serverless on Google Cloud Run, with Docker and CI/CD through Cloud Build across separate staging and production environments. Payment webhooks are processed asynchronously with GCP Pub/Sub and Redis (Upstash), keeping services independent and preventing duplicate charges. The project also includes 2FA, webhook signature validation, audit logs, LGPD compliance and an automated Jest test suite wired into the CI pipeline.",
        period: "Jan/2026 - Present",
        role: "Architecture & Full Stack",
        teamSize: "Technical lead",
        responsibilities: [
          "Platform Architecture: Stack decisions, data modeling and project structure",
          "Next.js 15 Front-end: React interfaces built for performance",
          "Supabase: Database, authentication and storage",
          "Medusa v2 Infrastructure: Modular, scalable e-commerce administration",
          "Cloud Run and Docker: Serverless infrastructure with CI/CD via Cloud Build",
          "Pub/Sub and Redis: Asynchronous webhook processing without duplication",
          "Admin Dashboards: Products, orders, coupons and featured items",
          "ERP Integration: Invoice syncing through Bling with OAuth2",
          "Payments and Shipping: Mercado Pago (PIX and card), Melhor Envio and Jadlog",
          "Security: 2FA, webhook signature validation, audit logs and LGPD",
          "Testing: Jest suite wired into the CI pipeline",
        ],
        features: [
          {
            title: "Next.js 15 Storefront",
            desc: "Storefront and checkout built in Next.js 15 and React, with a catalog specialized in 3D printers, filaments and accessories.",
          },
          {
            title: "Serverless Infrastructure",
            desc: "Deployed on Google Cloud Run with Docker and CI/CD through Cloud Build, across separate staging and production environments.",
          },
          {
            title: "Asynchronous Webhooks",
            desc: "Payments processed through GCP Pub/Sub and Redis (Upstash), keeping services independent and preventing duplicate processing.",
          },
          {
            title: "Tax and Shipping Integrations",
            desc: "Mercado Pago for PIX and card, Bling ERP through OAuth2 for invoices, and Melhor Envio/Jadlog for shipping rates and labels.",
          },
        ],
        team: [
          {
            role: "Co-founder & Software Engineer",
            resp: "Architecture, Next.js front-end, Google Cloud infrastructure, ERP, payment and shipping integrations, security and LGPD compliance",
          },
        ],
      },
      menudigital: {
        title: "MenuDigital",
        subtitle: "SaaS in Development",
        description:
          "A multi-tenant SaaS for digital menus and restaurant management, under active development and already running commercially in several stores. It covers the full order flow, from the customer browsing via link or QR Code through payment, tax invoicing and real-time tracking, plus the store owner panel and the platform's Super Admin.",
        story:
          "MenuDigital is the SaaS platform I build at StreamDev, still under active development and already serving stores in commercial operation. The architecture is multi-tenant, with data isolation between stores and access control applied at every layer. End customers browse the menu via link or QR Code, pay and follow the order in real time with Socket.IO. On the financial and tax side, I integrated Mercado Pago with payment splitting between store and platform, commissions and recurring subscriptions, Focus NFe for automated NFC-e issuing with email delivery, and Asaas for StreamDev's own service invoices. Customer communication runs through WhatsApp via the Evolution API plus Web Push notifications. I also built the Super Admin panel, covering stores, plans, subscriptions, billing, onboarding, support and platform health monitoring. Everything lives in a monorepo with npm workspaces and CI/CD through GitHub Actions, with separate staging and production environments.",
        period: "Jan/2026 - Present",
        role: "Architecture & Full Stack",
        teamSize: "Technical lead",
        responsibilities: [
          "Multi-tenant Architecture: Data isolation between stores and access control",
          "Order Flow: From link or QR Code menu through to real-time tracking",
          "Payments: Mercado Pago with PIX, splitting, commissions and subscriptions",
          "Tax Invoicing: Focus NFe for automated NFC-e and Asaas for service invoices",
          "Real Time: Socket.IO for order updates and Web Push for notifications",
          "WhatsApp: Customer communication through the Evolution API",
          "Geolocation: Mapbox and ViaCEP for addresses and delivery radiuses",
          "Super Admin Panel: Stores, plans, billing, onboarding, support and monitoring",
          "Store Owner Panel: Products, categories, hours, coupons, reports and staff",
          "Infrastructure: Monorepo with npm workspaces, CI/CD, staging and production",
        ],
        features: [
          {
            title: "Menu by Link or QR Code",
            desc: "Customers open the store's menu with nothing to install, build the order, pay and follow every step in real time.",
          },
          {
            title: "Payment Splitting",
            desc: "Mercado Pago with PIX, automatic splitting between store and platform, commissions and recurring plan subscriptions.",
          },
          {
            title: "Automated Tax Invoicing",
            desc: "NFC-e issued automatically through Focus NFe and emailed to the customer, with StreamDev's service invoices through Asaas.",
          },
          {
            title: "Delivery Areas on the Map",
            desc: "Mapbox and ViaCEP integration for address geocoding and visual definition of delivery areas and radiuses.",
          },
          {
            title: "Super Admin Panel",
            desc: "Management of stores, plans, subscriptions, billing, onboarding, support and overall platform health.",
          },
        ],
        team: [
          {
            role: "Co-founder & Software Engineer",
            resp: "Multi-tenant architecture, front-end, back-end, financial and tax integrations, admin panels and CI/CD infrastructure",
          },
        ],
      },
      flowtime: {
        title: "FlowTime",
        subtitle: "Completed System",
        description:
          "A complete web system for managing podiatry clinics, bringing efficiency, organization and convenience to daily operations. FlowTime streamlines scheduling, patient care and administrative processes in a single intuitive platform.",
        story:
          "FlowTime started in October 2024 and was completed in January 2025, built by a team of 3. It was also our final thesis project, defended at UGV and awarded the top grade of 10, and later delivered for commercial use in a real clinic. The system came from the need to digitize and automate the workflow of podiatry clinics. It offers an interactive dashboard, PDF reports, digital signatures and advanced features to manage appointments, patients and revenue. With a modern interface and robust functionality, FlowTime brought more agility, security and quality to patient care, and was successfully deployed in a real production environment.",
        period: "Oct/2024 - Jan/2025",
        role: "Technical Co-Lead & Front-end",
        teamSize: "Team of 3",
        responsibilities: [
          "Technical Co-Leadership: Drove the project alongside the team",
          "Modeling: UML/ERD diagrams and Figma prototyping",
          "Complete Frontend: Built the entire user interface",
          "Interactive Charts: Dashboards and data visualizations",
          "Token System: Authentication and security implementation",
          "Responsiveness: Adapted for mobile and desktop devices",
          "UX/UI: Design implementation and user experience",
        ],
        features: [
          {
            title: "Interactive Dashboard",
            desc: "See the clinic's key indicators at a glance: appointments, treatments and revenue. Full front-end development and interactive chart implementation.",
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
          "TonnerTrack was an Academic Extension project that ran from February 2025 to June 2025 at a public school. The system came from a real need to control printer and toner usage: automating records, generating detailed reports and cutting waste. It features an intuitive interface and smart resources, improving supply management and being successfully deployed at the institution.",
        period: "Feb/2025 - Jun/2025",
        role: "Solo Full Stack",
        teamSize: "Solo project",
        responsibilities: [
          "Complete Development: Front-end and back-end from scratch",
          "Database: PostgreSQL modeling and implementation",
          "Authentication: Login system and access control",
          "Reporting: Report generation and dashboards",
          "Responsive Interface: Design adapted to every device",
          "Deploy & Maintenance: Rollout to a production environment",
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
        subtitle: "Completed System",
        description:
          "A completed academic project built as a pair: a CMMS system integrated with IoT for monitoring and controlling climate-controlled environments. It manages air-conditioning equipment, logs service tickets, generates work orders and monitors environmental conditions in real time through MQTT sensors, plus real-time team chat.",
        story:
          "ThermalTech was built as a pair for an academic project that started in 2023 and was completed in 2025. The goal was a robust system for monitoring and automating industrial environments, integrating IoT sensors, dashboards, reporting and team communication. The delivered result brings together real-time MQTT monitoring, ticket management, integrated chat and a security layer with audit middleware and threat detection.",
        period: "2023 - 2025",
        role: "Frontend & Security",
        teamSize: "Pair",
        responsibilities: [
          "Complete Frontend: Built the entire system interface",
          "Audit Middleware: Advanced threat detection system",
          "Threat Detection: SQL injection, XSS, malicious bots",
          "Threat Scoring: Intelligent threat-scoring system",
          "Smart Blocking: Suspicious IPs and rate limiting",
          "Real-time Alerts: Automatic email notifications",
          "Security Reports: Automated continuous monitoring",
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
          "Temperature Capture: Sensors via HTTP POST on the /api/sensor-data endpoint",
          "Two-way Communication: ESP through Firebase Realtime Database",
          "Real Time: Server-Sent Events (SSE) and WebSocket",
          "Remote Control: Temperature, fan speed and mode commands",
          "Automatic Alerts: Per-room threshold checks",
        ],
      },
      autopintura: {
        title: "Auto Pintura Luizinho",
        subtitle: "Institutional Landing Page",
        description:
          "A one-page institutional site for an auto body, paint and detailing shop, focused on attracting local customers and generating quote requests. A lightweight static page with no framework dependency, built to load fast and convert.",
        story:
          "I built the entire Auto Pintura Luizinho landing page in 2026, from layout to publishing. The goal was simple and direct: turn local visits into quote requests. I chose a static page in semantic HTML5, CSS3 and Tailwind, with no framework, so it loads fast even on mobile connections. All interactivity is plain JavaScript, with scroll-triggered entrance animations using IntersectionObserver and performant transitions through requestAnimationFrame. The conversion path runs through a WhatsApp deep link that opens the chat ready for a quote. I also handled SEO, with descriptive meta tags, lazy-loaded images and font preconnect, and accessibility, with ARIA attributes, adequate contrast and keyboard navigation.",
        period: "2026",
        role: "Solo Full Stack",
        teamSize: "Solo project",
        responsibilities: [
          "Complete Development: Layout, code and publishing of the page",
          "Visual Identity: Custom, conversion-oriented design",
          "Mobile-first: Responsive design built for phones first",
          "Interactivity: Scroll animations, mobile menu, testimonials and FAQ",
          "Conversion: WhatsApp deep link for instant quote requests",
          "SEO and Performance: Meta tags, lazy loading, preconnect and a light page",
          "Accessibility: ARIA attributes, contrast and keyboard navigation",
        ],
        features: [
          {
            title: "Quotes via WhatsApp",
            desc: "wa.me deep links at key points of the page, opening a chat already aimed at requesting a quote.",
          },
          {
            title: "Plain JavaScript Animations",
            desc: "Scroll entrances with IntersectionObserver and transitions through requestAnimationFrame, with no animation library at all.",
          },
          {
            title: "Testimonials and FAQ",
            desc: "Customer testimonials and an accordion FAQ section, clearing up questions before the first contact.",
          },
          {
            title: "SEO and Fast Loading",
            desc: "Descriptive meta tags, theme-color, lazy-loaded images and font preconnect on a page with no framework.",
          },
        ],
        team: [
          {
            role: "Solo Full Stack Developer",
            resp: "Complete landing page development, from design and code through to SEO, accessibility and publishing",
          },
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
        org: "Curso em Vídeo · Gustavo Guanabara",
        bullets: [
          "First steps through Gustavo Guanabara's Programming Logic course",
          "Algorithms and logic fundamentals before any specific language",
          "HTML5, CSS3 and JavaScript, with my first static pages",
          "Version control with Git",
        ],
      },
      college: {
        period: "Feb/2022",
        title: "Started the BSc in Software Engineering",
        org: "UGV University Center",
        bullets: [
          "Focused on web and desktop development",
          "Projects with JavaScript, Node.js, PostgreSQL, Firebase, Google Cloud",
          "Led multiple teams on practical projects",
          "Full cycle: requirements, architecture (UML/ERD) and production deployment",
        ],
      },
      events: {
        period: "2022 - 2024",
        title: "Academic Events",
        org: "UGV University Center",
        bullets: [
          "17th Scientific Initiation Meeting 2022 - Attendee",
          "18th Scientific Initiation Meeting 2023 - Presenter",
          "19th Scientific Initiation Meeting 2024 - Attendee",
          "SEMTEC - UGV Technology Week 2022",
          "SEMTEC - UGV Technology Week 2024",
        ],
      },
      robotics: {
        period: "Feb/2024 - Jun/2024",
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
        period: "2023 - 2025",
        title: "IoT Developer",
        org: "ThermalTech Project · University",
        bullets: [
          "Academic project built as a pair, from its 2023 start to completion in 2025",
          "Real-time thermal monitoring with sensors and MQTT",
          "Node.js back-end and interactive dashboard",
          "Audit middleware and threat detection",
        ],
      },
      flowtime: {
        period: "Oct/2024 - Jan/2025",
        title: "Technical Co-Lead and Front-end Lead",
        org: "FlowTime Project",
        bullets: [
          "SaaS for a podiatry clinic with dashboard and reporting",
          "Defended as the final thesis at UGV, awarded the top grade of 10",
          "UML/ERD modeling and Figma prototyping",
          "Front-end (HTML, CSS, JS), back-end with Node.js/Firebase",
          "Desktop build with Electron.js, running in commercial operation",
        ],
      },
      tonner: {
        period: "Mar/2025 - Jun/2025",
        title: "Full Stack Developer",
        org: "TonerTrack Project",
        bullets: [
          "Management system for school printers",
          "PostgreSQL, authentication and admin panels",
          "Solo development focused on scalability",
        ],
      },
      graduation: {
        period: "Dec/2025 - Mar/2026",
        title: "Completed the BSc in Software Engineering",
        org: "UGV University Center · Completed",
        bullets: [
          "Degree completed in December 2025",
          "Final thesis project: FlowTime, awarded the top grade of 10",
          "Graduation ceremony held on 21 and 22 March 2026",
        ],
      },
      streamdev: {
        period: "Jan/2026 - Present",
        title: "Software Engineer and Co-founder",
        org: "StreamDev - Software House",
        bullets: [
          "Technical leadership and project management at my own software house",
          "Architecture of Bloco3D, an e-commerce for the 3D technology market",
          "Next.js 15 and React over a headless backend with Medusa v2 and Supabase",
          "Serverless infrastructure on Google Cloud Run, with Docker and CI/CD",
          "Asynchronous webhooks with Pub/Sub and Redis, preventing duplicate payments",
          "Bling (ERP), Mercado Pago and Melhor Envio integrations, under the LGPD",
        ],
      },
      bloco3d: {
        period: "2026 - Present",
        title: "Architecture and Full Stack",
        org: "Bloco3D - StreamDev E-commerce",
        bullets: [
          "E-commerce specialized in the 3D technology market",
          "Next.js 15 and React over a headless backend with Medusa v2 and Supabase",
          "Serverless infrastructure on Cloud Run, with Docker and CI/CD via Cloud Build",
          "Asynchronous webhooks with Pub/Sub and Redis, with no duplicate processing",
          "Mercado Pago, Bling ERP through OAuth2 and Melhor Envio/Jadlog",
          "2FA, webhook validation, audit logs and Jest tests in the CI pipeline",
        ],
      },
      menudigital: {
        period: "2026 - Present",
        title: "Architecture and Full Stack",
        org: "MenuDigital - StreamDev SaaS",
        bullets: [
          "Multi-tenant digital-menu SaaS with stores running commercially",
          "React 19, React Router 7, Tailwind CSS, Node.js and PostgreSQL",
          "Mercado Pago with splitting, Focus NFe for NFC-e and Asaas for service invoices",
          "WhatsApp through the Evolution API, Web Push and real time with Socket.IO",
          "Super Admin panel for stores, plans, billing and platform health",
          "Monorepo with npm workspaces and CI/CD through GitHub Actions",
        ],
      },
      autopintura: {
        period: "2026",
        title: "Full Stack Developer",
        org: "Auto Pintura Luizinho - Client",
        bullets: [
          "One-page institutional landing page for an auto body shop",
          "Semantic HTML5, CSS3 and Tailwind CSS with a mobile-first design",
          "Interactivity in plain JavaScript, with no framework dependency",
          "WhatsApp, Google Maps and Instagram integrations, aimed at quote requests",
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
      "I'm always open to new opportunities, partnerships and innovative projects, a web product from scratch, an e-commerce, or a custom system. If you have an interesting idea or need an experienced developer on your team, let's talk!",
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
