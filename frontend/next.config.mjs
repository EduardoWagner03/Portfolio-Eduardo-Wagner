/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estático: o build gera HTML puro, que é o que o Cloudflare Pages
  // serve hoje. Sem runtime de servidor, e o conteúdo passa a existir no HTML
  // entregue, que era o problema do Create React App.
  output: "export",

  // `next/image` precisa de servidor para otimizar. Como as imagens já foram
  // convertidas para WebP na mão, não há o que otimizar em tempo de request.
  images: { unoptimized: true },

  // Gera /en/index.html em vez de /en.html: o Cloudflare Pages resolve os dois,
  // mas com a barra o caminho bate com o canonical e evita redirect extra.
  trailingSlash: true,
};

export default nextConfig;
