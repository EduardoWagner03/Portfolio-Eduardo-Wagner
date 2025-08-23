"use client";

import React, { useState, useEffect } from "react";
import { FaBriefcase, FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaDatabase, FaTools, FaCloud, FaDesktop, FaCogs, FaRocket, FaUserAstronaut, FaPhone, FaShieldAlt,
} from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { projects, skills } from "./data/projectsData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import Loader from "./components/Loader";
import ScrollAnimations from "./components/ScrollAnimations";
import "../src/translations/i18next";
import { useTranslation } from "react-i18next";
import "./styles/Header.css";
import "./styles/index.css";
import "./styles/dark-mode.css";
import "./styles/media-queries.css";
import "./styles/animations.css";
import "./styles/Popup.css";
import "./styles/scroll-animations.css";
import "./styles/section-backgrounds.css";

function App() {
  const getDefaultLang = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    console.log("Idioma detectado:", browserLang);
    if (browserLang.startsWith("pt")) return "pt-br";
    if (browserLang.startsWith("es")) return "es";
    return "en";
  };

  const [lang, setLang] = useState(getDefaultLang());
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Função para alternar entre pt-br, en e es
  const handleLang = () => {
    if (lang === "pt-br") return setLang("en");
    if (lang === "en") return setLang("es");
    return setLang("pt-br");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  // ✨ PARALLAX EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax-element");

      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.setProperty("--parallax-y", `${yPos}px`);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✨ LOADER
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Adicionar Bootstrap JS se não estiver carregado
    if (!document.querySelector('script[src*="bootstrap"]')) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
      script.integrity =
        "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* ✨ LOADER ANIMADO */}
      <Loader loading={loading} />

      {/* ✨ SCROLL ANIMATIONS */}
      <ScrollAnimations />

      <div
        className={`portfolio ${darkMode ? "dark-mode" : ""} ${
          loading ? "loading" : ""
        }`}
      >
        {/* Header estilo moderno */}
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          lang={lang}
          handleLang={handleLang}
          isNavOpen={isNavOpen}
          toggleNav={toggleNav}
          closeNav={closeNav}
        />

        {/* 1. Home Section com Animações e Parallax */}
        <section id="home" className="hero-section parallax-container">
          <div className="hero-background">
            <div className="hero-shapes parallax-element" data-speed="0.3">
              <div className="shape shape-1 animate-on-scroll animate-scale-in"></div>
              <div
                className="shape shape-2 animate-on-scroll animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="shape shape-3 animate-on-scroll animate-scale-in"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-6">
                <div className="hero-content animate-on-scroll animate-slide-left">
                  <div className="hero-badge">
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                      }}
                    >
                      <FaRocket
                        className="svg-icon-animated"
                        style={{
                          fontSize: "1.3em",
                          color: "#fff",
                          opacity: 0.95,
                        }}
                      />
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
                    Desenvolvedor Full Stack Júnior, com foco em Frontend e
                    experiência em desenvolvimento web e desktop. Atuação com
                    React, Node.js, PostgreSQL, JavaScript, entre outras
                    tecnologias. Comprometido em entregar soluções de qualidade,
                    alinhando desempenho, usabilidade e boas práticas de
                    desenvolvimento.
                  </p>
                  <div className="hero-buttons">
                    <a
                      href="#projects"
                      className="btn btn-hero-primary btn-lg me-3 smooth-transition"
                    >
                      <i className="fas fa-rocket me-2"></i>Ver Projetos
                    </a>
                    <a
                      href="#contact"
                      className="btn btn-hero-outline btn-lg smooth-transition"
                    >
                      <i className="fas fa-envelope me-2"></i>Entre em Contato
                    </a>
                  </div>
                  <div
                    className="hero-stats animate-on-scroll animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="stat-item smooth-transition">
                      <FaCogs className="stat-icon svg-icon-animated" />
                      <span className="stat-label">
                        Projetos de alto impacto
                      </span>
                      <span className="stat-desc">
                        Soluções completas para empresas e instituições
                      </span>
                    </div>
                    <div className="stat-item smooth-transition">
                      <FaTools className="stat-icon svg-icon-animated" />
                      <span className="stat-label">Especialidade</span>
                      <span className="stat-desc">
                        Full Stack & Integrações avançadas
                      </span>
                    </div>
                    <div className="stat-item smooth-transition">
                      <FaCloud className="stat-icon svg-icon-animated" />
                      <span className="stat-label">Resultados</span>
                      <span className="stat-desc">
                        Automação, performance e inovação
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="hero-image animate-on-scroll animate-slide-right parallax-element"
                  data-speed="0.2"
                >
                  <div className="profile-container">
                    <div className="profile-circle">
                      <img
                        src="/images/img.jpeg"
                        alt="Eduardo Wagner"
                        className="profile-img smooth-transition"
                      />
                    </div>
                    <div className="floating-elements">
                      <div className="floating-icon floating-icon-1 svg-icon-animated">
                        <FaCogs />
                        <span className="custom-tooltip">
                          Engenharia de Software
                        </span>
                      </div>
                      <div className="floating-icon floating-icon-2 svg-icon-animated">
                        <FaDatabase />
                        <span className="custom-tooltip">Banco de Dados</span>
                      </div>
                      <div className="floating-icon floating-icon-3 svg-icon-animated">
                        <FaCloud />
                        <span className="custom-tooltip">Nuvem</span>
                      </div>
                      <div className="floating-icon floating-icon-4 svg-icon-animated">
                        <SiJira />
                        <span className="custom-tooltip">Jira</span>
                      </div>
                      <div className="floating-icon floating-icon-5 svg-icon-animated">
                        <FaDesktop />
                        <span className="custom-tooltip">
                          Aplicações Desktop
                        </span>
                      </div>
                      <div className="floating-icon floating-icon-6 svg-icon-animated">
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

        {/* 2. Sobre Mim com Animações */}
        <section
          id="about"
          className="about-section section-gradient parallax-container"
        >
          <div className="container">
            <div className="section-header text-center mb-5 animate-on-scroll animate-fade-in">
              <span
                className="section-badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FaUserAstronaut
                  className="svg-icon-animated"
                  style={{
                    color: "#fff",
                    verticalAlign: "middle",
                    fontSize: "1.1em",
                  }}
                />
                Conheça mais
              </span>
              <h2 className="section-title">Sobre Mim</h2>
              <p className="section-subtitle">
                Desenvolvedor apaixonado por criar soluções que fazem a
                diferença
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className="about-content-modern animate-on-scroll animate-scale-in parallax-element"
                  data-speed="0.1"
                >
                  <div className="about-intro">
                    <h3
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      Olá! Eu sou Eduardo
                      <span className="icon-gradient">
                        <FaCode className="icon-gradient-code svg-icon-animated" />
                      </span>
                    </h3>
                    <p className="intro-text">
                      Desenvolvedor de 21 anos, natural do Paraná, cursando o
                      último ano de Engenharia de Software. Minha jornada na
                      programação começou pela curiosidade de entender como as
                      tecnologias funcionam e como posso criar soluções que
                      façam a diferença na vida das pessoas.
                    </p>
                  </div>

                  <div className="about-journey">
                    <div className="journey-item animate-on-scroll animate-slide-left">
                      <div className="journey-icon">
                        <i className="fas fa-graduation-cap svg-icon-animated"></i>
                      </div>
                      <div className="journey-content">
                        <h4>Formação Acadêmica</h4>
                        <p>
                          Sou estudante do último período do curso de Engenharia
                          de Software pela UGV – Centro Universitário, com
                          formação prevista para dezembro de 2025. Durante a
                          graduação, desenvolvi projetos completos aplicando
                          metodologias ágeis, versionamento com Git/GitHub e
                          integração entre frontend e backend. Atuei em projetos
                          acadêmicos e pessoais, focando na criação de soluções
                          reais para empresas e instituições.
                        </p>
                      </div>
                    </div>

                    <div className="journey-item animate-on-scroll animate-slide-right">
                      <div className="journey-icon">
                        <i className="fas fa-users svg-icon-animated"></i>
                      </div>
                      <div className="journey-content">
                        <h4>Trabalho em Equipe</h4>
                        <p>
                          Possuo facilidade para trabalhar em equipe, mantendo
                          boa comunicação e colaboração no dia a dia. Tenho
                          experiência prática em times organizados por
                          metodologias ágeis, sempre contribuindo de forma
                          proativa no desenvolvimento das tarefas. Utilizo Git,
                          GitHub e Jira para manter o fluxo de trabalho
                          organizado e eficiente.
                        </p>
                      </div>
                    </div>

                    <div className="journey-item animate-on-scroll animate-slide-left">
                      <div className="journey-icon">
                        <i className="fas fa-lightbulb svg-icon-animated"></i>
                      </div>
                      <div className="journey-content">
                        <h4>Filosofia de Trabalho</h4>
                        <p>
                          Adoto uma filosofia de trabalho focada em
                          comprometimento, organização e entrega de soluções
                          funcionais. Busco sempre alinhar qualidade técnica com
                          prazos definidos, mantendo atenção aos detalhes e
                          buscando melhorias contínuas. Valorizo a clareza na
                          comunicação e a colaboração para alcançar resultados
                          consistentes em equipe.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="about-cta animate-on-scroll animate-fade-in">
                    <div className="cta-content">
                      <h4>Pronto para o próximo desafio</h4>
                      <p>
                        Estou em busca da minha primeira oportunidade como
                        desenvolvedor júnior ou estágio, com foco em atuar de
                        forma colaborativa em projetos reais, contribuindo para
                        o crescimento da equipe e para a entrega de soluções
                        eficientes e bem estruturadas.
                      </p>
                      <div className="cta-buttons">
                        <a
                          href="#contact"
                          className="btn btn-primary smooth-transition"
                        >
                          <i className="fas fa-handshake me-2"></i>Vamos
                          conversar
                        </a>
                        <a
                          href="/cv.pdf"
                          className="btn btn-outline-primary smooth-transition"
                          target="_blank"
                          rel="noreferrer"
                        >
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

        {/* 3. Habilidades com Animações */}
        <section
          id="skills"
          className="skills-section section-gradient parallax-container"
        >
          <div className="container">
            <div className="section-header text-center mb-5 animate-on-scroll animate-fade-in">
              <span
                className="section-badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#fff",
                }}
              >
                <FaCogs
                  className="svg-icon-animated"
                  style={{ fontSize: "1.5em" }}
                />
                Stack Técnica
              </span>
              <h2 className="section-title">Habilidades</h2>
              <p className="section-subtitle">
                Tecnologias e ferramentas que domino
              </p>
            </div>

            <div className="skills-grid animate-on-scroll animate-scale-in">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="skill-category skill-category-frontend smooth-transition">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <FaCode className="svg-icon-animated" />
                      </div>
                      <h4>Frontend</h4>
                    </div>
                    <div className="skill-list">
                      {skills.frontend.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag smooth-transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="skill-category skill-category-backend smooth-transition">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <FaDatabase className="svg-icon-animated" />
                      </div>
                      <h4>Backend</h4>
                    </div>
                    <div className="skill-list">
                      {skills.backend.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag smooth-transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="skill-category skill-category-database smooth-transition">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <FaDatabase className="svg-icon-animated" />
                      </div>
                      <h4>Banco de Dados</h4>
                    </div>
                    <div className="skill-list">
                      {skills.database.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag smooth-transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="skill-category skill-category-cloud smooth-transition">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <FaCloud className="svg-icon-animated" />
                      </div>
                      <h4>Serviços em Nuvem</h4>
                    </div>
                    <div className="skill-list">
                      {skills.cloud.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag smooth-transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="skill-category skill-category-desktop smooth-transition">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <FaDesktop className="svg-icon-animated" />
                      </div>
                      <h4>Desktop</h4>
                    </div>
                    <div className="skill-list">
                      {skills.desktop.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag smooth-transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="skill-category skill-category-tools smooth-transition">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <FaTools className="svg-icon-animated" />
                      </div>
                      <h4>Ferramentas</h4>
                    </div>
                    <div className="skill-list">
                      {skills.tools.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag smooth-transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="skill-category methodology-category smooth-transition">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <FaCogs className="svg-icon-animated" />
                      </div>
                      <h4>Metodologias</h4>
                    </div>
                    <div className="skill-list">
                      {skills.methodologies.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag methodology-tag smooth-transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="skill-category learning-category smooth-transition">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <FaCode className="svg-icon-animated" />
                      </div>
                      <h4>Aprendendo Atualmente</h4>
                    </div>
                    <div className="skill-list">
                      {skills.learning.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag learning-tag smooth-transition"
                        >
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

        {/* 4. Projetos com Animações */}
        <section
          id="projects"
          className="projects-section section-gradient parallax-container"
        >
          <div className="container">
            <div className="section-header text-center mb-5 animate-on-scroll animate-fade-in">
              <span
                className="section-badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FaCode
                  className="svg-icon-animated"
                  style={{
                    color: "#fff",
                    verticalAlign: "middle",
                    fontSize: "1.1em",
                  }}
                />
                Portfólio
              </span>
              <h2 className="section-title">Principais Projetos</h2>
              <p className="section-subtitle">
                Alguns dos principais projetos que desenvolvi
              </p>
            </div>
            <div className="projects-grid animate-on-scroll animate-scale-in">
              <div className="row g-4">
                {projects.map((project, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="project-card-modern smooth-transition">
                      <div className="project-image">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                        />
                        <div className="project-overlay">
                          <button
                            className="btn btn-primary btn-sm smooth-transition"
                            onClick={() => handleProjectClick(project)}
                          >
                            <FaExternalLinkAlt className="me-1 svg-icon-animated" />
                            Ver Detalhes
                          </button>
                        </div>
                      </div>
                      <div className="project-content">
                        <div className="project-header">
                          <h5 className="project-title">{project.title}</h5>
                          <span
                            className={`project-status status-${project.status
                              .toLowerCase()
                              .replace(" ", "-")} smooth-transition`}
                          >
                            {project.status}
                          </span>
                        </div>
                        <p className="project-description">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Experiência com Animações */}
        <section
          id="experience"
          className="experience-section section-gradient parallax-container"
        >
          <div className="container">
            <div className="section-header text-center mb-5 animate-on-scroll animate-fade-in">
              <span
                className="section-badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#fff",
                }}
              >
                <FaBriefcase
                  className="svg-icon-animated"
                  style={{
                    color: "#fff",
                    fontSize: "1.1em",
                    verticalAlign: "middle",
                  }}
                />
                Trajetória Profissional
              </span>
              <h2 className="section-title">Experiência Profissional</h2>
              <p className="section-subtitle">
                Minha evolução prática no desenvolvimento de software
              </p>
            </div>

            <div className="timeline">
              {/* 2021 - Início nos estudos - ESQUERDA */}
              <div className="timeline-item timeline-left animate-on-scroll animate-slide-left">
                <div className="timeline-content smooth-transition">
                  <div
                    className="timeline-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "18.7rem",
                    }}
                  >
                    <span
                      className="period-badge teste"
                      style={{ background: "#673ab7" }}
                    >
                      2021
                    </span>
                    <span
                      className="timeline-icon svg-icon-animated"
                      style={{ background: "#673ab7" }}
                    >
                      <i className="fas fa-book-open"></i>
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{ color: "#673ab7", fontWeight: 700 }}
                  >
                    Início nos Estudos de Programação
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    Cursos Livres
                  </span>
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

              {/* 2022 - Faculdade - DIREITA */}
              <div className="timeline-item timeline-right animate-on-scroll animate-slide-right">
                <div className="timeline-content smooth-transition">
                  <div className="timeline-header">
                    <span
                      className="timeline-icon svg-icon-animated"
                      style={{ background: "#3f51b5" }}
                    >
                      <i className="fas fa-graduation-cap"></i>
                    </span>
                    <span
                      className="period-badge"
                      style={{ background: "#3f51b5" }}
                    >
                      Fev/2022 - Dez/2025
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{ color: "#3f51b5", fontWeight: 700 }}
                  >
                    Engenharia de Software
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    Centro Universitário UGV
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      Foco em desenvolvimento web e desktop
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      Projetos com JavaScript, Node.js, PostgreSQL, Firebase,
                      Google Cloud
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      Participação em projetos reais e acadêmicos
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2022-2024 - Eventos Acadêmicos - ESQUERDA */}
              <div className="timeline-item timeline-left animate-on-scroll animate-slide-left">
                <div className="timeline-content smooth-transition">
                  <div
                    className="timeline-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15.5rem",
                    }}
                  >
                    <span
                      className="period-badge"
                      style={{ background: "#5e35b1" }}
                    >
                      2022 - 2024
                    </span>
                    <span
                      className="timeline-icon svg-icon-animated"
                      style={{ background: "#5e35b1" }}
                    >
                      <i className="fas fa-certificate"></i>
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{ color: "#5e35b1", fontWeight: 700 }}
                  >
                    Participação em Eventos Acadêmicos
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    Centro Universitário UGV
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      XVII Encontro de Iniciação Científica 2022 - Ouvinte
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      XVIII Encontro de Iniciação Científica 2023 - Apresentação
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      XIX Encontro de Iniciação Científica 2024 - Ouvinte
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      SEMTEC - Semana de Tecnologia da UGV 2022
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      SEMTEC - Semana de Tecnologia da UGV 2024
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2024 - Projeto Garra Robótica - DIREITA */}
              <div className="timeline-item timeline-right animate-on-scroll animate-slide-right">
                <div className="timeline-content smooth-transition">
                  <div className="timeline-header">
                    <span
                      className="timeline-icon svg-icon-animated"
                      style={{ background: "#9c27b0" }}
                    >
                      <i className="fas fa-robot"></i>
                    </span>
                    <span
                      className="period-badge"
                      style={{ background: "#9c27b0" }}
                    >
                      Fev/2024 - Jun/2024
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{ color: "#9c27b0", fontWeight: 700 }}
                  >
                    Projeto Garra Robótica
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    Disciplina de Robótica
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      Construção de garra robótica controlada por
                      microcontrolador
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      Desenvolvimento de comandos automatizados e controle de
                      movimento
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      Integração entre hardware e software com programação
                      embarcada
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2024 - Batalha de Robôs - ESQUERDA */}
              <div className="timeline-item timeline-left animate-on-scroll animate-slide-left">
                <div className="timeline-content smooth-transition">
                  <div
                    className="timeline-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "18.7rem",
                    }}
                  >
                    <span
                      className="period-badge"
                      style={{ background: "#e91e63" }}
                    >
                      2024
                    </span>
                    <span
                      className="timeline-icon svg-icon-animated"
                      style={{ background: "#e91e63" }}
                    >
                      <i className="fas fa-gamepad"></i>
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{ color: "#e91e63", fontWeight: 700 }}
                  >
                    Projeto Batalha de Robôs
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    Competição Interna
                  </span>
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
                      Trabalho em equipe e otimização de desempenho físico e
                      lógico
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2024 - Projeto Thermal Tech - DIREITA */}
              <div className="timeline-item timeline-right animate-on-scroll animate-slide-right">
                <div className="timeline-content smooth-transition">
                  <div className="timeline-header">
                    <span
                      className="timeline-icon svg-icon-animated"
                      style={{ background: "#4caf50" }}
                    >
                      <i className="fas fa-thermometer-half"></i>
                    </span>
                    <span
                      className="period-badge"
                      style={{ background: "#4caf50" }}
                    >
                      2024
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{ color: "#4caf50", fontWeight: 700 }}
                  >
                    Desenvolvedor IoT
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    Projeto Thermal Tech
                  </span>
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

              {/* 2024 - FlowTime - ESQUERDA */}
              <div className="timeline-item timeline-left animate-on-scroll animate-slide-left">
                <div className="timeline-content smooth-transition">
                  <div
                    className="timeline-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "18.7rem",
                    }}
                  >
                    <span
                      className="period-badge period-full-stack"
                      style={{ background: "var(--primary-blue)" }}
                    >
                      Out/2024 - Jan/2025
                    </span>
                    <span
                      className="timeline-icon svg-icon-animated"
                      style={{ background: "var(--primary-blue)" }}
                    >
                      <FaBriefcase color="#fff" />
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{ color: "var(--primary-blue)", fontWeight: 700 }}
                  >
                    Desenvolvedor Full Stack
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    Projeto FlowTime
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      Sistema para clínica de podologia com dashboard e
                      relatórios
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

              {/* 2025 - Projeto TonerTrack - DIREITA */}
              <div className="timeline-item timeline-right animate-on-scroll animate-slide-right">
                <div className="timeline-content smooth-transition">
                  <div className="timeline-header">
                    <span
                      className="timeline-icon svg-icon-animated"
                      style={{ background: "#ff9800" }}
                    >
                      <i className="fas fa-laptop-code"></i>
                    </span>
                    <span
                      className="period-badge"
                      style={{ background: "#ff9800" }}
                    >
                      Mar/2025 - Jun/2025
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{ color: "#ff9800", fontWeight: 700 }}
                  >
                    Desenvolvedor Full Stack
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    Projeto TonerTrack
                  </span>
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
            </div>
          </div>
        </section>

        {/* 6. Contato com Animações */}
        <section
          id="contact"
          className="contact-section section-gradient parallax-container"
        >
          <div className="container">
            <div className="section-header text-center mb-5 animate-on-scroll animate-fade-in">
              <span
                className="section-badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#fff",
                }}
              >
                <FaPhone
                  className="svg-icon-animated"
                  style={{
                    color: "#fff",
                    fontSize: "1.1em",
                    verticalAlign: "middle",
                  }}
                />
                Vamos conversar
              </span>
              <h2 className="section-title">Entre em Contato</h2>
              <p className="section-subtitle">
                Estou sempre aberto a novas oportunidades e projetos
                interessantes
              </p>
            </div>

            <div className="contact-wrapper">
              <div className="row g-4">
                <div className="col-lg-5">
                  <div className="contact-info-modern animate-on-scroll animate-slide-left">
                    <div className="contact-intro">
                      <h3>Vamos trabalhar juntos! 🚀</h3>
                      <p>
                        Estou sempre aberto a novas oportunidades, parcerias e
                        projetos inovadores. Se você tem uma ideia interessante
                        ou precisa de um desenvolvedor dedicado para o seu time,
                        vamos conversar!
                      </p>
                    </div>

                    <div className="contact-methods-modern">
                      <a
                        href="mailto:eduardogwagner2003@gmail.com"
                        className="contact-method-modern smooth-transition"
                      >
                        <div className="method-icon NoneEmail">
                          <FaEnvelope className="svg-icon-animated" />
                        </div>
                        <div className="method-info">
                          <h5>Email</h5>
                          <span>eduardogwagner2003@gmail.com</span>
                        </div>
                        <div className="method-arrow">
                          <i className="fas fa-arrow-right svg-icon-animated"></i>
                        </div>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/eduardowagner03/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-method-modern smooth-transition"
                      >
                        <div className="method-icon">
                          <FaLinkedin className="svg-icon-animated" />
                        </div>
                        <div className="method-info">
                          <h5>LinkedIn</h5>
                          <span>/in/eduardogwagner</span>
                        </div>
                        <div className="method-arrow">
                          <i className="fas fa-arrow-right svg-icon-animated"></i>
                        </div>
                      </a>

                      <a
                        href="https://github.com/EduardoWagner03/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-method-modern smooth-transition"
                      >
                        <div className="method-icon">
                          <FaGithub className="svg-icon-animated" />
                        </div>
                        <div className="method-info">
                          <h5>GitHub</h5>
                          <span>/eduardogwagner</span>
                        </div>
                        <div className="method-arrow">
                          <i className="fas fa-arrow-right svg-icon-animated"></i>
                        </div>
                      </a>
                    </div>

                    <div
                      className="contact-availability animate-on-scroll animate-fade-in"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <div className="availability-indicator">
                        <div className="status-dot"></div>
                        <span>Disponível para oportunidades</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="contact-form-modern animate-on-scroll animate-slide-right">
                    <h3>Envie uma mensagem</h3>
                    <form className="modern-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>Nome:</label>
                          <input
                            type="text"
                            className="form-control smooth-transition"
                            placeholder="Eduardo"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Email:</label>
                          <input
                            type="email"
                            className="form-control smooth-transition"
                            placeholder="exemplo@email.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Assunto:</label>
                        <input
                          type="text"
                          className="form-control smooth-transition"
                          placeholder="Sobre o que deseja falar?"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Mensagem:</label>
                        <textarea
                          className="form-control smooth-transition"
                          rows="5"
                          placeholder="Digite sua mensagem..."
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 smooth-transition"
                      >
                        <FaEnvelope className="me-2 svg-icon-animated" />
                        Enviar Mensagem
                      </button>
                    </form>
                    <p className="form-privacy">
                      <FaShieldAlt
                        className="svg-icon-animated"
                        style={{
                          marginRight: "0.6rem",
                          fontSize: "1.1em",
                          verticalAlign: "middle",
                        }}
                      />
                      Suas informações estão seguras e não serão compartilhadas
                      com terceiros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal / Iframe: */}
        <ProjectModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedProject={selectedProject}
          handleProjectClick={handleProjectClick}
        />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;