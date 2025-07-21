"use client"

import { useState, useRef } from "react"
import './styles/index.css';
import './styles/Header.css';
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
} from "react-icons/fa"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog"

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
      "Sistema completo de gestão de tempo e produtividade com dashboard interativo, relatórios em PDF e assinatura digital.",
    fullDescription:
      "Desenvolvi o FlowTime, uma plataforma robusta para otimizar a gestão de tempo e produtividade. O sistema inclui um dashboard interativo com gráficos em tempo real, funcionalidade de geração de relatórios em PDF e um módulo de assinatura digital para documentos. Utilizei HTML5, CSS3 e JavaScript (ES6+) no frontend, com EJS para renderização de templates. No backend, Node.js e Express.js garantem a performance, enquanto Firebase Firestore e Storage gerenciam os dados. Bibliotecas como Chart.js, SweetAlert2, html2pdf.js e SignaturePad.js foram integradas para funcionalidades avançadas.",
    frontend: ["HTML5", "CSS3", "JavaScript ES6+", "EJS"],
    backend: ["Node.js", "Express.js"],
    database: ["Firebase Firestore", "Firebase Storage"],
    libraries: ["Chart.js", "SweetAlert2", "html2pdf.js", "SignaturePad.js"],
    status: "Comercializado",
    image: "/placeholder.svg?height=200&width=300",
    link: "#", // Placeholder link
  },
  {
    title: "ThermalTech",
    description: "Sistema desktop para monitoramento térmico industrial com autenticação e dashboard em tempo real.",
    fullDescription:
      "O ThermalTech é um sistema desktop desenvolvido para monitoramento térmico em ambientes industriais. Ele oferece um dashboard em tempo real para visualização de dados, autenticação de usuários via Firebase Authentication e integração com bancos de dados PostgreSQL. A aplicação foi construída com JavaScript, Node.js e Express.js, utilizando Electron.js para a interface desktop. O design é responsivo com Bootstrap, e a visualização de dados é feita com Chart.js. O projeto seguiu metodologias ágeis e utilizou Git para controle de versão.",
    frontend: ["HTML5", "CSS3", "Bootstrap", "Chart.js"],
    backend: ["Node.js", "Express.js"],
    database: ["PostgreSQL", "Firebase Auth"],
    libraries: ["Chart.js", "SweetAlert2", "Electron.js"],
    status: "Concluído",
    image: "/placeholder.svg?height=200&width=300",
    link: "#", // Placeholder link
  },
  {
    title: "Sistema Educacional",
    description:
      "Plataforma para instituições de ensino com gestão de alunos, notas, frequência e relatórios acadêmicos.",
    fullDescription:
      "Este sistema educacional é uma plataforma web completa para gerenciar instituições de ensino. Ele permite a gestão de alunos, registro de notas e frequência, e a geração de relatórios acadêmicos detalhados. Desenvolvido com Node.js e Express.js no backend, utiliza Firebase para armazenamento de dados e EJS para a renderização das páginas. O frontend é estilizado com Bootstrap e inclui gráficos interativos com Chart.js para visualização de desempenho.",
    frontend: ["HTML5", "CSS3", "Bootstrap", "EJS", "Chart.js"],
    backend: ["Node.js", "Express.js"],
    database: ["Firebase"],
    libraries: ["Chart.js"],
    status: "Em desenvolvimento",
    image: "/placeholder.svg?height=200&width=300",
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
                      <FaCode />
                      <span className="custom-tooltip">Código</span>
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
                      <FaTools />
                      <span className="custom-tooltip">Recursos Técnicos</span>
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
            <span className="section-badge">👨‍💻 Conheça mais</span>
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
            <span className="section-badge">
              <FaCogs style={{ marginRight: "0.5rem", verticalAlign: "middle", fontSize: "1.5em" }} />
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
            <span className="section-badge">💼 Portfólio</span>
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

                      {project.technologies && (
                        <div className="tech-section">
                          <h6 className="tech-category-title">Tecnologias</h6>
                          <div className="tech-tags">
                            {project.technologies.map((tech, techIndex) => (
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
            <span className="section-badge">💼 Trajetória</span>
            <h2 className="section-title">Experiência Profissional</h2>
            <p className="section-subtitle">Minha jornada no desenvolvimento de software</p>
          </div>

          <div className="experience-grid">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="experience-card-modern">
                  <div className="experience-header">
                    <div className="experience-company">
                      <h3>Desenvolvedor Full Stack</h3>
                      <span className="company-type">Projetos Freelance & Acadêmicos</span>
                    </div>
                    <div className="experience-period">
                      <span className="period-badge">2021 - Presente</span>
                    </div>
                  </div>

                  <div className="experience-description">
                    <p>
                      Desenvolvimento de sistemas completos para diferentes segmentos, com foco em soluções que atendem
                      necessidades reais de clínicas e instituições de ensino.
                    </p>
                  </div>

                  <div className="experience-achievements">
                    <h4>Principais Realizações</h4>
                    <div className="achievements-grid">
                      <div className="achievement-item">
                        <div className="achievement-icon">
                          <i className="fas fa-clock"></i>
                        </div>
                        <div className="achievement-content">
                          <h5>FlowTime</h5>
                          <p>
                            Sistema de gestão de tempo com dashboard interativo, relatórios em PDF e assinatura digital
                          </p>
                        </div>
                      </div>

                      <div className="achievement-item">
                        <div className="achievement-icon">
                          <i className="fas fa-thermometer-half"></i>
                        </div>
                        <div className="achievement-content">
                          <h5>ThermalTech</h5>
                          <p>Sistema desktop para monitoramento térmico industrial com Electron.js</p>
                        </div>
                      </div>

                      <div className="achievement-item">
                        <div className="achievement-icon">
                          <i className="fas fa-school"></i>
                        </div>
                        <div className="achievement-content">
                          <h5>Sistema Educacional</h5>
                          <p>Plataforma para instituições de ensino com gestão completa de alunos</p>
                        </div>
                      </div>

                      <div className="achievement-item">
                        <div className="achievement-icon">
                          <i className="fas fa-users-cog"></i>
                        </div>
                        <div className="achievement-content">
                          <h5>Liderança de Projetos</h5>
                          <p>Coordenação de equipes usando metodologias ágeis e ferramentas como Jira</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="experience-skills">
                    <h4>Competências Desenvolvidas</h4>
                    <div className="skills-used">
                      <span className="skill-used">Desenvolvimento Full Stack</span>
                      <span className="skill-used">Metodologias Ágeis</span>
                      <span className="skill-used">Git & GitHub</span>
                      <span className="skill-used">Trabalho em Equipe</span>
                      <span className="skill-used">Gestão de Projetos</span>
                      <span className="skill-used">APIs REST</span>
                      <span className="skill-used">WebSockets</span>
                      <span className="skill-used">Banco de Dados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contato */}
      <section id="contact" className="contact-section section-gradient">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-badge">📞 Vamos conversar</span>
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
                      Estou em busca da minha primeira oportunidade como desenvolvedor júnior ou estágio. Se você tem um
                      projeto interessante ou uma vaga disponível, adoraria conversar!
                    </p>
                  </div>

                  <div className="contact-methods-modern">
                    <a href="mailto:eduardogwagner2003@gmail.com" className="contact-method-modern">
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
                      href="https://www.linkedin.com/in/eduardogwagner"
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
                      href="https://github.com/eduardogwagner"
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
                        <label>Nome</label>
                        <input type="text" className="form-control" placeholder="Seu nome completo" required />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="seu@email.com" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Assunto</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sobre o que você gostaria de falar?"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Mensagem</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Conte-me mais sobre sua ideia ou oportunidade..."
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      <FaEnvelope className="me-2" />
                      Enviar Mensagem
                    </button>
                  </form>
                  <p className="form-privacy">
                    <i className="fas fa-shield-alt me-2"></i>
                    Suas informações estão seguras e não serão compartilhadas com terceiros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-minimal">
        <div className="container">
          <div className="footer-content-minimal">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="copyright">© 2025 Eduardo Wagner. Feito com ❤️</p>
              </div>
              <div className="col-md-6">
                <div className="social-links-minimal">
                  <a
                    href="https://github.com/eduardogwagner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-minimal"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eduardogwagner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-minimal"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="mailto:eduardogwagner2003@gmail.com" className="social-link-minimal">
                    <FaEnvelope />
                  </a>
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