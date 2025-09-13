import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Aumentei para 20% para detectar melhor
      rootMargin: '0px 0px -100px 0px' // Ajustei para disparar um pouco antes
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Se for a seção de skills, inicia animação sequencial dos cards
          if (entry.target.classList.contains('skills-categories')) {
            console.log('Skills categories entraram na viewport');
            
            const skillCards = entry.target.querySelectorAll('.skill-category');
            
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('show-card');
              }, index * 200);
            });
          }

          // SEÇÃO DE PROJETOS - ANIMAÇÃO INDIVIDUAL POR CARD
          if (entry.target.classList.contains('projects-grid')) {
            console.log('Projects grid entrou na viewport - aplicando animações');
            
            const projectCards = entry.target.querySelectorAll('.col-lg-4');
            
            projectCards.forEach((card, index) => {
              // Aplicar delay individual baseado no índice
              setTimeout(() => {
                console.log(`Animando card ${index + 1}`);
                card.classList.add('animate-in');
              }, index * 300); // 300ms de delay entre cada card
            });
          }
        }
      });
    }, observerOptions);

    // Observar elementos com animação
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    console.log(`Observando ${animatedElements.length} elementos`);
    
    animatedElements.forEach(el => {
      observer.observe(el);
      
      // Debug: mostrar quais elementos estão sendo observados
      if (el.classList.contains('projects-grid')) {
        console.log('Observando projects-grid');
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollAnimations;