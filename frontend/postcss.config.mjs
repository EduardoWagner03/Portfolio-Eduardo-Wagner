// O craco configurava o PostCSS por baixo dos panos. Com o Next, o arquivo
// precisa existir de verdade, senão as diretivas @tailwind chegam cruas ao
// bundle e o site sai sem estilo nenhum.
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
