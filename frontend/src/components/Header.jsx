import React from "react";
import { FaMoon, FaSun, FaGlobe, FaDownload } from "react-icons/fa";

function Header({
  darkMode,
  toggleDarkMode,
  lang,
  handleLang,
  isNavOpen,
  toggleNav,
  closeNav,
}) {
  // Função para mostrar o texto correto do botão de idioma
  const getLangButtonText = () => {
    if (lang === "pt-br") return "BR";
    if (lang === "en") return "EN";
    return "ES";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top">
      <div className="container">
        <a
          className="navbar-brand logo-gradient"
          href="#home"
          onClick={closeNav}
        >
          🚀 EW
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          {/* Botão X - apenas mobile */}
          <button
            className="mobile-close-btn d-md-none"
            onClick={closeNav}
            aria-label="Fechar menu"
          >
            ×
          </button>

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeNav}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNav}>
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeNav}>
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNav}>
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={closeNav}>
                Experiência
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNav}>
                Contato
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            {/* Botões pequenos - mobile */}
            <div className="mobile-small-buttons d-md-none">
              <button
                className="btn btn-outline-primary position-relative"
                onClick={toggleDarkMode}
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("show-tooltip")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("show-tooltip")
                }
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                <span className="custom-tooltip">
                  {darkMode ? "Modo claro" : "Modo escuro"}
                </span>
              </button>

              <button
                className="btn btn-outline-primary position-relative"
                onClick={handleLang}
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("show-tooltip")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("show-tooltip")
                }
              >
                <FaGlobe /> {getLangButtonText()}
                <span className="custom-tooltip">Mudar idioma</span>
              </button>
            </div>

            {/* Desktop - todos os botões na mesma linha */}
            <div className="desktop-buttons d-none d-md-flex align-items-center gap-2">
              <button
                className="btn btn-outline-primary position-relative"
                onClick={toggleDarkMode}
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("show-tooltip")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("show-tooltip")
                }
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                <span className="custom-tooltip">
                  {darkMode ? "Modo claro" : "Modo escuro"}
                </span>
              </button>

              <a
                className="btn btn-primary d-flex align-items-center gap-2 position-relative"
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("show-tooltip")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("show-tooltip")
                }
              >
                <FaDownload /> Download CV
                <span className="custom-tooltip">Baixar currículo</span>
              </a>

              <button
                className="btn btn-outline-primary position-relative"
                onClick={handleLang}
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("show-tooltip")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("show-tooltip")
                }
              >
                <FaGlobe /> {getLangButtonText()}
                <span className="custom-tooltip">Mudar idioma</span>
              </button>
            </div>

            {/* Botão Download CV - embaixo no mobile */}
            <a
              className="btn btn-primary d-flex d-md-none align-items-center gap-2 position-relative mobile-download-btn"
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) =>
                e.currentTarget.classList.add("show-tooltip")
              }
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove("show-tooltip")
              }
            >
              <FaDownload /> Download CV
              <span className="custom-tooltip">Baixar currículo</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;