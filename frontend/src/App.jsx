import React, { useCallback, useState } from "react";
import AuroraBackground from "./components/background/AuroraBackground";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import BackToTop from "./components/layout/BackToTop";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import ProjectModal from "./components/ProjectModal";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <div className="min-h-screen scroll-smooth font-sans antialiased selection:bg-flux-400/30 selection:text-slate-900 dark:selection:text-white">
      <AuroraBackground />
      <ScrollProgress />
      <Header />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects onSelect={setSelectedProject} />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </div>
  );
}
