import React from 'react';

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="portfolio-loader">
      <div className="loader-content">
        <div className="loader-logo">
          <span className="loader-text">EW</span>
          <div className="loader-orbit">
            <div className="orbit-item orbit-1"></div>
            <div className="orbit-item orbit-2"></div>
            <div className="orbit-item orbit-3"></div>
          </div>
        </div>
        <div className="loader-progress">
          <div className="loader-bar"></div>
        </div>
        <p className="loader-subtitle">Carregando portfólio...</p>
        <div className="loader-tech-stack">
          <span className="tech-item">React</span>
          <span className="tech-item">Node.js</span>
          <span className="tech-item">JavaScript</span>
          <span className="tech-item">CSS3</span>
        </div>
      </div>
      <div className="loader-background">
        <div className="loader-particle"></div>
        <div className="loader-particle"></div>
        <div className="loader-particle"></div>
        <div className="loader-particle"></div>
        <div className="loader-particle"></div>
      </div>
      <div className="loader-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
    </div>
  );
};

export default Loader;