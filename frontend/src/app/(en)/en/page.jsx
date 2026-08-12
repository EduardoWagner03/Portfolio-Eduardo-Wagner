import Portfolio from "../../Portfolio";
import en from "../../../i18n/en";

// A versão em inglês ganha URL própria: sem isso o Google não tem como
// indexá-la, que era o item 6 da lista de pendências do portfolio.
export const metadata = {
  title: en.meta.title,
  description: en.meta.description,
  alternates: {
    canonical: "/en/",
    languages: {
      "pt-BR": "/",
      en: "/en/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/",
    siteName: "Eduardo G. Wagner",
    locale: "en_US",
    title: en.meta.title,
    description: en.meta.description,
    images: [
      {
        url: "/images/eduardo-perfil.jpg",
        alt: "Eduardo Gregório Wagner, Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: en.meta.title,
    description: en.meta.description,
    images: ["/images/eduardo-perfil.jpg"],
  },
};

export default function EnPage() {
  return <Portfolio lang="en" />;
}
