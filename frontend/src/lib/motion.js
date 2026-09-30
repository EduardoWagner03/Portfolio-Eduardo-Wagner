// Variants compartilhados do Framer Motion. Centralizar aqui mantém o ritmo
// das animações consistente entre todas as seções.

export const EASE = [0.22, 1, 0.36, 1];

// Equivalente ao `power4.out` do GSAP: arranca rápido e freia longo. É o que
// dá peso às revelações por máscara; com o EASE padrão elas pareciam macias.
export const EASE_OUT_STRONG = [0.16, 1, 0.3, 1];

// Equivalente ao `back.out`: passa um pouco do ponto e volta.
export const EASE_BACK = [0.34, 1.56, 0.64, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE_OUT_STRONG },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

/** Itens pequenos (chips, bullets) entrando pela esquerda em cascata. */
export const cascadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT_STRONG },
  },
};

/**
 * Revelação por recorte, de cima para baixo. O `round` acompanha o raio dos
 * cartões, senão os cantos aparecem retos durante a animação.
 */
export const clipDown = {
  hidden: { clipPath: "inset(0% 0% 100% 0% round 16px)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0% round 16px)",
    transition: { duration: 1.1, ease: EASE_OUT_STRONG },
    // Depois de aberto, o recorte sairia cortando a sombra e o brilho de
    // hover dos cartões. Some ao fim da animação.
    transitionEnd: { clipPath: "none" },
  },
};

/** Entrada pela direita girando no eixo Y, como uma página virando. */
export const turnIn = {
  hidden: { opacity: 0, x: 90, rotateY: -38, transformPerspective: 1100 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transformPerspective: 1100,
    transition: { duration: 1.1, ease: EASE_OUT_STRONG },
  },
};

/** Cartão deitado para trás que se levanta de baixo, em 3D. */
export const flipUp = {
  hidden: { opacity: 0, y: 80, rotateX: 62, transformPerspective: 1000 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transformPerspective: 1000,
    transition: { duration: 1.1, ease: EASE_OUT_STRONG },
  },
};

/** Selo que entra grande e girado, e assenta com um leve rebote. */
export const pop = {
  hidden: { opacity: 0, scale: 2.2, rotate: -14 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: EASE_BACK },
  },
};

/** Linha divisória crescendo da esquerda. */
export const growX = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: EASE_OUT_STRONG },
  },
};

/** Container que escalona a entrada dos filhos. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

export const VARIANTS = {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scaleIn,
  cascadeLeft,
  clipDown,
  turnIn,
  flipUp,
  pop,
  growX,
};

/** Viewport padrão: dispara uma vez, um pouco antes de entrar na tela. */
export const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -80px 0px" };
