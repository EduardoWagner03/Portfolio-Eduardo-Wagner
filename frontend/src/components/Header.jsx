import React from "react";
import { FaMoon, FaSun, FaGlobe, FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Header({ darkMode, toggleDarkMode, lang, handleLang, isNavOpen, toggleNav, closeNav,}) {
  const { t } = useTranslation();

  const getLangButtonText = () => {
    if (lang === "pt-br") return "BR";
    if (lang === "en") return "EN";
    return "ES";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top">
      <div className="container">
        <a className="navbar-brand logo-gradient" href="#início" onClick={closeNav} >
          🚀 EW
        </a>

        <button className="navbar-toggler" type="button" onClick={toggleNav} aria-controls="navbarNav" aria-expanded={isNavOpen} aria-label={t("navCloseMenu")}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          {/* Botão X - apenas mobile */}
          <button className="mobile-close-btn d-md-none" onClick={closeNav} aria-label={t("navCloseMenu")} >
            ×
          </button>

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeNav}>
                {t("navHome")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNav}>
                {t("navAbout")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeNav}>
                {t("navSkills")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNav}>
                {t("navProjects")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={closeNav}>
                {t("navExperience")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNav}>
                {t("navContact")}
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            {/* Botões pequenos - mobile */}
            <div className="mobile-small-buttons d-md-none">
              <button className="btn btn-outline-primary position-relative" onClick={toggleDarkMode} onMouseEnter={(e) =>
                  e.currentTarget.classList.add("show-tooltip")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("show-tooltip")
                }
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                <span className="custom-tooltip">
                  {darkMode ? t("modeLight") : t("modeDark")}
                </span>
              </button>

              <button className="btn btn-outline-primary position-relative" onClick={handleLang} onMouseEnter={(e) =>
                  e.currentTarget.classList.add("show-tooltip")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("show-tooltip")
                }
              >
                <FaGlobe /> {getLangButtonText()}
                <span className="custom-tooltip">{t("changeLanguage")}</span>
              </button>
            </div>

            {/* Desktop - todos os botões na mesma linha */}
            <div className="desktop-buttons d-none d-md-flex align-items-center gap-2">
              <button className="btn btn-outline-primary position-relative" onClick={toggleDarkMode} onMouseEnter={(e) =>
                  e.currentTarget.classList.add("show-tooltip")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("show-tooltip")
                }
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                <span className="custom-tooltip">
                  {darkMode ? t("modeLight") : t("modeDark")}
                </span>
              </button>

              <a className="btn btn-primary d-flex align-items-center gap-2 position-relative" href="/cv.pdf" target="_blank" rel="noopener noreferrer" onMouseEnter={(e) =>
                  e.currentTarget.classList.add("show-tooltip")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("show-tooltip")
                }
              >
                <FaDownload /> {t("downloadCV")}
                <span className="custom-tooltip">{t("downloadCVTooltip")}</span>
              </a>

              <button className="btn btn-outline-primary position-relative" onClick={handleLang} onMouseEnter={(e) =>
                  e.currentTarget.classList.add("show-tooltip")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("show-tooltip")
                }
              >
                <FaGlobe /> {getLangButtonText()}
                <span className="custom-tooltip">{t("changeLanguage")}</span>
              </button>
            </div>

            {/* Botão Download CV - embaixo no mobile */}
            <a className="btn btn-primary d-flex d-md-none align-items-center gap-2 position-relative mobile-download-btn" href="/cv.pdf" target="_blank" rel="noopener noreferrer" onMouseEnter={(e) =>
                e.currentTarget.classList.add("show-tooltip")
              }
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove("show-tooltip")
              }
            >
              <FaDownload /> {t("downloadCV")}
              <span className="custom-tooltip">{t("downloadCVTooltip")}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;