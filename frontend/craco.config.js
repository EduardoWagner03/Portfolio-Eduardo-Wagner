// O CRA 5 roda o postcss-loader com `config: false`, então um postcss.config.js
// na raiz é ignorado. E a API `style.postcss` do CRACO não alcança o formato
// `postcssOptions.plugins` usado pelo CRA 5 — por isso injetamos o Tailwind
// direto em cada instância do postcss-loader do webpack.
function injectTailwind(rules, found) {
  rules.forEach((rule) => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach((use) => {
        const loader = typeof use === "string" ? use : use && use.loader;
        if (!loader || !loader.includes("postcss-loader")) return;
        const options = (use.options = use.options || {});
        const postcssOptions = (options.postcssOptions =
          options.postcssOptions || {});
        const plugins = postcssOptions.plugins || [];
        postcssOptions.plugins = [require("tailwindcss"), ...plugins];
        found.count += 1;
      });
    }
    if (rule.oneOf) injectTailwind(rule.oneOf, found);
    if (rule.rules) injectTailwind(rule.rules, found);
  });
}

const path = require("path");

module.exports = {
  webpack: {
    // O webpack do CRA não lê `paths` do jsconfig.json, então o alias `@/`
    // precisa ser declarado aqui para valer também no build — do contrário
    // funcionaria só no editor e quebraria ao compilar.
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      const found = { count: 0 };
      injectTailwind(webpackConfig.module.rules, found);
      if (found.count === 0) {
        throw new Error(
          "craco.config.js: nenhum postcss-loader encontrado — o Tailwind não seria compilado."
        );
      }
      return webpackConfig;
    },
  },
};
