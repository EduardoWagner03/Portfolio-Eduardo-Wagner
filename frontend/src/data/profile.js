// Dados pessoais e canais de contato — fonte única para header, hero,
// contato e footer.
export const profile = {
  name: "Eduardo Gregório Wagner",
  shortName: "Eduardo Wagner",
  initials: "EW",
  // Retrato usado no hero, onde a imagem aparece grande.
  photo: "/images/eduardo-perfil.jpg",
  // Versão 192x192, já recortada em quadrado a partir do topo, para os
  // avatares pequenos do "Sobre" e do rodapé. Reduzir 912px para 48px no
  // navegador deixava a foto serrilhada.
  avatar: "/images/eduardo-avatar.jpg",
  // Foto de formatura, exibida na seção "Sobre".
  graduationPhoto: "/images/eduardo-formatura.jpg",
  // Logo oficial do curso, usada nos pontos ligados à formação.
  courseLogo: "/images/ugv-engenharia-software.jpg",
  email: "eduardogwagner2003@gmail.com",
  linkedin: {
    url: "https://www.linkedin.com/in/eduardowagner03/",
    handle: "/in/eduardowagner03",
  },
  github: {
    url: "https://github.com/EduardoWagner03",
    handle: "/EduardoWagner03",
  },
  company: {
    name: "StreamDev",
    role: "Engenheiro de Software e Sócio-Fundador",
    since: "2026",
    url: "https://streamdev.dev.br/",
    handle: "streamdev.dev.br",
  },
  // Coloque o arquivo em frontend/public/cv.pdf para habilitar o botão.
  cv: "/cv.pdf",
};
