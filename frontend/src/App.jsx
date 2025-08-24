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

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

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
                      {t("hello")}
                    </span>
                  </div>
                  <h1 className="hero-name">
                    Eduardo Gregório
                    <br />
                    <span className="hero-surname">Wagner</span>
                  </h1>
                  <h2 className="hero-subtitle hero-subtitle-highlight">
                    {t("heroSubtitle")}
                  </h2>
                  <p className="hero-description">{t("heroDescription")}</p>
                  <div className="hero-buttons">
                    <a
                      href="#projects"
                      className="btn btn-hero-primary btn-lg me-3 smooth-transition"
                    >
                      <i className="fas fa-rocket me-2"></i>
                      {t("seeProjects")}
                    </a>
                    <a
                      href="#contact"
                      className="btn btn-hero-outline btn-lg smooth-transition"
                    >
                      <i className="fas fa-envelope me-2"></i>
                      {t("contactMe")}
                    </a>
                  </div>
                  <div
                    className="hero-stats animate-on-scroll animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="stat-item smooth-transition">
                      <FaCogs className="stat-icon svg-icon-animated" />
                      <span className="stat-label">
                        {t("highImpactProjects")}
                      </span>
                      <span className="stat-desc">{t("highImpactDesc")}</span>
                    </div>
                    <div className="stat-item smooth-transition">
                      <FaTools className="stat-icon svg-icon-animated" />
                      <span className="stat-label">{t("specialty")}</span>
                      <span className="stat-desc">{t("specialtyDesc")}</span>
                    </div>
                    <div className="stat-item smooth-transition">
                      <FaCloud className="stat-icon svg-icon-animated" />
                      <span className="stat-label">{t("results")}</span>
                      <span className="stat-desc">{t("resultsDesc")}</span>
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
                          {t("engineering")}
                        </span>
                      </div>
                      <div className="floating-icon floating-icon-2 svg-icon-animated">
                        <FaDatabase />
                        <span className="custom-tooltip">{t("database")}</span>
                      </div>
                      <div className="floating-icon floating-icon-3 svg-icon-animated">
                        <FaCloud />
                        <span className="custom-tooltip">{t("cloud")}</span>
                      </div>
                      <div className="floating-icon floating-icon-4 svg-icon-animated">
                        <SiJira />
                        <span className="custom-tooltip">Jira</span>
                      </div>
                      <div className="floating-icon floating-icon-5 svg-icon-animated">
                        <FaDesktop />
                        <span className="custom-tooltip">
                          {t("desktopApps")}
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
                {t("aboutBadge")}
              </span>
              <h2 className="section-title">{t("aboutTitle")}</h2>
              <p className="section-subtitle">{t("aboutSubtitle")}</p>
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
                      {t("aboutHello")}
                      <span className="icon-gradient">
                        <FaCode className="icon-gradient-code svg-icon-animated" />
                      </span>
                    </h3>
                    <p className="intro-text">{t("aboutIntroText")}</p>
                  </div>

                  <div className="about-journey">
                    <div className="journey-item animate-on-scroll animate-slide-left">
                      <div className="journey-icon">
                        <i className="fas fa-graduation-cap svg-icon-animated"></i>
                      </div>
                      <div className="journey-content">
                        <h4>{t("aboutAcademicTitle")}</h4>
                        <p>{t("aboutAcademicText")}</p>
                      </div>
                    </div>

                    <div className="journey-item animate-on-scroll animate-slide-right">
                      <div className="journey-icon">
                        <i className="fas fa-users svg-icon-animated"></i>
                      </div>
                      <div className="journey-content">
                        <h4>{t("aboutTeamTitle")}</h4>
                        <p>{t("aboutTeamText")}</p>
                      </div>
                    </div>

                    <div className="journey-item animate-on-scroll animate-slide-left">
                      <div className="journey-icon">
                        <i className="fas fa-lightbulb svg-icon-animated"></i>
                      </div>
                      <div className="journey-content">
                        <h4>{t("aboutPhilosophyTitle")}</h4>
                        <p>{t("aboutPhilosophyText")}</p>
                      </div>
                    </div>
                  </div>

                  <div className="about-cta animate-on-scroll animate-fade-in">
                    <div className="cta-content">
                      <h4>{t("aboutCtaTitle")}</h4>
                      <p>{t("aboutCtaText")}</p>
                      <div className="cta-buttons">
                        <a
                          href="#contact"
                          className="btn btn-primary smooth-transition"
                        >
                          <i className="fas fa-handshake me-2"></i>
                          {t("aboutCtaContactBtn")}
                        </a>
                        <a
                          href="/cv.pdf"
                          className="btn btn-outline-primary smooth-transition"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fas fa-download me-2"></i>
                          {t("aboutCtaDownloadBtn")}
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
                {t("skillsBadge")}
              </span>
              <h2 className="section-title">{t("skillsTitle")}</h2>
              <p className="section-subtitle">{t("skillsSubtitle")}</p>
            </div>

            <div className="skills-grid animate-on-scroll animate-scale-in">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="skill-category skill-category-frontend smooth-transition">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <FaCode className="svg-icon-animated" />
                      </div>
                      <h4>{t("skillsFrontend")}</h4>
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
                      <h4>{t("skillsBackend")}</h4>
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
                      <h4>{t("skillsDatabase")}</h4>
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
                      <h4>{t("skillsCloud")}</h4>
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
                      <h4>{t("skillsDesktop")}</h4>
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
                      <h4>{t("skillsTools")}</h4>
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
                      <h4>{t("skillsMethodologies")}</h4>
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
                      <h4>{t("skillsLearning")}</h4>
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
                {t("projectsBadge")}
              </span>
              <h2 className="section-title">{t("projectsTitle")}</h2>
              <p className="section-subtitle">{t("projectsSubtitle")}</p>
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
                            {t("seeDetails")}
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
                {t("experienceBadge")}
              </span>
              <h2 className="section-title">{t("experienceTitle")}</h2>
              <p className="section-subtitle">{t("experienceSubtitle")}</p>
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
                    {t("expStartTitle")}
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    {t("expStartCompany")}
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expStartTopic1")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expStartTopic2")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expStartTopic3")}
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
                    {t("expCollegeTitle")}
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    {t("expCollegeCompany")}
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expCollegeTopic1")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expCollegeTopic2")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expCollegeTopic3")}
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
                    {t("expEventsTitle")}
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    {t("expEventsCompany")}
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expEventsTopic1")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expEventsTopic2")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expEventsTopic3")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expEventsTopic4")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expEventsTopic5")}
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
                    {t("expRoboticTitle")}
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    {t("expRoboticCompany")}
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expRoboticTopic1")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expRoboticTopic2")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expRoboticTopic3")}
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
                    {t("expBattleTitle")}
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    {t("expBattleCompany")}
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expBattleTopic1")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expBattleTopic2")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expBattleTopic3")}
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
                    {t("expIotTitle")}
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    {t("expIotCompany")}
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expIotTopic1")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expIotTopic2")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expIotTopic3")}
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
                    {t("expFlowTitle")}
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    {t("expFlowCompany")}
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expFlowTopic1")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expFlowTopic2")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expFlowTopic3")}
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
                    {t("expTonerTitle")}
                  </h4>
                  <span
                    className="company-type"
                    style={{
                      fontWeight: 600,
                      marginBottom: "2.5rem",
                      display: "block",
                    }}
                  >
                    {t("expTonerCompany")}
                  </span>
                  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expTonerTopic1")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expTonerTopic2")}
                    </li>
                    <li className="timeline-topico">
                      <span className="timeline-topico-dot"></span>
                      {t("expTonerTopic3")}
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
                {t("contactBadge")}
              </span>
              <h2 className="section-title">{t("contactTitle")}</h2>
              <p className="section-subtitle">{t("contactSubtitle")}</p>
            </div>

            <div className="contact-wrapper">
              <div className="row g-4">
                <div className="col-lg-5">
                  <div className="contact-info-modern animate-on-scroll animate-slide-left">
                    <div className="contact-intro">
                      <h3>{t("contactIntroTitle")}</h3>
                      <p>{t("contactIntroText")}</p>
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
                          <h5>{t("contactEmailTitle")}</h5>
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
                        <span>{t("contactAvailable")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="contact-form-modern animate-on-scroll animate-slide-right">
                    <h3>{t("contactFormTitle")}</h3>
                    <form className="modern-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>{t("contactFormNameLabel")}</label>
                          <input
                            type="text"
                            className="form-control smooth-transition"
                            placeholder={t("contactFormNamePlaceholder")}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>{t("contactFormEmailLabel")}</label>
                          <input
                            type="email"
                            className="form-control smooth-transition"
                            placeholder={t("contactFormEmailPlaceholder")}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>{t("contactFormSubjectLabel")}</label>
                        <input
                          type="text"
                          className="form-control smooth-transition"
                          placeholder={t("contactFormSubjectPlaceholder")}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>{t("contactFormMessageLabel")}</label>
                        <textarea
                          className="form-control smooth-transition"
                          rows="5"
                          placeholder={t("contactFormMessagePlaceholder")}
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 smooth-transition"
                      >
                        <FaEnvelope className="me-2 svg-icon-animated" />
                        {t("contactFormSendBtn")}
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
                      {t("contactFormPrivacy")}
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