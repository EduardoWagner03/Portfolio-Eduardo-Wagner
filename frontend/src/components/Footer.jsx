import React from 'react';

function Footer() {
  return (
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
              <span
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                Eduardo Wagner &middot; Portfólio {new Date().getFullYear()}
              </span>
            </div>
            <div className="col text-center d-none d-md-block">
              <span
                className="footer-role"
                style={{
                  color: "#b3d8f7",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
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
  );
}

export default Footer;