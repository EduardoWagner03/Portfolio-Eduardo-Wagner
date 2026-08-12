"use client";

import React, { createContext, useContext, useMemo } from "react";
import pt from "./pt";
import en from "./en";

const DICTIONARIES = { pt, en };

const I18nContext = createContext(null);

/**
 * O idioma agora é a rota, não estado: `/` é português e `/en/` é inglês.
 *
 * Isso é o que torna a versão em inglês indexável, que era o objetivo. Como
 * consequência, o `localStorage` que guardava a preferência saiu: reescrever o
 * idioma no cliente faria a página exibir um conteúdo diferente do que o
 * buscador leu na URL, que é exatamente o que quebra o hreflang.
 */
export function I18nProvider({ lang, children }) {
  const value = useMemo(
    () => ({
      lang,
      t: DICTIONARIES[lang],
      // Destino do seletor de idioma. É um href, e não uma função de troca,
      // porque o seletor precisa ser um link rastreável: é assim que o Google
      // descobre a outra versão do site.
      otherLangHref: lang === "pt" ? "/en/" : "/",
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n precisa estar dentro de I18nProvider");
  return context;
}
