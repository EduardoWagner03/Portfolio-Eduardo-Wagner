import Portfolio from "../Portfolio";
import pt from "../../i18n/pt";

// A raiz é o português de propósito: essa URL já é o canonical, já está no
// sitemap e já foi registrada no Search Console. Movê-la para /pt jogaria fora
// esse histórico.
export const metadata = {
  title: pt.meta.title,
  description: pt.meta.description,
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      en: "/en/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Eduardo G. Wagner",
    locale: "pt_BR",
    title: pt.meta.title,
    description:
      "Desenvolvedor Full Stack Pleno e sócio-fundador da StreamDev. React, Next.js, TypeScript, Node.js, PostgreSQL, Supabase e Google Cloud.",
    images: [
      {
        url: "/images/eduardo-perfil.jpg",
        alt: "Eduardo Gregório Wagner, Desenvolvedor Full Stack Pleno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pt.meta.title,
    description:
      "Desenvolvedor Full Stack Pleno e sócio-fundador da StreamDev. React, Next.js, TypeScript, Node.js, PostgreSQL, Supabase e Google Cloud.",
    images: ["/images/eduardo-perfil.jpg"],
  },
};

export default function Page() {
  return <Portfolio lang="pt" />;
}
