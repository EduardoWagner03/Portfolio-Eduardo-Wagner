// Dados NÃO traduzíveis dos projetos: imagens, stack, links e identidade da
// equipe. Todo o texto (título, descrição, história, responsabilidades,
// funcionalidades e papéis) vive em src/i18n/{pt,en}.js sob `projects.items.<id>`.
// Os arrays `gallery` e `team` são posicionalmente alinhados com
// `features` e `team` do dicionário de idioma.

export const projects = [
  {
    id: "flowtime",
    status: "done",
    cover: "/images/FlowTime.png",
    accent: "flux",
    link: null,
    repo: null,
    gallery: [
      "/images/HomeFlowtime.png",
      "/images/AppointmentsFlowTime.png",
      "/images/FichaAnamnese.png",
    ],
    team: [
      { name: "Eduardo Wagner", handle: "EduardoWagner03", self: true },
      { name: "Victor Bueno", handle: "victorbueno920" },
      { name: "Lucas Ulbrich", handle: "lucasulbrich" },
    ],
    stack: {
      frontend: [
        "HTML5",
        "CSS3",
        "EJS",
        "JavaScript",
        "Electron.js",
        "SweetAlert2",
        "Chart.js",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "Multer",
        "Node-cron",
        "dotenv",
        "memory-cache",
        "node-cache",
        "web-push",
        "path",
        "cross-env",
      ],
      database: [
        "Firebase Firestore",
        "Firebase Database",
        "Firebase Storage",
        "Firebase Authentication",
        "Firebase Admin SDK",
      ],
      libraries: [
        "browser-image-compression",
        "moment-timezone",
        "node-fetch",
        "Chart.js",
        "SweetAlert2",
        "Choices.js",
        "html2pdf.js",
        "SignaturePad.js",
      ],
      integrations: [
        "API IBGE",
        "WhatsApp API",
        "Web Push API",
        "Firebase Auth API",
        "Service Workers",
        "Local Storage",
      ],
    },
  },
  {
    id: "tonnertrack",
    status: "done",
    cover: "/images/TonnerTrack.png",
    accent: "pulse",
    link: null,
    repo: null,
    gallery: [
      "/images/GerenciamentoTonnerTrack.png",
      "/images/Relatórios.png",
      "/images/NotificacaoTonnerTrac.png",
    ],
    team: [{ name: "Eduardo Wagner", handle: "EduardoWagner03", self: true }],
    stack: {
      frontend: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "EJS",
        "Bootstrap",
        "Bootstrap Icons",
        "Chart.js",
        "SweetAlert2",
        "Electron.js",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "Express-Session",
        "Express-Handlebars",
        "Multer",
        "Socket.io",
        "dotenv",
        "cookie-parser",
      ],
      database: ["PostgreSQL", "pg"],
      libraries: ["firebase", "firebase-admin", "path", "electron-updater"],
      integrations: [
        "Firebase Authentication",
        "Firebase Cloud Storage",
        "API RESTful própria",
      ],
    },
  },
  {
    id: "thermaltech",
    status: "wip",
    cover: "/images/ThermalTech.png",
    accent: "flux",
    link: null,
    repo: null,
    gallery: [
      "/images/Monitoriamento.png",
      "/images/ConsultarChamados.png",
      "/images/ChatTT.png",
    ],
    team: [
      { name: "Eduardo Wagner", handle: "EduardoWagner03", self: true },
      { name: "Victor Bueno", handle: "victorbueno920" },
    ],
    stack: {
      frontend: [
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "Bootstrap Icons",
        "Chart.js",
        "SweetAlert2",
        "EJS",
        "HTML2Canvas",
        "JavaScript",
        "Socket.IO",
        "WebSocket",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "Multer",
        "Socket.IO",
        "EJS",
        "MQTT",
        "Firebase Admin SDK",
      ],
      database: [
        "PostgreSQL",
        "Firebase Authentication",
        "Firebase Storage",
        "Firebase Database",
      ],
      libraries: [
        "SweetAlert2",
        "Chart.js",
        "Bootstrap",
        "HTML2Canvas",
        "Multer",
        "Socket.IO",
        "Firebase",
        "MQTT",
        "EJS",
      ],
      integrations: [
        "Firebase Authentication",
        "Firebase Storage",
        "Firebase Database",
        "Socket.IO",
        "MQTT",
        "APIs REST próprias",
      ],
    },
  },
];

// Perfis sociais dos integrantes citados nos projetos.
export const teamSocials = {
  "Eduardo Wagner": {
    github: "https://github.com/EduardoWagner03",
    linkedin: "https://www.linkedin.com/in/eduardowagner03/",
  },
  "Victor Bueno": {
    github: "https://github.com/victorbueno920",
    linkedin: "https://www.linkedin.com/in/victor-bueno-365461288/",
  },
  "Lucas Ulbrich": {
    github: "https://github.com/lucasulbrich",
    linkedin: "https://www.linkedin.com/in/lucas-ulbrich/",
  },
};

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript ES6+",
    "Bootstrap",
    "EJS",
    "Chart.js",
    "jQuery",
  ],
  backend: ["Node.js", "Express.js", "Python"],
  database: [
    "PostgreSQL",
    "Firebase",
    "Firestore",
    "Firebase Storage",
    "Firebase Auth",
  ],
  cloud: ["Google Cloud Platform", "Firebase"],
  desktop: ["Electron.js", "PWA"],
  tools: ["Git", "GitHub", "SweetAlert2", "Multer", "WebSockets", "MQTT"],
  methodologies: [
    "Scrum",
    "Jira",
    "Metodologias Ágeis",
    "Arquitetura MVC",
    "Trabalho em Equipe",
  ],
  learning: ["ReactJS", "React Native"],
};

// Ordem de exibição e destaque visual de cada categoria de skill.
export const skillCategories = [
  { key: "frontend", icon: "Code2", accent: "flux", span: "md:col-span-2" },
  { key: "backend", icon: "Server", accent: "pulse" },
  { key: "database", icon: "Database", accent: "flux" },
  { key: "cloud", icon: "Cloud", accent: "pulse" },
  { key: "desktop", icon: "MonitorSmartphone", accent: "flux" },
  { key: "tools", icon: "Wrench", accent: "pulse", span: "md:col-span-2" },
  { key: "methodologies", icon: "GitBranch", accent: "flux" },
  { key: "learning", icon: "Sparkles", accent: "pulse", learning: true },
];
