import React from "react";

/**
 * Plano de fundo global e fixo: grade técnica, blobs de aurora, uma camada de
 * ruído e uma vinheta. Fica atrás de tudo e não intercepta cliques.
 *
 * Performance: os blobs são ESTÁTICOS de propósito. Animar transform em
 * superfícies de ~46rem com blur de 120px obriga o compositor a refazer o
 * desfoque de tela cheia a cada frame — o que travava a rolagem suave das
 * âncoras do menu. Estáticos, eles são pintados uma vez e só. O movimento da
 * página vem do canvas de partículas e das animações de entrada.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-ink-950"
    >
      {/* Grade técnica, esmaecida nas bordas */}
      <div className="absolute inset-0 bg-grid-light bg-grid [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_78%)] dark:bg-grid-dark" />

      {/* Aurora ciano */}
      <div className="absolute -left-[15%] -top-[20%] h-[46rem] w-[46rem] rounded-full bg-flux-400/20 blur-[110px] dark:bg-flux-500/25" />

      {/* Aurora violeta */}
      <div className="absolute -right-[12%] top-[35%] h-[40rem] w-[40rem] rounded-full bg-pulse-400/20 blur-[110px] dark:bg-pulse-600/25" />

      {/* Ruído de filme para tirar o aspecto "plástico" dos gradientes */}
      <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-overlay dark:opacity-[0.05]" />

      {/* Vinheta */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(248,250,252,0.9)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(4,5,10,0.92)_100%)]" />
    </div>
  );
}
