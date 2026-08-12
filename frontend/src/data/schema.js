// Dados estruturados schema.org. Vivem em JS, e não soltos no HTML, para que
// o layout injete o mesmo objeto em todas as rotas sem duplicar conteúdo.
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eduardo Gregório Wagner",
  alternateName: "Eduardo Wagner",
  url: "https://eduardowagner.com.br/",
  image: "https://eduardowagner.com.br/images/eduardo-perfil.jpg",
  email: "mailto:eduardogwagner2003@gmail.com",
  jobTitle: "Desenvolvedor Full Stack Pleno",
  description:
    "Bacharel em Engenharia de Software com 4 anos de experiência prática em desenvolvimento Full Stack e foco em Front-end. Sócio-fundador e Engenheiro de Software da StreamDev.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Irineópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  worksFor: {
    "@type": "Organization",
    name: "StreamDev",
    url: "https://streamdev.dev.br/",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "UGV - Centro Universitário",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Google Cloud",
    "Electron.js",
    "Arquitetura SaaS multi-tenant",
    "E-commerce",
  ],
  knowsLanguage: ["pt-BR", "en"],
  sameAs: [
    "https://www.linkedin.com/in/eduardowagner03/",
    "https://github.com/EduardoWagner03",
    "https://streamdev.dev.br/",
  ],
};
