// Conteúdo em português (idioma padrão). Todo texto visível do portfolio vive
// aqui — nenhum componente contém string literal de conteúdo.
const pt = {
  meta: {
    locale: "pt-BR",
    title: "Eduardo Wagner — Desenvolvedor Full Stack Pleno",
    description:
      "Portfolio de Eduardo Gregório Wagner, Desenvolvedor Full Stack Pleno e sócio-fundador da StreamDev. React, Next.js, TypeScript, Node.js, PostgreSQL e Supabase.",
    switchTo: "EN",
    switchLabel: "Mudar idioma para inglês",
  },

  loader: {
    text: "Carregando portfólio",
  },

  nav: {
    items: [
      { id: "home", label: "Início" },
      { id: "about", label: "Sobre" },
      { id: "skills", label: "Habilidades" },
      { id: "projects", label: "Projetos" },
      { id: "experience", label: "Experiência" },
      { id: "contact", label: "Contato" },
    ],
    openMenu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação",
    toDark: "Ativar modo escuro",
    toLight: "Ativar modo claro",
    downloadCv: "Baixar CV",
    cvUnavailable: "CV em atualização",
    skipToContent: "Pular para o conteúdo",
    backToTop: "Voltar ao topo",
  },

  hero: {
    badge: "Olá, eu sou",
    firstName: "Eduardo Gregório",
    lastName: "Wagner",
    roles: [
      "Desenvolvedor Full Stack Pleno",
      "React · Next.js · TypeScript",
      "Sócio-fundador da StreamDev",
      "Engenheiro de Software",
    ],
    subtitle:
      "Desenvolvedor Full Stack Pleno · React, Next.js e TypeScript",
    description:
      "Bacharel em Engenharia de Software com 4 anos de experiência prática em desenvolvimento Full Stack e foco em Front-end. Trabalho com o ecossistema JavaScript moderno — React, Next.js e TypeScript — para criar interfaces de alta performance e escaláveis, cobrindo todo o ciclo do software: da arquitetura à entrega, com Node.js, PostgreSQL, Supabase e Firebase.",
    primaryCta: "Ver Projetos",
    secondaryCta: "Entre em Contato",
    scroll: "Role para explorar",
    photoAlt: "Eduardo Wagner",
    stats: [
      {
        label: "4 anos de experiência",
        desc: "Ciclo completo: arquitetura, código, deploy e manutenção",
      },
      {
        label: "Sócio-fundador da StreamDev",
        desc: "Software house própria, com liderança técnica de projetos",
      },
      {
        label: "Bacharel em Eng. de Software",
        desc: "UGV — Centro Universitário, concluído em 2025",
      },
    ],
    orbit: [
      "Engenharia de Software",
      "Banco de Dados",
      "Nuvem",
      "Jira",
      "Aplicações Desktop",
      "GitHub",
    ],
  },

  about: {
    badge: "Conheça mais",
    title: "Sobre Mim",
    subtitle:
      "Desenvolvedor apaixonado por criar soluções que fazem a diferença",
    introTitle: "Olá! Eu sou Eduardo",
    introText:
      "Desenvolvedor de 23 anos, de Irineópolis (SC), bacharel em Engenharia de Software. Minha jornada na programação começou pela curiosidade de entender como as tecnologias funcionam — hoje, quatro anos depois, transformo requisitos de negócio em sistemas robustos para web e desktop, com foco em código limpo, escalabilidade e entrega contínua de valor.",
    facts: [
      { label: "Idade", value: "23 anos" },
      { label: "Local", value: "Irineópolis, SC" },
      { label: "Formação", value: "Bacharel em Eng. de Software" },
      { label: "Experiência", value: "4 anos" },
    ],
    journey: [
      {
        title: "Formação Acadêmica",
        text: "Bacharel em Engenharia de Software pela UGV – Centro Universitário, com graduação concluída em dezembro de 2025. Durante a trajetória acadêmica, liderei múltiplas equipes de desenvolvimento em projetos práticos, aplicando metodologias ágeis e coordenando todo o ciclo de vida do software: da análise de requisitos e diagramação de arquitetura (UML/DER) até o deploy final em produção.",
      },
      {
        title: "StreamDev — Software House",
        text: "Como sócio-fundador da StreamDev, respondo pela liderança técnica e pela gestão de projetos, com foco em soluções escaláveis e arquitetura de sistemas modernos. É onde reúno o stack que domino — React, Next.js, TypeScript e Supabase — para tirar produtos do papel e levá-los até a operação real do cliente.",
      },
      {
        title: "Liderança e Trabalho em Equipe",
        text: "Tenho experiência prática liderando e integrando times organizados por metodologias ágeis, mantendo comunicação clara e colaboração no dia a dia. Já atuei como Co-Líder Técnico e Líder de Frontend, dividindo escopo, revisando entregas e mantendo o fluxo de trabalho organizado com Git, GitHub e Jira.",
      },
      {
        title: "Filosofia de Trabalho",
        text: "Adoto uma filosofia de trabalho focada em comprometimento, organização e entrega de soluções funcionais. Busco sempre alinhar qualidade técnica com prazos definidos, mantendo atenção aos detalhes e buscando melhorias contínuas. Valorizo a clareza na comunicação e a colaboração para alcançar resultados consistentes em equipe.",
      },
    ],
    ctaTitle: "Vamos construir algo juntos",
    ctaText:
      "Estou aberto a novos projetos, parcerias e oportunidades que envolvam produtos web modernos, e-commerce e sistemas sob medida. Se você precisa de alguém que assuma o problema do início ao fim — da arquitetura à operação em produção — vamos conversar.",
    ctaPrimary: "Vamos conversar",
    ctaSecondary: "Download CV",
  },

  skills: {
    badge: "Stack Técnica",
    title: "Habilidades",
    subtitle: "Tecnologias e ferramentas que domino",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Banco de Dados",
      commerce: "E-commerce & Integrações",
      cloud: "Serviços em Nuvem",
      desktop: "Desktop",
      tools: "Ferramentas",
      methodologies: "Metodologias",
      learning: "Aprendendo Atualmente",
    },
  },

  projects: {
    badge: "Portfólio",
    title: "Principais Projetos",
    subtitle: "Alguns dos principais projetos que desenvolvi",
    viewDetails: "Ver Detalhes",
    openProject: "Abrir detalhes do projeto",
    featured: "Destaque",
    status: {
      done: "Finalizado",
      wip: "Em Desenvolvimento",
      live: "Em Operação",
    },
    modal: {
      close: "Fechar detalhes do projeto",
      overview: "Visão Geral",
      responsibilities: "Minhas Responsabilidades no Projeto",
      team: "Equipe do Projeto",
      iot: "Integração IoT Desenvolvida pelo Victor",
      features: "Funcionalidades",
      stack: "Stack e Integrações",
      expandImage: "Ampliar imagem",
      stackLabels: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        libraries: "Bibliotecas",
        integrations: "APIs e Integrações",
      },
    },
    lightbox: {
      close: "Fechar imagem",
      prev: "Imagem anterior",
      next: "Próxima imagem",
      hint: "Use as setas para navegar • ESC para fechar",
    },
    items: {
      bloco3d: {
        title: "Bloco3D",
        subtitle: "Plataforma em Operação",
        description:
          "Plataforma de e-commerce especializada no mercado de tecnologia 3D — impressoras, filamentos e acessórios. Construída sobre React, Next.js e TypeScript com Supabase, e administrada por uma infraestrutura modular em Medusa, com sincronização de estoque e notas fiscais via API do Bling e pagamentos pelo Mercado Pago.",
        story:
          "O Bloco3D é o projeto que lidero na StreamDev, a software house da qual sou sócio-fundador. Assumi a arquitetura e o desenvolvimento de ponta a ponta: o front-end em React, Next.js e TypeScript; o Supabase cuidando de banco de dados, autenticação e storage; e o framework Medusa sustentando a área administrativa de forma modular e escalável. O trabalho incluiu dashboards administrativos complexos com sincronização via API do Bling para gestão de estoque e emissão de notas fiscais, a integração do gateway de pagamentos do Mercado Pago e a adequação total à LGPD.",
        period: "Jan/2026 — Presente",
        role: "Arquitetura & Full Stack",
        teamSize: "Liderança técnica",
        responsibilities: [
          "Arquitetura da Plataforma — Definição de stack, modelagem e estrutura do projeto",
          "Front-end em Next.js — Interfaces em React e TypeScript com foco em performance",
          "Supabase — Banco de dados, autenticação e storage",
          "Infraestrutura Medusa — Administração modular e escalável do e-commerce",
          "Dashboards Administrativos — Painéis complexos de gestão e acompanhamento",
          "Integração ERP — Sincronização de estoque e notas fiscais via API do Bling",
          "Pagamentos — Integração do gateway do Mercado Pago",
          "LGPD — Conformidade no tratamento de dados pessoais",
        ],
        features: [
          {
            title: "Loja em Next.js",
            desc: "Vitrine e checkout construídos em React, Next.js e TypeScript, com catálogo especializado em impressoras 3D, filamentos e acessórios.",
          },
          {
            title: "Administração com Medusa",
            desc: "Painel administrativo sobre o framework Medusa, permitindo gestão modular de produtos, pedidos e operação da loja de forma escalável.",
          },
          {
            title: "Estoque e Notas via Bling",
            desc: "Sincronização automática com a API do Bling para controle de estoque e emissão de notas fiscais, eliminando lançamento manual.",
          },
          {
            title: "Pagamentos e LGPD",
            desc: "Checkout integrado ao gateway do Mercado Pago, com o tratamento de dados pessoais em total conformidade com a LGPD.",
          },
        ],
        team: [
          {
            role: "Sócio-fundador & Engenheiro de Software",
            resp: "Arquitetura, front-end em Next.js, integrações com ERP e gateway de pagamento, conformidade LGPD",
          },
        ],
      },
      flowtime: {
        title: "FlowTime",
        subtitle: "Sistema Finalizado",
        description:
          "Sistema web completo para gestão de clínicas de podologia, trazendo eficiência, organização e praticidade para o dia a dia das clínicas. O FlowTime permite otimizar agendamentos, atendimento ao cliente e processos administrativos, tudo em uma plataforma intuitiva.",
        story:
          "O FlowTime foi iniciado em outubro de 2024 e finalizado em janeiro de 2025, desenvolvido em equipe de 3 pessoas. O sistema surgiu da necessidade de digitalizar e automatizar o fluxo de trabalho em clínicas de podologia. O projeto oferece dashboard interativo, relatórios em PDF, assinatura digital e recursos avançados para facilitar o controle de agendamentos, pacientes e receitas. Com uma interface moderna e funcionalidades robustas, o FlowTime proporciona mais agilidade, segurança e qualidade no atendimento, sendo implementado com sucesso em ambiente real.",
        period: "Out/2024 — Jan/2025",
        role: "Co-Líder Técnico & Front-end",
        teamSize: "Equipe de 3",
        responsibilities: [
          "Co-Liderança Técnica — Condução do projeto junto ao time",
          "Modelagem — Diagramas UML/DER e prototipagem no Figma",
          "Frontend Completo — Desenvolvimento de toda interface do usuário",
          "Gráficos Interativos — Implementação de dashboards e visualizações",
          "Sistema de Tokens — Desenvolvimento de autenticação e segurança",
          "Responsividade — Adaptação para dispositivos móveis e desktop",
          "UX/UI — Implementação do design e experiência do usuário",
        ],
        features: [
          {
            title: "Dashboard Interativo",
            desc: "Visualize rapidamente os principais indicadores da clínica, como agendamentos, atendimentos e receitas. Desenvolvimento completo do frontend e implementação dos gráficos interativos.",
          },
          {
            title: "Gestão de Agendas",
            desc: "Permite marcar, editar e visualizar consultas de forma simples e rápida. Interface responsiva e intuitiva desenvolvida integralmente.",
          },
          {
            title: "Relatórios em PDF",
            desc: "Gere relatórios detalhados de atendimentos, receitas e pacientes em poucos cliques. Frontend da funcionalidade e sistema de tokens de segurança para acesso.",
          },
        ],
        team: [
          {
            role: "Co-Líder Técnico & Frontend Developer",
            resp: "Co-liderança técnica, modelagem UML/DER, prototipagem no Figma, frontend completo, gráficos interativos, sistema de tokens de segurança",
          },
          {
            role: "Backend Developer",
            resp: "Toda arquitetura do backend, APIs, banco de dados",
          },
          {
            role: "UI/UX Designer",
            resp: "Prototipagem das páginas no Figma, design system",
          },
        ],
      },
      tonnertrack: {
        title: "TonnerTrack",
        subtitle: "Sistema Finalizado",
        description:
          "Sistema desenvolvido para automatizar o controle de suprimentos de impressão em instituições de ensino, reduzindo desperdícios e fornecendo relatórios completos. O TonnerTrack facilita a gestão de impressoras e toners, trazendo mais eficiência e organização para o ambiente escolar.",
        story:
          "O TonnerTrack foi um projeto de Extensão Acadêmica iniciado em fevereiro de 2025 e finalizado em junho de 2025, realizado em uma escola pública. O sistema surgiu da necessidade real de controlar o uso de impressoras e toners, automatizando registros, gerando relatórios detalhados e reduzindo desperdícios. O projeto conta com interface intuitiva e recursos inteligentes, contribuindo para a melhoria da gestão de suprimentos e sendo implementado com sucesso na instituição.",
        period: "Fev/2025 — Jun/2025",
        role: "Full Stack Solo",
        teamSize: "Projeto individual",
        responsibilities: [
          "Desenvolvimento Completo — Frontend e Backend do zero",
          "Banco de Dados — Modelagem e implementação PostgreSQL",
          "Autenticação — Sistema de login e controle de acesso",
          "Relatórios — Geração de relatórios e dashboards",
          "Interface Responsiva — Design adaptável para todos dispositivos",
          "Deploy e Manutenção — Implementação em ambiente de produção",
        ],
        features: [
          {
            title: "Controle de Suprimentos",
            desc: "Gerencie o estoque de toners e impressoras, evitando desperdícios e falta de material. Sistema completo desenvolvido do zero.",
          },
          {
            title: "Relatórios Detalhados",
            desc: "Gere relatórios completos sobre o uso de impressoras, facilitando a tomada de decisão. Interface e backend desenvolvidos integralmente.",
          },
          {
            title: "Alertas Inteligentes",
            desc: "Receba notificações quando o estoque estiver baixo ou houver necessidade de manutenção. Sistema de notificações desenvolvido por completo.",
          },
        ],
        team: [
          {
            role: "Desenvolvedor Full Stack Solo",
            resp: "Desenvolvimento completo do sistema, desde planejamento até implementação final",
          },
        ],
      },
      thermaltech: {
        title: "ThermalTech",
        subtitle: "Sistema em Andamento",
        description:
          "Projeto acadêmico em dupla que criou um sistema CMMS integrado com IoT para monitoramento e controle de ambientes climatizados. Permite gerenciar equipamentos de ar-condicionado, registrar chamados, gerar ordens de serviço e monitorar condições ambientais em tempo real via sensores MQTT. Conta ainda com chat em tempo real para equipes.",
        story:
          "O ThermalTech está sendo desenvolvido como parte de um projeto acadêmico na faculdade, com início em 2025, desenvolvido em dupla. O objetivo é criar um sistema robusto para monitoramento e automação de ambientes industriais, integrando sensores IoT, dashboards, relatórios e comunicação entre equipes. O sistema está em constante evolução, recebendo melhorias e novas funcionalidades conforme o desenvolvimento avança.",
        period: "2025 — Em andamento",
        role: "Frontend & Security",
        teamSize: "Dupla",
        responsibilities: [
          "Frontend Completo — Desenvolvimento de toda interface do sistema",
          "Middleware de Auditoria — Sistema avançado de detecção de ameaças",
          "Detecção de Ameaças — SQL injection, XSS, bots maliciosos",
          "Threat Scoring — Sistema inteligente de pontuação de ameaças",
          "Bloqueio Inteligente — IPs suspeitos e rate limiting",
          "Alertas em Tempo Real — Notificações por email automáticas",
          "Relatórios de Segurança — Monitoramento contínuo automatizado",
        ],
        features: [
          {
            title: "Monitoramento em Tempo Real",
            desc: "Acompanhe a temperatura e o status dos equipamentos em tempo real através de sensores IoT. Frontend completo e sistema de segurança implementado.",
          },
          {
            title: "Gestão de Chamados",
            desc: "Registre, acompanhe e resolva chamados técnicos de forma centralizada e eficiente. Interface desenvolvida com sistema de auditoria avançado.",
          },
          {
            title: "Chat Integrado",
            desc: "Comunique-se com a equipe diretamente pelo sistema, agilizando o suporte e a manutenção. Frontend e middleware de segurança implementados.",
          },
        ],
        team: [
          {
            role: "Frontend & Security Developer",
            resp: "Frontend completo, sistema de segurança avançado, middleware de auditoria, detecção de ameaças",
          },
          {
            role: "Backend & IoT Developer",
            resp: "Backend, integração IoT, sensores ESP, Firebase Realtime Database, comunicação WebSocket/SSE",
          },
        ],
        iot: [
          "Captura de Temperatura — Sensores via HTTP POST no endpoint /api/sensor-data",
          "Comunicação Bidirecional — ESP via Firebase Realtime Database",
          "Tempo Real — Server-Sent Events (SSE) e WebSocket",
          "Controle Remoto — Comandos de temperatura, velocidade e modo",
          "Alertas Automáticos — Verificação de limites por sala",
        ],
      },
    },
  },

  experience: {
    badge: "Trajetória Profissional",
    title: "Experiência Profissional",
    subtitle: "Minha evolução prática no desenvolvimento de software",
    currentLabel: "Atual",
    items: {
      studies: {
        period: "2021",
        title: "Início nos Estudos de Programação",
        org: "Cursos Livres",
        bullets: [
          "HTML5, CSS3, JavaScript",
          "Páginas estáticas e fundamentos de lógica",
          "Versionamento com Git",
        ],
      },
      college: {
        period: "Fev/2022 — Dez/2025",
        title: "Bacharelado em Engenharia de Software",
        org: "Centro Universitário UGV · Concluído",
        bullets: [
          "Foco em desenvolvimento web e desktop",
          "Projetos com JavaScript, Node.js, PostgreSQL, Firebase, Google Cloud",
          "Liderança de múltiplas equipes em projetos práticos",
          "Ciclo completo: requisitos, arquitetura (UML/DER) e deploy em produção",
        ],
      },
      events: {
        period: "2022 — 2024",
        title: "Participação em Eventos Acadêmicos",
        org: "Centro Universitário UGV",
        bullets: [
          "XVII Encontro de Iniciação Científica 2022 — Ouvinte",
          "XVIII Encontro de Iniciação Científica 2023 — Apresentação",
          "XIX Encontro de Iniciação Científica 2024 — Ouvinte",
          "SEMTEC — Semana de Tecnologia da UGV 2022",
          "SEMTEC — Semana de Tecnologia da UGV 2024",
        ],
      },
      robotics: {
        period: "Fev/2024 — Jun/2024",
        title: "Projeto Garra Robótica",
        org: "Disciplina de Robótica",
        bullets: [
          "Construção de garra robótica controlada por microcontrolador",
          "Desenvolvimento de comandos automatizados e controle de movimento",
          "Integração entre hardware e software com programação embarcada",
        ],
      },
      battle: {
        period: "2024",
        title: "Projeto Batalha de Robôs",
        org: "Competição Interna",
        bullets: [
          "Construção de robô de combate com sensores de colisão",
          "Prototipação, testes e combate em arena com outras equipes",
          "Trabalho em equipe e otimização de desempenho físico e lógico",
        ],
      },
      thermal: {
        period: "2024",
        title: "Desenvolvedor IoT",
        org: "Projeto Thermal Tech",
        bullets: [
          "Monitoramento térmico com Electron.js e sensores",
          "Backend com Node.js e dashboard interativo",
          "Projeto em equipe de 2 pessoas",
        ],
      },
      flowtime: {
        period: "Out/2024 — Jan/2025",
        title: "Co-Líder Técnico e Líder de Frontend",
        org: "Projeto FlowTime",
        bullets: [
          "SaaS para clínica de podologia com dashboard e relatórios",
          "Modelagem UML/DER e prototipagem no Figma",
          "Frontend (HTML, CSS, JS), backend com Node.js/Firebase",
          "Desktop com Electron.js, entregue em operação comercial",
        ],
      },
      tonner: {
        period: "Mar/2025 — Jun/2025",
        title: "Desenvolvedor Full Stack",
        org: "Projeto TonerTrack",
        bullets: [
          "Sistema de gestão de impressoras escolares",
          "PostgreSQL, autenticação e painéis administrativos",
          "Desenvolvimento individual com foco em escalabilidade",
        ],
      },
      streamdev: {
        period: "Jan/2026 — Presente",
        title: "Engenheiro de Software e Sócio-Fundador",
        org: "StreamDev — Software House",
        bullets: [
          "Liderança técnica e gestão de projetos em software house própria",
          "Arquitetura do Bloco3D, e-commerce do mercado de tecnologia 3D",
          "React, Next.js e TypeScript integrados ao Supabase",
          "Infraestrutura administrativa sobre o framework Medusa",
          "Integrações com API do Bling (ERP) e Mercado Pago, em conformidade com a LGPD",
        ],
      },
    },
  },

  contact: {
    badge: "Vamos conversar",
    title: "Entre em Contato",
    subtitle:
      "Estou sempre aberto a novas oportunidades e projetos interessantes",
    introTitle: "Vamos trabalhar juntos!",
    introText:
      "Estou sempre aberto a novas oportunidades, parcerias e projetos inovadores — seja um produto web do zero, um e-commerce ou um sistema sob medida. Se você tem uma ideia interessante ou precisa de um desenvolvedor experiente no time, vamos conversar!",
    methods: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    copy: "Copiar",
    copied: "Copiado!",
    available: "Disponível para novos projetos e parcerias",
    formTitle: "Envie uma mensagem",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "exemplo@email.com",
      subject: "Assunto",
      subjectPlaceholder: "Sobre o que deseja falar?",
      message: "Mensagem",
      messagePlaceholder: "Digite sua mensagem...",
      submit: "Enviar Mensagem",
      sending: "Enviando...",
      sent: "Mensagem pronta!",
      required: "Campo obrigatório",
      invalidEmail: "Informe um email válido",
      minMessage: "Escreva pelo menos 20 caracteres",
      counter: "caracteres",
      fallbackNote:
        "O envio abre seu cliente de email com a mensagem já preenchida.",
    },
    privacy:
      "Suas informações estão seguras e não serão compartilhadas com terceiros.",
  },

  footer: {
    role: "Desenvolvedor Full Stack Pleno · StreamDev",
    location: "Irineópolis, SC — Brasil",
    quote:
      "Transformando ideias em código, código em soluções, soluções em impacto",
    rights: "Todos os direitos reservados.",
    builtWith: "Construído com React, Tailwind CSS e Framer Motion",
  },
};

export default pt;
