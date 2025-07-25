"use client"

import { useState, useRef } from "react"
import './styles/Header.css';
import './styles/index.css';
import './styles/dark-mode.css';
import './styles/media-queries.css';
import './styles/animations.css';
import { FaBriefcase } from "react-icons/fa";
import {
  FaMoon,
  FaSun,
  FaGlobe,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaTools,
  FaCloud,
  FaDesktop,
  FaCogs,
  FaRocket,
  FaUserAstronaut,
  FaPhone, 
  FaShieldAlt,
} from "react-icons/fa"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog"

import { SiJira } from "react-icons/si";

function App() {
  const [lang, setLang] = useState("pt-br")
  const [darkMode, setDarkMode] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null);

  const handleLang = () => setLang(lang === "pt-br" ? "en" : "pt-br")
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle("dark-mode")
  }

const projects = [
  {
    title: "FlowTime",
    description:
      "Sistema web desenvolvido para gestão de clínicas de podologia, otimizando agendamentos, atendimento ao cliente e organização administrativa.",
    fullDescription:
      `O FlowTime é uma solução completa criada para clínicas de podologia, focada em facilitar o controle de agendamentos, o atendimento ao paciente e a gestão administrativa. O sistema oferece dashboard interativo, relatórios em PDF, assinatura digital e recursos para melhorar a eficiência operacional da clínica.'
    
    Principais tecnologias utilizadas:
  
    **Front-End**
    - HTML5
    - CSS3 (com media queries para responsividade)
    - EJS (renderização de views server-side)
    - JavaScript (ES6+)
    - EJS (Embedded JavaScript Templates)
    - Electron.js (aplicação desktop multiplataforma)
    - SweetAlert2 (alertas e modais)
  
    **Back-End**
    - Node.js (v20.x)
    - Express.js (framework web)
    - Multer (upload de arquivos)
    - Node-cron (agendamento de tarefas)
    - dotenv (variáveis de ambiente)
    - memory-cache e node-cache (cache em memória)
    - web-push (notificações push)
    - path (manipulação de caminhos)
    - cross-env (ambiente multiplataforma)
  
    **Database**
    - Firebase Firestore (NoSQL)
    - Firebase Database
    - Firebase Storage (armazenamento de arquivos)
    - Firebase Authentication (autenticação de usuários)
    - Firebase Admin SDK
  
    **Bibliotecas**
    - browser-image-compression (compressão de imagens)
    - moment-timezone (manipulação de datas e fusos)
    - node-fetch (requisições HTTP)
    - Chart.js (gráficos e dashboards)
    - SweetAlert2 (alertas e modais)
    - Choices.js (selects avançados)
    - html2pdf.js (geração de PDF)
    - SignaturePad.js (captura de assinatura eletrônica)
  
    **APIs e Integrações**
    - API IBGE (consulta de estados e cidades)
    - WhatsApp API (envio de mensagens)
    - Web Push API (notificações push)
    - Firebase Auth API (autenticação)
    - Service Workers (PWA/offline)
    - Local Storage (armazenamento local no navegador)
    `,
    frontend: [
      "HTML5",
      "CSS3",
      "EJS",
      "JavaScript",
      "EJS",
      "Electron.js",
      "SweetAlert2"
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
      "cross-env"
    ],
    database: [
      "Firebase Firestore",
      "Firebase Database",
      "Firebase Storage",
      "Firebase Authentication",
      "Firebase Admin SDK"
    ],
    libraries: [
      "browser-image-compression",
      "moment-timezone",
      "node-fetch",
      "Chart.js",
      "SweetAlert2",
      "Choices.js",
      "html2pdf.js",
      "SignaturePad.js"
    ],
    integrations: [
      "API IBGE",
      "WhatsApp API",
      "Web Push API",
      "Firebase Auth API",
      "Service Workers",
      "Local Storage"
    ],
    status: "Comercializado",
    image: "/images/FlowTime.png", // <-- Coloque aqui
    link: "#", // Placeholder link
  },
{
  title: "ThermalTech",
  description:
    "Projeto acadêmico em dupla que criou um sistema CMMS integrado com IoT para monitoramento e controle de ambientes climatizados. Permite gerenciar equipamentos de ar-condicionado, registrar chamados, gerar ordens de serviço e monitorar condições ambientais em tempo real via sensores MQTT. Conta ainda com chat em tempo real para equipes.",
  fullDescription: `O ThermalTech é um sistema desktop desenvolvido para monitoramento térmico em ambientes industriais. Oferece dashboard em tempo real, autenticação de usuários, relatórios e integrações IoT. Utiliza tecnologias modernas para garantir performance, segurança e escalabilidade.
Principais tecnologias utilizadas:

  Principais tecnologias utilizadas:

**Frontend**
- HTML5
- CSS3
- Bootstrap 5 (interface responsiva)
- Bootstrap Icons (iconografia)
- Chart.js (gráficos e dashboards)
- SweetAlert2 (alertas e popups)
- EJS (template engine para views)
- HTML2Canvas (geração de relatórios)
- JavaScript (scripts customizados)
- Socket.IO (atualizações em tempo real)
- WebSocket (comunicação em tempo real)

**Backend**
- Node.js (runtime)
- Express.js (framework web)
- Multer (upload de arquivos)
- Socket.IO (comunicação em tempo real)
- EJS (renderização de views)
- MQTT (comunicação IoT)
- Firebase Admin SDK (integração backend com Firebase)

**Banco de Dados**
- PostgreSQL (banco de dados relacional)
- Firebase Auth (autenticação)
- Firebase Storage (upload de arquivos)
- Firebase Database (dados em tempo real)

**Bibliotecas e Utilitários**
- SweetAlert2 (alertas)
- Chart.js (gráficos)
- Bootstrap (CSS e componentes)
- HTML2Canvas (relatórios)
- Multer (upload)
- Socket.IO (tempo real)
- Firebase (Auth, Storage, Database)
- MQTT (IoT)
- EJS (views)

**APIs e Integrações**
- Firebase Auth (login/autenticação)
- Firebase Storage (upload/download de arquivos)
- Firebase Database (dados em tempo real)
- Socket.IO (API WebSocket)
- MQTT (mensageria IoT)
- APIs REST próprias para equipamentos, técnicos, salas, chamados, ordens, anexos etc.
`,
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
    "WebSocket"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Multer",
    "Socket.IO",
    "EJS",
    "MQTT",
    "Firebase Admin SDK"
  ],
  database: [
    "PostgreSQL",
    "Firebase Authentication",
    "Firebase Storage",
    "Firebase Database"
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
    "EJS"
  ],
  integrations: [
    "Firebase Authentication",
    "Firebase Storage",
    "Firebase Database",
    "Socket.IO",
    "MQTT",
    "APIs REST próprias"
  ],
  status: "Em Desenvolvimento",
  image: "/images/ThermalTech.png",
  link: "#", // Placeholder link
},
  {
     title: "TonnerTrack",
  description:
    "O TonerTrack nasceu de uma necessidade real observada em uma escola pública durante um projeto de extensão universitária. Desenvolvi a solução para automatizar o controle de suprimentos de impressão, reduzir desperdícios e fornecer relatórios completos para instituições de ensino.",
  fullDescription:
    `Este TonnerTrack é uma plataforma web completa para gerenciar instituições de ensino. Ele permite a gestão de alunos, registro de notas e frequência, e a geração de relatórios acadêmicos detalhados.
  
  Principais tecnologias utilizadas:
  
  **FrontEnd**
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - EJS (Template Engine)
  - Bootstrap (Framework CSS)
  - Bootstrap Icons (Ícones)
  - Chart.js (Gráficos)
  - SweetAlert2 (Alertas e modais)
  - Electron.js (Aplicação desktop multiplataforma)
  
  **BackEnd**
  - Node.js
  - Express.js (Framework web)
  - Express-Session (Sessão)
  - Express-Handlebars (Template engine adicional)
  - Multer (Upload de arquivos)
  - Socket.io (Comunicação em tempo real)
  - dotenv (Variáveis de ambiente)
  - cookie-parser (Manipulação de cookies)
  
  **Database**
  - PostgreSQL (Banco de dados relacional)
  - pg (Driver PostgreSQL para Node.js)
  
  **Bibliotecas e Utilitários**
  - firebase (SDK do Firebase para autenticação e storage)
  - firebase-admin (Administração do Firebase no backend)
  - path (Manipulação de caminhos de arquivos)
  - electron-updater (Atualizações automáticas do app desktop)
  
  **APIs e Serviços**
  - Firebase Authenticationentication (Autenticação de usuários)
  - Firebase Cloud Storage (Armazenamento de arquivos/fotos de perfil)
  - API RESTful própria (CRUD de toners, impressoras, relatórios, etc.)
  `,
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "EJS",
      "Bootstrap",
      "Bootstrap Icons",
      "Chart.js",
      "SweetAlert2",
      "Electron.js"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Express-Session",
      "Express-Handlebars",
      "Multer",
      "Socket.io",
      "dotenv",
      "cookie-parser"
    ],
    database: [
      "PostgreSQL",
      "pg"
    ],
    libraries: [
      "firebase",
      "firebase-admin",
      "path",
      "electron-updater"
    ],
    integrations: [
      "Firebase Authentication",
      "Firebase Cloud Storage",
      "API RESTful própria"
    ],
    status: "Concluído",
    image: "/images/TonnerTrack.png",
    link: "#", // Placeholder link
  },
]

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript ES6+", "Bootstrap", "EJS", "Chart.js", "jQuery"],
    backend: ["Node.js", "Express.js", "Python"],
    database: ["PostgreSQL", "Firebase", "Firestore", "Firebase Storage", "Firebase Auth"],
    cloud: ["Google Cloud Platform", "Firebase"],
    desktop: ["Electron.js", "PWA"],
    tools: ["Git", "GitHub", "SweetAlert2", "Multer", "WebSockets", "MQTT"],
    methodologies: ["Scrum", "Jira", "Metodologias Ágeis", "Arquitetura MVC", "Trabalho em Equipe"],
    learning: ["ReactJS", "React Native"],
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    if (modalRef.current) {
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
    }
  };

  <div
    className="modal fade"
    id="projectModal"
    tabIndex="-1"
    aria-labelledby="projectModalLabel"
    aria-hidden="true"
    ref={modalRef}
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        {selectedProject && (
          <>
            <div className="modal-header">
              <h5 className="modal-title" id="projectModalLabel">
                {selectedProject.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="img-fluid rounded mb-3"
              />
              <p>{selectedProject.fullDescription}</p>
              {/* Adapte aqui para mostrar tecnologias, etc. */}
            </div>
          </>
        )}
      </div>
    </div>
  </div>
    
  return (
    <div className={`portfolio ${darkMode ? "dark-mode" : ""}`}>
      {/* Header estilo moderno */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top">
        <div className="container">
          <a className="navbar-brand logo-gradient" href="#home">
            🚀 EW
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experiência
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contato
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-primary"
                onClick={toggleDarkMode}
                title={darkMode ? "Modo claro" : "Modo escuro"}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <a
                className="btn btn-primary d-flex align-items-center gap-2"
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload /> Download CV
              </a>
              <button className="btn btn-outline-primary" onClick={handleLang} title="Mudar idioma">
                <FaGlobe /> {lang === "pt-br" ? "EN" : "PT"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Home Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
              <div className="hero-badge">
                <span style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <FaRocket style={{ fontSize: "1.3em", color: "#fff", opacity: 0.95 }} />
                  Olá, eu sou
                </span>
              </div>
                  <h1 className="hero-name">
                    Eduardo Gregório
                    <br />
                    <span className="hero-surname">Wagner</span>
                  </h1>
                  <h2 className="hero-subtitle hero-subtitle-highlight">
                    Desenvolvedor Full Stack Júnior focado em Front-end
                  </h2>
                  <p className="hero-description">
                  Desenvolvedor Full Stack Júnior, com foco em Frontend e experiência em desenvolvimento web e desktop.
                  Atuação com React, Node.js, PostgreSQL, JavaScript, entre outras tecnologias. Comprometido em entregar soluções de qualidade,
                  alinhando desempenho, usabilidade e boas práticas de desenvolvimento.
                  </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn btn-hero-primary btn-lg me-3">
                    <i className="fas fa-rocket me-2"></i>Ver Projetos
                  </a>
                  <a href="#contact" className="btn btn-hero-outline btn-lg">
                    <i className="fas fa-envelope me-2"></i>Entre em Contato
                  </a>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <FaCogs className="stat-icon" />
                    <span className="stat-label">Projetos de alto impacto</span>
                    <span className="stat-desc">Soluções completas para empresas e instituições</span>
                  </div>
                  <div className="stat-item">
                    <FaTools className="stat-icon" />
                    <span className="stat-label">Especialidade</span>
                    <span className="stat-desc">Full Stack & Integrações avançadas</span>
                  </div>
                  <div className="stat-item">
                    <FaCloud className="stat-icon" />
                    <span className="stat-label">Resultados</span>
                    <span className="stat-desc">Automação, performance e inovação</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="profile-container">
                  <div className="profile-circle">
                    <img src="/images/img.jpeg" alt="Eduardo Wagner" className="profile-img" />
                  </div>
                    <div className="floating-elements">
                      <div className="floating-icon floating-icon-1">
                        <FaCogs />
                        <span className="custom-tooltip">Engenharia de Software</span>
                      </div>
                      <div className="floating-icon floating-icon-2">
                        <FaDatabase />
                        <span className="custom-tooltip">Banco de Dados</span>
                      </div>
                      <div className="floating-icon floating-icon-3">
                        <FaCloud />
                        <span className="custom-tooltip">Nuvem</span>
                      </div>
                      <div className="floating-icon floating-icon-4">
                        <SiJira />
                        <span className="custom-tooltip">Jira</span>
                      </div>
                      <div className="floating-icon floating-icon-5">
                        <FaDesktop />
                        <span className="custom-tooltip">Aplicações Desktop</span>
                      </div>
                      <div className="floating-icon floating-icon-6">
                        <FaGithub />
                        <span className="custom-tooltip">GitHub</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sobre Mim */}
      <section id="about" className="about-section section-gradient">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <FaUserAstronaut style={{ color: "#fff", verticalAlign: "middle", fontSize: "1.1em" }} />
              Conheça mais
            </span>
            <h2 className="section-title">Sobre Mim</h2>
            <p className="section-subtitle">Desenvolvedor apaixonado por criar soluções que fazem a diferença</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about-content-modern">
                <div className="about-intro">
                  <h3 style={{ display: "inline-flex", alignItems: "center", gap: "1rem" }}>
                    Olá! Eu sou Eduardo
                    <span className="icon-gradient">
                      <FaCode className="icon-gradient-code" />
                    </span>
                  </h3>
                  <p className="intro-text">
                    Desenvolvedor de 21 anos, natural do Paraná, cursando o último ano de Engenharia de Software. Minha
                    jornada na programação começou pela curiosidade de entender como as tecnologias funcionam e como
                    posso criar soluções que façam a diferença na vida das pessoas.
                  </p>
                </div>

                <div className="about-journey">
                  <div className="journey-item">
                    <div className="journey-icon">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="journey-content">
                      <h4>Formação Acadêmica</h4>
                      <p>
                        Sou estudante do último período do curso de Engenharia de Software pela UGV – Centro Universitário, com formação prevista para dezembro de 2025.
                        Durante a graduação, desenvolvi projetos completos aplicando metodologias ágeis, versionamento com Git/GitHub e integração entre frontend e backend.
                        Atuei em projetos acadêmicos e pessoais, focando na criação de soluções reais para empresas e instituições.
                      </p>
                    </div>
                  </div>

                  <div className="journey-item">
                    <div className="journey-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="journey-content">
                      <h4>Trabalho em Equipe</h4>
                      <p>
                        Possuo facilidade para trabalhar em equipe, mantendo boa comunicação e colaboração no dia a dia.
                        Tenho experiência prática em times organizados por metodologias ágeis, sempre contribuindo de forma proativa no desenvolvimento das tarefas.
                        Utilizo Git, GitHub e Jira para manter o fluxo de trabalho organizado e eficiente.
                      </p>
                    </div>
                  </div>

                  <div className="journey-item">
                    <div className="journey-icon">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div className="journey-content">
                      <h4>Filosofia de Trabalho</h4>
                      <p>
                        Adoto uma filosofia de trabalho focada em comprometimento, organização e entrega de soluções funcionais.
                        Busco sempre alinhar qualidade técnica com prazos definidos, mantendo atenção aos detalhes e buscando melhorias contínuas.
                        Valorizo a clareza na comunicação e a colaboração para alcançar resultados consistentes em equipe.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-cta">
                  <div className="cta-content">
                    <h4>Pronto para o próximo desafio</h4>
                    <p>
                      Estou em busca da minha primeira oportunidade como desenvolvedor júnior ou estágio, com foco em atuar de forma colaborativa em projetos reais,
                      contribuindo para o crescimento da equipe e para a entrega de soluções eficientes e bem estruturadas.
                    </p>
                    <div className="cta-buttons">
                      <a href="#contact" className="btn btn-primary">
                        <i className="fas fa-handshake me-2"></i>Vamos conversar
                      </a>
                      <a href="/cv.pdf" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
                        <i className="fas fa-download me-2"></i>Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Habilidades */}
      <section id="skills" className="skills-section section-gradient">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#fff" }} >
            <FaCogs style={{ fontSize: "1.5em" }} />
              Stack Técnica
            </span>
            <h2 className="section-title">Habilidades</h2>
            <p className="section-subtitle">Tecnologias e ferramentas que domino</p>
          </div>
      
          <div className="skills-grid">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="skill-category skill-category-frontend">
                  <div className="skill-header">
                    <div className="skill-icon">
                      <FaCode />
                    </div>
                    <h4>Frontend</h4>
                  </div>
                  <div className="skill-list">
                    {skills.frontend.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
      
              <div className="col-lg-4 col-md-6">
                <div className="skill-category skill-category-backend">
                  <div className="skill-header">
                    <div className="skill-icon">
                      <FaDatabase />
                    </div>
                    <h4>Backend</h4>
                  </div>
                  <div className="skill-list">
                    {skills.backend.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
      
              <div className="col-lg-4 col-md-6">
                <div className="skill-category skill-category-database">
                  <div className="skill-header">
                    <div className="skill-icon">
                      <FaDatabase />
                    </div>
                    <h4>Banco de Dados</h4>
                  </div>
                  <div className="skill-list">
                    {skills.database.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
      
              <div className="col-lg-4 col-md-6">
                <div className="skill-category skill-category-cloud">
                  <div className="skill-header">
                    <div className="skill-icon">
                      <FaCloud />
                    </div>
                      <h4>Serviços em Nuvem</h4>
                  </div>
                  <div className="skill-list">
                    {skills.cloud.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
      
              <div className="col-lg-4 col-md-6">
                <div className="skill-category skill-category-desktop">
                  <div className="skill-header">
                    <div className="skill-icon">
                      <FaDesktop />
                    </div>
                    <h4>Desktop</h4>
                  </div>
                  <div className="skill-list">
                    {skills.desktop.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
      
              <div className="col-lg-4 col-md-6">
                <div className="skill-category skill-category-tools">
                  <div className="skill-header">
                    <div className="skill-icon">
                      <FaTools />
                    </div>
                    <h4>Ferramentas</h4>
                  </div>
                  <div className="skill-list">
                    {skills.tools.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
      
              <div className="col-lg-6 col-md-6">
                <div className="skill-category methodology-category">
                  <div className="skill-header">
                    <div className="skill-icon">
                      <FaCogs />
                    </div>
                    <h4>Metodologias</h4>
                  </div>
                  <div className="skill-list">
                    {skills.methodologies.map((skill, index) => (
                      <span key={index} className="skill-tag methodology-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
      
              <div className="col-lg-6 col-md-6">
                <div className="skill-category learning-category">
                  <div className="skill-header">
                    <div className="skill-icon">
                      <FaCode />
                    </div>
                    <h4>Aprendendo Atualmente</h4>
                  </div>
                  <div className="skill-list">
                    {skills.learning.map((skill, index) => (
                      <span key={index} className="skill-tag learning-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Projetos */}
      <section id="projects" className="projects-section section-gradient">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <FaCode style={{ color: "#fff", verticalAlign: "middle", fontSize: "1.1em" }} />
              Portfólio
            </span>
            <h2 className="section-title">Principais Projetos</h2>
            <p className="section-subtitle">Alguns dos principais projetos que desenvolvi</p>
          </div>

          <div className="projects-grid">
            <div className="row g-4">
              {projects.map((project, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="project-card-modern">
                    <div className="project-image">
                      <img src={project.image || "/placeholder.svg"} alt={project.title} />
                      <div className="project-overlay">
                        <DialogTrigger asChild>
                          <button className="btn btn-primary btn-sm" onClick={() => handleProjectClick(project)}>
                            <FaExternalLinkAlt className="me-1" />
                            Ver Detalhes
                          </button>
                        </DialogTrigger>
                      </div>
                    </div>
                    <div className="project-content">
                      <div className="project-header">
                        <h5 className="project-title">{project.title}</h5>
                        <span className={`project-status status-${project.status.toLowerCase().replace(" ", "-")}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="project-description">{project.description}</p>

                      {project.frontend && (
                        <div className="tech-section">
                          <h6 className="tech-category-title">Frontend</h6>
                          <div className="tech-tags">
                            {project.frontend.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag frontend-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.backend && (
                        <div className="tech-section">
                          <h6 className="tech-category-title">Backend</h6>
                          <div className="tech-tags">
                            {project.backend.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag backend-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.database && (
                        <div className="tech-section">
                          <h6 className="tech-category-title">Database</h6>
                          <div className="tech-tags">
                            {project.database.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag database-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.libraries && (
                        <div className="tech-section">
                          <h6 className="tech-category-title">Bibliotecas</h6>
                          <div className="tech-tags">
                            {project.libraries.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag library-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.integrations && (
                        <div className="tech-section">
                          <h6 className="tech-category-title">APIs e Integrações</h6>
                          <div className="tech-tags">
                            {project.integrations.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag general-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[800px] p-6">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-primary-blue mb-2">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-lg text-text-light">{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-lg mb-4 object-cover"
                  style={{ maxHeight: "300px" }}
                />
                <p className="text-text-dark leading-relaxed mb-4">{selectedProject.fullDescription}</p>

                {(selectedProject.frontend ||
                  selectedProject.backend ||
                  selectedProject.database ||
                  selectedProject.libraries ||
                  selectedProject.technologies) && (
                  <div className="tech-details-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {selectedProject.frontend && (
                      <div>
                        <h6 className="tech-category-title text-text-dark">Frontend</h6>
                        <div className="tech-tags">
                          {selectedProject.frontend.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag frontend-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedProject.backend && (
                      <div>
                        <h6 className="tech-category-title text-text-dark">Backend</h6>
                        <div className="tech-tags">
                          {selectedProject.backend.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag backend-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedProject.database && (
                      <div>
                        <h6 className="tech-category-title text-text-dark">Database</h6>
                        <div className="tech-tags">
                          {selectedProject.database.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag database-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedProject.libraries && (
                      <div>
                        <h6 className="tech-category-title text-text-dark">Bibliotecas</h6>
                        <div className="tech-tags">
                          {selectedProject.libraries.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag library-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedProject.technologies && (
                      <div>
                        <h6 className="tech-category-title text-text-dark">Tecnologias Gerais</h6>
                        <div className="tech-tags">
                          {selectedProject.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag general-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedProject.integrations && (
                      <div>
                        <h6 className="tech-category-title text-text-dark">APIs e Integrações</h6>
                        <div className="tech-tags">
                          {selectedProject.integrations.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag general-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary d-flex align-items-center justify-content-center gap-2 mt-4"
                  >
                    <FaExternalLinkAlt /> Ver Projeto Online
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* 5. Experiência */}
      <section id="experience" className="experience-section section-gradient">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#fff" }}>
              <FaBriefcase style={{ color: "#fff", fontSize: "1.1em", verticalAlign: "middle" }} />
              Trajetória Profissional
            </span>
            <h2 className="section-title">Experiência Profissional</h2>
            <p className="section-subtitle">Minha evolução prática no desenvolvimento de software</p>
          </div>
      
          <div className="timeline">
      
            {/* 2021 - Início nos estudos */}
            <div className="timeline-item timeline-left">
              <div className="timeline-content">
               <div className="timeline-header" style={{ display: "flex", alignItems: "center", gap: "18.7rem" }}>
                <span className="period-badge teste" style={{ background: "#673ab7" }}>2021</span>
                <span className="timeline-icon" style={{ background: "#673ab7" }}>
                  <i className="fas fa-book-open"></i>
                </span>
              </div>
                <h4 className="mb-1" style={{ color: "#673ab7", fontWeight: 700 }}>Início nos Estudos de Programação</h4>
                <span className="company-type" style={{ fontWeight: 600, marginBottom: "2.5rem", display: "block" }}>Cursos Livres</span>
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    HTML5, CSS3, JavaScript
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Páginas estáticas e fundamentos de lógica
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Versionamento com Git
                  </li>
                </ul>
              </div>
            </div>
      
            {/* 2022 - Faculdade */}
            <div className="timeline-item timeline-right">
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-icon" style={{ background: "#3f51b5" }}>
                    <i className="fas fa-graduation-cap"></i>
                  </span>
                  <span className="period-badge" style={{ background: "#3f51b5" }}>Fev/2022 - Dez/2025</span>
                </div>
                <h4 className="mb-1" style={{ color: "#3f51b5", fontWeight: 700 }}>Engenharia de Software</h4>
                <span className="company-type" style={{ fontWeight: 600, marginBottom: "2.5rem", display: "block" }}>Centro Universitário UGV</span>
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Foco em desenvolvimento web e desktop
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Projetos com JavaScript, Node.js, PostgreSQL, Firebase, Google Cloud
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Participação em projetos reais e acadêmicos
                  </li>
                </ul>
              </div>
            </div>
      
            {/* 2024 - Projeto Garra Robótica */}
            <div className="timeline-item timeline-left">
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="period-badge" style={{ background: "#9c27b0" }}>Fev/2024 - Jun/2024</span>
                  <span className="timeline-icon" style={{ background: "#9c27b0" }}>
                    <i className="fas fa-robot"></i>
                  </span>
                </div>
                <h4 className="mb-1" style={{ color: "#9c27b0", fontWeight: 700 }}>Projeto Garra Robótica</h4>
                <span className="company-type" style={{ fontWeight: 600, marginBottom: "2.5rem", display: "block" }}>Disciplina de Robótica</span>
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Construção de garra robótica controlada por microcontrolador
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Desenvolvimento de comandos automatizados e controle de movimento
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Integração entre hardware e software com programação embarcada
                  </li>
                </ul>
              </div>
            </div>
      
            {/* 2024 - Batalha de Robôs */}
            <div className="timeline-item timeline-right">
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-icon" style={{ background: "#e91e63" }}>
                    <i className="fas fa-gamepad"></i>
                  </span>
                  <span className="period-badge" style={{ background: "#e91e63" }}>2024</span>
                </div>
                <h4 className="mb-1" style={{ color: "#e91e63", fontWeight: 700 }}>Projeto Batalha de Robôs</h4>
                <span className="company-type" style={{ fontWeight: 600, marginBottom: "2.5rem", display: "block" }}>Competição Interna</span>
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Construção de robô de combate com sensores de colisão
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Prototipação, testes e combate em arena com outras equipes
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Trabalho em equipe e otimização de desempenho físico e lógico
                  </li>
                </ul>
              </div>
            </div>
      
            {/* 2024 - Projeto TonerTrack */}
            <div className="timeline-item timeline-left">
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="period-badge" style={{ background: "#ff9800" }}>Mar/2025 - Jun/2025</span>
                  <span className="timeline-icon" style={{ background: "#ff9800" }}>
                    <i className="fas fa-laptop-code"></i>
                  </span>
                </div>
                <h4 className="mb-1" style={{ color: "#ff9800", fontWeight: 700 }}>Desenvolvedor Full Stack</h4>
                <span className="company-type" style={{ fontWeight: 600, marginBottom: "2.5rem", display: "block" }}>Projeto TonerTrack</span>
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Sistema de gestão de impressoras escolares
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    PostgreSQL, autenticação e painéis administrativos
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Desenvolvimento individual com foco em escalabilidade
                  </li>
                </ul>
              </div>
            </div>
      
            {/* 2024 - Projeto Thermal Tech */}
            <div className="timeline-item timeline-right">
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-icon" style={{ background: "#4caf50" }}>
                    <i className="fas fa-thermometer-half"></i>
                  </span>
                  <span className="period-badge" style={{ background: "#4caf50" }}>2024</span>
                </div>
                <h4 className="mb-1" style={{ color: "#4caf50", fontWeight: 700 }}>Desenvolvedor IoT</h4>
                <span className="company-type" style={{ fontWeight: 600, marginBottom: "2.5rem", display: "block" }}>Projeto Thermal Tech</span>
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Monitoramento térmico com Electron.js e sensores
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Backend com Node.js e dashboard interativo
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Projeto em equipe de 2 pessoas
                  </li>
                </ul>
              </div>
            </div>
      
            {/* 2024 - FlowTime */}
            <div className="timeline-item timeline-left">
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="period-badge period-full-stack">Out/2024 - Jan/2025</span>
                  <span className="timeline-icon" style={{ background: "var(--primary-blue)" }}>
                    <FaBriefcase color="#fff" />
                  </span>
                </div>
                <h4 className="mb-1" style={{ color: "var(--primary-blue)", fontWeight: 700 }}>Desenvolvedor Full Stack</h4>
                <span className="company-type" style={{ fontWeight: 600, marginBottom: "2.5rem", display: "block" }}>Projeto FlowTime</span>
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Sistema para clínica de podologia com dashboard e relatórios
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Frontend (HTML, CSS, JS), backend com Node.js/Firebase
                  </li>
                  <li className="timeline-topico">
                    <span className="timeline-topico-dot"></span>
                    Desktop com Electron.js, entregue em ambiente real
                  </li>
                </ul>
              </div>
            </div>
      
          </div>
        </div>
      </section>

      {/* 6. Contato */}
      <section id="contact" className="contact-section section-gradient">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#fff" }}>
              <FaPhone style={{ color: "#fff", fontSize: "1.1em", verticalAlign: "middle" }} />
              Vamos conversar
            </span>
            <h2 className="section-title">Entre em Contato</h2>
            <p className="section-subtitle">Estou sempre aberto a novas oportunidades e projetos interessantes</p>
          </div>

          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="contact-info-modern">
                  <div className="contact-intro">
                    <h3>Vamos trabalhar juntos! 🚀</h3>
                    <p>
                      Estou sempre aberto a novas oportunidades, parcerias e projetos inovadores. Se você tem uma ideia interessante ou precisa de um desenvolvedor dedicado para o seu time, vamos conversar!
                    </p>
                  </div>

                  <div className="contact-methods-modern">
                    <a
                      href="mailto:eduardogwagner2003@gmail.com"
                      className="contact-method-modern"
                    >
                      <div className="method-icon">
                        <FaEnvelope />
                      </div>
                      <div className="method-info">
                        <h5>Email</h5>
                        <span>eduardogwagner2003@gmail.com</span>
                      </div>
                      <div className="method-arrow">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/eduardowagner03/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-method-modern"
                    >
                      <div className="method-icon">
                        <FaLinkedin />
                      </div>
                      <div className="method-info">
                        <h5>LinkedIn</h5>
                        <span>/in/eduardogwagner</span>
                      </div>
                      <div className="method-arrow">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </a>

                    <a
                      href="https://github.com/EduardoWagner03/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-method-modern"
                    >
                      <div className="method-icon">
                        <FaGithub />
                      </div>
                      <div className="method-info">
                        <h5>GitHub</h5>
                        <span>/eduardogwagner</span>
                      </div>
                      <div className="method-arrow">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>

                  <div className="contact-availability">
                    <div className="availability-indicator">
                      <div className="status-dot"></div>
                      <span>Disponível para oportunidades</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="contact-form-modern">
                  <h3>Envie uma mensagem</h3>
                  <form className="modern-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Nome:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Eduardo"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="exemplo@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Assunto:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sobre o que deseja falar?"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Mensagem:</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Digite sua mensagem..."
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      <FaEnvelope className="me-2" />
                      Enviar Mensagem
                    </button>
                  </form>
                  <p className="form-privacy">
                    <FaShieldAlt style={{ marginRight: "0.6rem", fontSize: "1.1em", verticalAlign: "middle" }} />
                    Suas informações estão seguras e não serão compartilhadas com terceiros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-minimal enhanced-footer custom-footer">
        <div className="container">
          <div className="footer-content-minimal">
            <div className="row align-items-center justify-content-between flex-nowrap">
              <div className="col-auto d-flex align-items-center gap-3">
                <img
                  src="/images/img.jpeg"
                  alt="Eduardo Wagner"
                  className="footer-avatar"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #fff",
                    boxShadow: "0 2px 12px rgba(30,136,229,0.10)",
                  }}
                />
                <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>
                  Eduardo Wagner &middot; Portfólio {new Date().getFullYear()}
                </span>
              </div>
              <div className="col text-center d-none d-md-block">
                <span className="footer-role" style={{ color: "#b3d8f7", fontSize: "0.95rem", fontWeight: 500 }}>
                  Desenvolvedor Full Stack Júnior &nbsp;|&nbsp; Paraná, Brasil
                </span>
                <div style={{ color: "#b3d8f7", fontSize: "0.90rem" }}>
                  "Transformando ideias em código, código em soluções, soluções em impacto"
                </div>
              </div>
              <div className="col-auto text-end">
                <div style={{ color: "#b3d8f7", fontSize: "0.80rem" }}>
                  &copy; {new Date().getFullYear()} Todos os direitos reservados.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App