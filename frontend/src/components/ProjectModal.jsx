import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaUsers,
} from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "./ui/dialog";

function ProjectModal({
  isModalOpen,
  setIsModalOpen,
  selectedProject,
  handleProjectClick,
}) {
  
  // ✅ MOVER A FUNÇÃO handleImageClick PARA DENTRO DO COMPONENTE
  const handleImageClick = (imageSrc, imageTitle) => {
    // Calcular as dimensões da tela
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;

    // Definir dimensões da janela (responsivo)
    const windowWidth = Math.min(1400, screenWidth * 0.9);
    const windowHeight = Math.min(900, screenHeight * 0.9);

    // Calcular posição centralizada
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    // CSS organizado do iframe.css
    const iframeCss = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
  
      html, body {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: linear-gradient(135deg, #f0f8ff 0%, #e3f2fd 100%);
      }
  
      .image-viewer-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
      }
  
      .image-viewer-header {
        background: linear-gradient(135deg, #1565c0 0%, #42a5f5 100%);
        color: white;
        padding: 1rem 2rem;
        text-align: center;
        box-shadow: 0 4px 20px rgba(21, 101, 192, 0.3);
        z-index: 10;
        position: relative;
      }
  
      .image-viewer-header h1 {
        margin: 0;
        font-size: 1.8rem;
        font-weight: 700;
        text-shadow: 0 2px 8px rgba(0,0,0,0.2);
      }
  
      .image-viewer-body {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background: linear-gradient(135deg, #4a6b8a 0%, #5c7a9a 50%, #607fa9 100%);
        position: relative;
        overflow: hidden;
      }
  
      .image-viewer-wrapper {
        max-width: 90%;
        max-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(30, 136, 229, 0.25);
        background: linear-gradient(135deg, #607fa9 0%, #395e7a 50%, #000102 100%);
        padding: 15px;
      }
  
      .image-viewer-img {
        max-width: 100%;
        max-height: 45rem;
        width: auto;
        height: auto;
        border-radius: 8px;
        object-fit: contain;
        transition: all 0.8s cubic-bezier(0.45, 0.56, 0.55, 0.99);
        display: block;
        cursor: pointer;
        transform-origin: center center;
        filter: brightness(1) contrast(1) saturate(1);
      }

      .image-viewer-close-btn {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        color: white;
        font-size: 1.6rem;
        cursor: pointer;
        box-shadow: 0 8px 25px rgba(229, 62, 62, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
      }
  
      .image-viewer-close-btn:hover {
        background: linear-gradient(135deg, #c53030 0%, #9b2c2c 100%);
        transform: scale(1.1);
        box-shadow: 0 12px 35px rgba(229, 62, 62, 0.5);
      }
  
      .image-viewer-close-btn:active {
        transform: scale(0.95);
      }
  
      .image-viewer-loading {
        color: #1565c0;
        font-size: 18px;
        text-align: center;
        padding: 3rem;
        font-weight: 500;
      }
  
      .image-viewer-footer-info {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        color: #1565c0;
        font-size: 0.85rem;
        text-align: center;
        opacity: 0.8;
        background: rgba(255, 255, 255, 0.9);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(30, 136, 229, 0.1);
      }
  
      @media (min-width: 1200px) {
        .image-viewer-header h1 {
          font-size: 2.2rem;
        }
        .image-viewer-body {
          padding: 30px;
        }
        .image-viewer-wrapper {
          padding: 25px;
        }
      }
  
      @media (max-width: 768px) {
        .image-viewer-header {
          padding: 0.8rem 1.5rem;
        }
        .image-viewer-header h1 {
          font-size: 1.4rem;
        }
        .image-viewer-body {
          padding: 15px;
        }
        .image-viewer-close-btn {
          width: 45px;
          height: 45px;
          font-size: 1.4rem;
        }
      }
  
      :fullscreen .image-viewer-container, :-webkit-full-screen .image-viewer-container, :-moz-full-screen .image-viewer-container {
        width: 100vw;
        height: 100vh;
      }
    `;

    // Criar uma nova janela centralizada
    const newWindow = window.open(
      "",
      "_blank",
      `width=${windowWidth},height=${windowHeight},left=${left},top=${top},scrollbars=no,resizable=yes,toolbar=no,menubar=no,location=no,status=no`
    );

    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${imageTitle}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500;600;700&display=swap" rel="stylesheet">
          <style>
            ${iframeCss}
          </style>
        </head>
        <body>
          <div class="image-viewer-container">
            <button class="image-viewer-close-btn" onclick="window.close()" title="Fechar janela">&times;</button>
            
            <div class="image-viewer-header">
              <h1>${imageTitle}</h1>
            </div>
            
            <div class="image-viewer-body">
              <div class="image-viewer-wrapper">
                <img src="${imageSrc}" alt="${imageTitle}" class="image-viewer-img"
                     onerror="this.parentElement.innerHTML='<div class=image-viewer-loading>❌ Erro ao carregar imagem</div>'"
                     onload="this.style.opacity=1" style="opacity:0;transition:opacity 0.5s">
              </div>
              
              <div class="image-viewer-footer-info">
                ESC para fechar • F11 para tela cheia
              </div>
            </div>
          </div>
          
          <script>
            window.focus();
            
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape') {
                window.close();
              }
              if (e.key === 'F11') {
                e.preventDefault();
                if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen();
                } else {
                  document.exitFullscreen();
                }
              }
            });
            
            window.addEventListener('resize', function() {
              if (!document.fullscreenElement) {
                const screenWidth = window.screen.availWidth;
                const screenHeight = window.screen.availHeight;
                const windowWidth = window.outerWidth;
                const windowHeight = window.outerHeight;
                const left = (screenWidth - windowWidth) / 2;
                const top = (screenHeight - windowHeight) / 2;
                window.moveTo(left, top);
              }
            });
            
            document.addEventListener('fullscreenchange', function() {
              const container = document.querySelector('.image-viewer-container');
              if (document.fullscreenElement) {
                container.style.width = '100vw';
                container.style.height = '100vh';
              }
            });
          </script>
        </body>
        </html>
      `);
      newWindow.document.close();
      newWindow.focus();
    } else {
      alert(
        "⚠️ Popups estão bloqueados!\n\nPor favor, permita popups para este site e tente novamente."
      );
    }
  };

  return (
    <>
      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="project-modal-content">
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Fechar"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </button>
          {selectedProject && (
            <>
              <div className="project-modal-header">
                <h2 className="project-modal-title">{selectedProject.title}</h2>
                {selectedProject.subtitulo && (
                  <div className="project-status-badge">
                    {selectedProject.subtitulo}
                  </div>
                )}
              </div>

              <DialogDescription>
                <div className="project-modal-main-row">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="project-modal-image"
                  />
                  <div className="project-modal-summary">
                    {selectedProject.historia}
                  </div>
                </div>
              </DialogDescription>

              {/* Resto do código permanece igual... */}
              {/* Minhas Responsabilidades */}
              {selectedProject.minhasResponsabilidades && (
                <div className="project-responsibilities">
                  <h4 className="project-responsibilities-title">
                    🎯 Minhas Responsabilidades no Projeto
                  </h4>
                  <div className="project-responsibilities-container">
                    <div className="project-responsibilities-bg-decoration"></div>
                    <div className="project-responsibilities-content">
                      {selectedProject.minhasResponsabilidades.map(
                        (resp, idx) => (
                          <div
                            key={idx}
                            className="project-responsibility-item"
                          >
                            <span className="project-responsibility-emoji">
                              ✨
                            </span>
                            {resp}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Equipe do Projeto */}
              {selectedProject.equipe && (
                <div className="project-team">
                  <h4 className="project-team-title">
                    <FaUsers
                      style={{ marginRight: "0.5rem", color: "#1e88e5" }}
                    />
                    Equipe do Projeto
                  </h4>
                  <div className="project-team-grid">
                    {selectedProject.equipe.map((membro, idx) => {
                      // Definir redes sociais para cada membro
                      const redesSociais = {
                        "Eduardo Wagner": {
                          github: "https://github.com/EduardoWagner03",
                          linkedin:
                            "https://www.linkedin.com/in/eduardowagner03/",
                        },
                        "Victor Bueno": {
                          github: "https://github.com/victorbueno920",
                          linkedin:
                            "https://www.linkedin.com/in/victor-bueno-365461288/",
                        },
                        "Lucas Ulbrich": {
                          github: "https://github.com/lucasulbrich",
                          linkedin:
                            "https://www.linkedin.com/in/lucas-ulbrich/",
                        },
                      };

                      const redes = redesSociais[membro.nome] || {
                        github: "#",
                        linkedin: "#",
                      };

                      return (
                        <div key={idx} className="project-team-member">
                          {/* Avatar placeholder */}
                          <div className="project-team-avatar">
                            {membro.nome
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>

                          <h6 className="project-team-member-name">
                            {membro.nome}
                          </h6>

                          <div className="project-team-member-role">
                            {membro.papel}
                          </div>

                          <div className="project-team-member-responsibilities">
                            {membro.responsabilidades}
                          </div>

                          {/* Redes Sociais */}
                          <div className="project-team-social-links">
                            <a
                              href={redes.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-team-social-link project-team-github"
                            >
                              <FaGithub />
                            </a>

                            <a
                              href={redes.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-team-social-link project-team-linkedin"
                            >
                              <FaLinkedin />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Integração IoT (só para ThermalTech) */}
              {selectedProject.integracaoIoT && (
                <div className="iot-integration">
                  <h4 className="iot-integration-title">
                    🌐 Integração IoT Desenvolvida pelo Victor
                  </h4>
                  <div className="iot-integration-container">
                    <div className="iot-integration-bg-decoration"></div>
                    <div className="iot-integration-content">
                      {selectedProject.integracaoIoT.map((feature, idx) => (
                        <div key={idx} className="iot-integration-item">
                          <span className="iot-integration-emoji">🔧</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Funcionalidades do Projeto */}
              <div className="project-features">
                {selectedProject.funcionalidades &&
                  selectedProject.funcionalidades.map((func, idx) => (
                    <div key={idx} className="feature-row">
                      <img
                        src={func.imagem}
                        alt={func.titulo}
                        className="feature-img"
                        onClick={() =>
                          handleImageClick(func.imagem, func.titulo)
                        }
                      />
                      <div className="feature-content">
                        <h6 className="feature-title">{func.titulo}</h6>
                        <p className="feature-desc">{func.descricao}</p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Cards de tecnologias */}
              <div className="tech-details-grid">
                {(() => {
                  const categories = [
                    { key: "frontend", label: "Frontend", tag: "frontend-tag" },
                    { key: "backend", label: "Backend", tag: "backend-tag" },
                    { key: "database", label: "Database", tag: "database-tag" },
                    {
                      key: "libraries",
                      label: "Bibliotecas",
                      tag: "library-tag",
                    },
                    {
                      key: "integrations",
                      label: "APIs e Integrações",
                      tag: "general-tag",
                    },
                  ];
                  return categories.map(({ key, label, tag }) =>
                    selectedProject[key] && selectedProject[key].length > 0 ? (
                      <div className="tech-details-card" key={key}>
                        <h6 className="tech-category-title">{label}</h6>
                        <div className="tech-tags">
                          {selectedProject[key].map((tech, idx) => (
                            <span key={idx} className={`tech-tag ${tag}`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="tech-details-card empty-card" key={key} />
                    )
                  );
                })()}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProjectModal;