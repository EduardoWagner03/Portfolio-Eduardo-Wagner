import React from "react";
import ReactDOM from "react-dom/client";

// Fontes auto-hospedadas (sem requisição a terceiros, melhor LCP e privacidade).
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";

// Único arquivo de estilo do projeto: apenas as diretivas do Tailwind.
import "./tailwind.css";

import App from "./App";
import { I18nProvider } from "./i18n";
import { ThemeProvider } from "./theme/ThemeProvider";
import reportWebVitals from "./utils/reportWebVitals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
