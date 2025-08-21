export const projects = [
  {
    title: "FlowTime",
    subtitulo: "Sistema Finalizado",
    description:
      "Sistema web completo para gestão de clínicas de podologia, trazendo eficiência, organização e praticidade para o dia a dia das clínicas. O FlowTime permite otimizar agendamentos, atendimento ao cliente e processos administrativos, tudo em uma plataforma intuitiva.",
    historia:
      "O FlowTime foi iniciado em outubro de 2024 e finalizado em janeiro de 2025, desenvolvido em equipe de 3 pessoas. O sistema surgiu da necessidade de digitalizar e automatizar o fluxo de trabalho em clínicas de podologia. O projeto oferece dashboard interativo, relatórios em PDF, assinatura digital e recursos avançados para facilitar o controle de agendamentos, pacientes e receitas. Com uma interface moderna e funcionalidades robustas, o FlowTime proporciona mais agilidade, segurança e qualidade no atendimento, sendo implementado com sucesso em ambiente real.",
    funcionalidades: [
      {
        imagem: "/images/homeFlowtime.png",
        titulo: "Dashboard Interativo",
        descricao:
          "Visualize rapidamente os principais indicadores da clínica, como agendamentos, atendimentos e receitas. Desenvolvimento completo do frontend e implementação dos gráficos interativos.",
      },
      {
        imagem: "/images/AppointmentsFlowTime.png",
        titulo: "Gestão de Agendas",
        descricao:
          "Permite marcar, editar e visualizar consultas de forma simples e rápida. Interface responsiva e intuitiva desenvolvida integralmente.",
      },
      {
        imagem: "/images/FichaAnamnese.png",
        titulo: "Relatórios em PDF",
        descricao:
          "Gere relatórios detalhados de atendimentos, receitas e pacientes em poucos cliques. Frontend da funcionalidade e sistema de tokens de segurança para acesso.",
      },
    ],
    minhasResponsabilidades: [
      "🎨 Frontend Completo - Desenvolvimento de toda interface do usuário",
      "📊 Gráficos Interativos - Implementação de dashboards e visualizações",
      "🔐 Sistema de Tokens - Desenvolvimento de autenticação e segurança",
      "📱 Responsividade - Adaptação para dispositivos móveis e desktop",
      "✨ UX/UI - Implementação do design e experiência do usuário",
    ],
    equipe: [
      {
        nome: "Eduardo Wagner",
        papel: "Frontend Developer",
        responsabilidades:
          "Frontend completo, gráficos interativos, sistema de tokens de segurança",
      },
      {
        nome: "Victor Bueno",
        papel: "Backend Developer",
        responsabilidades:
          "Toda arquitetura do backend, APIs, banco de dados",
      },
      {
        nome: "Lucas Ulbrich",
        papel: "UI/UX Designer",
        responsabilidades: "Prototipagem das páginas no Figma, design system",
      },
    ],
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
    status: "Finalizado",
    image: "/images/FlowTime.png",
    link: "#",
  },
  {
    title: "TonnerTrack",
    subtitulo: "Sistema Finalizado",
    description:
      "Sistema desenvolvido para automatizar o controle de suprimentos de impressão em instituições de ensino, reduzindo desperdícios e fornecendo relatórios completos. O TonnerTrack facilita a gestão de impressoras e toners, trazendo mais eficiência e organização para o ambiente escolar.",
    historia:
      "O TonnerTrack foi um projeto de Extensão Acadêmica iniciado em fevereiro de 2025 e finalizado em junho de 2025, realizado em uma escola pública. O sistema surgiu da necessidade real de controlar o uso de impressoras e toners, automatizando registros, gerando relatórios detalhados e reduzindo desperdícios. O projeto conta com interface intuitiva e recursos inteligentes, contribuindo para a melhoria da gestão de suprimentos e sendo implementado com sucesso na instituição.",
    funcionalidades: [
      {
        imagem: "/images/GerenciamentoTonnerTrack.png",
        titulo: "Controle de Suprimentos",
        descricao:
          "Gerencie o estoque de toners e impressoras, evitando desperdícios e falta de material. Sistema completo desenvolvido do zero.",
      },
      {
        imagem: "/images/Relatórios.png",
        titulo: "Relatórios Detalhados",
        descricao:
          "Gere relatórios completos sobre o uso de impressoras, facilitando a tomada de decisão. Interface e backend desenvolvidos integralmente.",
      },
      {
        imagem: "/images/NotificacaoTonnerTrac.png",
        titulo: "Alertas Inteligentes",
        descricao:
          "Receba notificações quando o estoque estiver baixo ou houver necessidade de manutenção. Sistema de notificações desenvolvido por completo.",
      },
    ],
    minhasResponsabilidades: [
      "🎨 Desenvolvimento Completo - Frontend e Backend do zero",
      "🗄️ Banco de Dados - Modelagem e implementação PostgreSQL",
      "🔐 Autenticação - Sistema de login e controle de acesso",
      "📊 Relatórios - Geração de relatórios e dashboards",
      "📱 Interface Responsiva - Design adaptável para todos dispositivos",
      "🔧 Deploy e Manutenção - Implementação em ambiente de produção",
    ],
    equipe: [
      {
        nome: "Eduardo Wagner",
        papel: "Desenvolvedor Full Stack Solo",
        responsabilidades:
          "Desenvolvimento completo do sistema, desde planejamento até implementação final",
      },
    ],
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
    status: "Finalizado",
    image: "/images/TonnerTrack.png",
    link: "#",
  },
  {
    title: "ThermalTech",
    subtitulo: "Sistema em Andamento",
    description:
      "Projeto acadêmico em dupla que criou um sistema CMMS integrado com IoT para monitoramento e controle de ambientes climatizados. Permite gerenciar equipamentos de ar-condicionado, registrar chamados, gerar ordens de serviço e monitorar condições ambientais em tempo real via sensores MQTT. Conta ainda com chat em tempo real para equipes.",
    historia:
      "O ThermalTech está sendo desenvolvido como parte de um projeto acadêmico na faculdade, com início em 2025, desenvolvido em dupla. O objetivo é criar um sistema robusto para monitoramento e automação de ambientes industriais, integrando sensores IoT, dashboards, relatórios e comunicação entre equipes. O sistema está em constante evolução, recebendo melhorias e novas funcionalidades conforme o desenvolvimento avança.",
    funcionalidades: [
      {
        imagem: "/images/Monitoriamento.png",
        titulo: "Monitoramento em Tempo Real",
        descricao:
          "Acompanhe a temperatura e o status dos equipamentos em tempo real através de sensores IoT. Frontend completo e sistema de segurança implementado.",
      },
      {
        imagem: "/images/ConsultarChamados.png",
        titulo: "Gestão de Chamados",
        descricao:
          "Registre, acompanhe e resolva chamados técnicos de forma centralizada e eficiente. Interface desenvolvida com sistema de auditoria avançado.",
      },
      {
        imagem: "/images/ChatTT.png",
        titulo: "Chat Integrado",
        descricao:
          "Comunique-se com a equipe diretamente pelo sistema, agilizando o suporte e a manutenção. Frontend e middleware de segurança implementados.",
      },
    ],
    minhasResponsabilidades: [
      "🎨 Frontend Completo - Desenvolvimento de toda interface do sistema",
      "🛡️ Middleware de Auditoria - Sistema avançado de detecção de ameaças",
      "🔍 Detecção de Ameaças - SQL injection, XSS, bots maliciosos",
      "📊 Threat Scoring - Sistema inteligente de pontuação de ameaças",
      "🚫 Bloqueio Inteligente - IPs suspeitos e rate limiting",
      "📧 Alertas em Tempo Real - Notificações por email automáticas",
      "📋 Relatórios de Segurança - Monitoramento contínuo automatizado",
    ],
    equipe: [
      {
        nome: "Eduardo Wagner",
        papel: "Frontend & Security Developer",
        responsabilidades:
          "Frontend completo, sistema de segurança avançado, middleware de auditoria, detecção de ameaças",
      },
      {
        nome: "Victor Bueno",
        papel: "Backend & IoT Developer",
        responsabilidades:
          "Backend, integração IoT, sensores ESP, Firebase Realtime Database, comunicação WebSocket/SSE",
      },
    ],
    integracaoIoT: [
      "🌡️ Captura de Temperatura - Sensores via HTTP POST no endpoint /api/sensor-data",
      "📡 Comunicação Bidirecional - ESP via Firebase Realtime Database",
      "⚡ Tempo Real - Server-Sent Events (SSE) e WebSocket",
      "🎯 Controle Remoto - Comandos de temperatura, velocidade e modo",
      "⚠️ Alertas Automáticos - Verificação de limites por sala",
    ],
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
    status: "Em Desenvolvimento",
    image: "/images/ThermalTech.png",
    link: "#",
  },
];

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