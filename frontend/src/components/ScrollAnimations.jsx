import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    // Configurações padrão do observador
    const observerOptions = {
      threshold: 0.1, // Reduzido para 10% visível
      rootMargin: '50px 0px -50px 0px' // Margem maior para disparar mais cedo
    };

    // Configurações especiais para a seção About
    const aboutObserverOptions = {
      threshold: 0.05, // Apenas 5% visível
      rootMargin: '100px 0px -30px 0px' // Margem muito maior para disparar bem cedo
    };

    // Observador padrão
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`Elemento ${entry.target.className} entrou na viewport`);
          entry.target.classList.add('animate-in');
          
          // Se for a seção de skills, inicia animação sequencial dos cards
          if (entry.target.classList.contains('skills-categories')) {
            console.log('Skills categories entraram na viewport - aplicando animação sequencial');
            
            const skillCards = entry.target.querySelectorAll('.skill-category');
            
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                console.log(`Animando skill card ${index + 1}`);
                card.classList.add('show-card');
              }, index * 200); // 200ms de delay entre cada card
            });
          }

          // SEÇÃO DE PROJETOS - ANIMAÇÃO INDIVIDUAL POR CARD
          if (entry.target.classList.contains('projects-grid')) {
            console.log('Projects grid entrou na viewport - aplicando animações individuais');
            
            const projectCards = entry.target.querySelectorAll('.col-lg-4');
            
            projectCards.forEach((card, index) => {
              // Aplicar delay individual baseado no índice
              setTimeout(() => {
                console.log(`Animando project card ${index + 1}`);
                card.classList.add('animate-in');
              }, index * 300); // 300ms de delay entre cada card
            });
          }
        }
      });
    }, observerOptions);

    // Observador especial para a seção About
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`About element ${entry.target.className} detectado mais cedo!`);
          entry.target.classList.add('animate-in');
        }
      });
    }, aboutObserverOptions);

    // Identificar e separar elementos da seção about dos demais
    const aboutElements = document.querySelectorAll('.about-section .animate-on-scroll');
    const otherElements = document.querySelectorAll('.animate-on-scroll:not(.about-section .animate-on-scroll)');
    
    console.log(`Observando ${aboutElements.length} elementos da seção About com configurações especiais`);
    console.log(`Observando ${otherElements.length} outros elementos com configurações padrão`);

    // Observar elementos normais com configurações padrão
    otherElements.forEach(element => {
      observer.observe(element);
      
      // Debug: mostrar quais elementos específicos estão sendo observados
      if (element.classList.contains('projects-grid')) {
        console.log('Observando projects-grid com configurações padrão');
      }
      if (element.classList.contains('skills-categories')) {
        console.log('Observando skills-categories com configurações padrão');
      }
    });

    // Observar elementos da seção about com configurações especiais
    aboutElements.forEach(element => {
      aboutObserver.observe(element);
      console.log(`Elemento About observado: ${element.className}`);
    });

    // Cleanup function
    return () => {
      console.log('Desconectando observadores de scroll');
      observer.disconnect();
      aboutObserver.disconnect();
    };
  }, []);

  return null;
};

export default ScrollAnimations;