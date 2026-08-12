"use client";

import App from "../App";
import { I18nProvider } from "../i18n";
import { ThemeProvider } from "../theme/ThemeProvider";

// Fronteira entre servidor e cliente. Tudo que é importado daqui para baixo
// vira client component automaticamente, então as seções e os componentes de
// UI não precisam declarar "use client" um a um. Elas continuam sendo
// pré-renderizadas no build: o HTML sai pronto, e o React só hidrata depois.
export default function Portfolio({ lang }) {
  return (
    <ThemeProvider>
      <I18nProvider lang={lang}>
        <App />
      </I18nProvider>
    </ThemeProvider>
  );
}
