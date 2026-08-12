// Fontes auto-hospedadas (sem requisição a terceiros, melhor LCP e privacidade).
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";

// Único arquivo de estilo do projeto: apenas as diretivas do Tailwind.
import "../tailwind.css";

import { personSchema } from "../data/schema";

// Aplica o tema salvo ANTES da primeira pintura para não haver flash de tela
// branca ao carregar no modo escuro. Precisa ser inline: qualquer script
// externo chegaria tarde demais.
const themeScript = `(function(){try{var s=localStorage.getItem("ew-portfolio-theme");var d=s!=="light";document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

/**
 * Casca compartilhada pelos dois root layouts.
 *
 * Existem dois porque o atributo `lang` do `<html>` precisa mudar por idioma, e
 * um layout único deixaria a página em inglês declarando `pt-BR`, o que engana
 * leitor de tela e buscador. O Next permite root layouts distintos por route
 * group, desde que as rotas não colidam.
 */
export default function BaseLayout({ locale, children }) {
  return (
    <html lang={locale} className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-slate-50 dark:bg-ink-950">
        <noscript>
          Este portfolio precisa de JavaScript habilitado para ser exibido.
        </noscript>
        {children}
      </body>
    </html>
  );
}

export const baseMetadata = {
  metadataBase: new URL("https://eduardowagner.com.br"),
  authors: [{ name: "Eduardo Gregório Wagner" }],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export const baseViewport = {
  themeColor: "#04050A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
