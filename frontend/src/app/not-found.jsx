import BaseLayout, { baseMetadata, baseViewport } from "./BaseLayout";

// Com dois root layouts por route group, uma rota inexistente não pertence a
// nenhum deles: o Next precisa de um not-found na raiz que traga a própria
// casca. Por isso este arquivo monta o BaseLayout em vez de só devolver o
// conteúdo. O idioma é o português, que é o da raiz do site.
export const metadata = {
  ...baseMetadata,
  title: "Página não encontrada | Eduardo Wagner",
  description:
    "A página que você procura não existe ou foi movida. Volte para o portfolio de Eduardo Gregório Wagner.",
  // Página de erro não deve entrar no índice do Google.
  robots: { index: false, follow: true },
};

export const viewport = baseViewport;

const links = [
  { href: "/#projects", label: "Ver projetos" },
  { href: "/#contact", label: "Entrar em contato" },
  { href: "/en/", label: "English version" },
];

export default function NotFound() {
  return (
    <BaseLayout locale="pt-BR">
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
        {/* Mesmo brilho de fundo das seções, em versão estática. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flux-400/10 blur-3xl"
        />

        <div className="relative">
          <p className="font-mono text-sm font-semibold tracking-[0.3em] text-flux-600 dark:text-flux-400">
            ERRO 404
          </p>

          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Esta página não existe
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-slate-600 dark:text-slate-400">
            O endereço pode ter mudado, ou o link que te trouxe até aqui está
            desatualizado. O portfolio inteiro fica em uma única página.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-flux-400 to-pulse-400 px-6 font-semibold text-ink-950 transition duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flux-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-ink-950"
            >
              Voltar ao início
            </a>

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-900/10 bg-white/60 px-5 text-slate-700 backdrop-blur-md transition duration-300 hover:border-flux-500/50 hover:text-flux-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flux-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-flux-400/50 dark:hover:text-flux-300 dark:focus-visible:ring-offset-ink-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </main>
    </BaseLayout>
  );
}
