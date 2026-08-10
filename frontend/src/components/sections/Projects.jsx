import React from "react";
import {
  ArrowUpRight,
  ExternalLink,
  FolderCode,
  Star,
  Users,
} from "lucide-react";
import { cn } from "../../lib/cn";
import { GlassCard, Section, SectionHeading, Tag, T } from "../ui/primitives";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { projects } from "../../data/projectsData";
import { useI18n } from "../../i18n";

/**
 * Chip de status com semântica de cor:
 * verde = entregue, ciano pulsante = no ar hoje, âmbar = em construção.
 */
const STATUS_STYLES = {
  done: {
    chip: "border-emerald-400/30 bg-emerald-400/15 text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  live: {
    chip: "border-flux-400/35 bg-flux-400/15 text-flux-700 dark:text-flux-200",
    dot: "bg-flux-400 motion-safe:animate-pulse",
  },
  wip: {
    chip: "border-amber-400/30 bg-amber-400/15 text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500 motion-safe:animate-pulse",
  },
};

function StatusPill({ status, label }) {
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.wip;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider backdrop-blur-md",
        style.chip
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-1.5 w-1.5 rounded-full", style.dot)}
      />
      {label}
    </span>
  );
}

export default function Projects({ onSelect }) {
  const { t } = useI18n();

  return (
    <Section id="projects">
      <SectionHeading
        badge={t.projects.badge}
        badgeIcon={FolderCode}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <RevealGroup
        className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        gap={0.1}
      >
        {projects.map((project) => {
          const copy = t.projects.items[project.id];
          const highlights = project.stack.frontend.slice(0, 3);

          return (
            <RevealItem key={project.id} variant="fadeUp" className="min-w-0">
              <GlassCard
                as="article"
                className="flex h-full flex-col overflow-hidden"
              >
                {/* Capa */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {project.cover ? (
                    <img
                      src={project.cover}
                      alt={copy.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition duration-700 ease-smooth group-hover/card:scale-[1.06]"
                    />
                  ) : (
                    // Sem screenshot: capa tipográfica gerada, com a mesma
                    // linguagem visual do resto do site.
                    <div className="relative h-full w-full bg-gradient-to-br from-pulse-600/40 via-ink-900 to-flux-600/30">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-grid-dark bg-grid-sm opacity-60"
                      />
                      {project.logo ? (
                        // Sem screenshot, mas com marca: a logo vira a capa.
                        <span className="absolute left-1/2 top-1/2 inline-flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/95 p-3 shadow-glass ring-1 ring-white/40 transition duration-700 ease-smooth group-hover/card:scale-[1.06]">
                          <img
                            src={project.logo}
                            alt={copy.title}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain"
                          />
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-5xl font-bold text-white/[0.07] sm:text-6xl"
                        >
                          {copy.title}
                        </span>
                      )}
                    </div>
                  )}
                  {/* Duplo scrim: um véu geral + um degradê forte na base, para
                      que o título branco tenha contraste sobre qualquer print. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-ink-950/35"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-transparent"
                  />
                  <div className="absolute inset-x-4 top-4 flex flex-wrap gap-2">
                    <StatusPill
                      status={project.status}
                      label={t.projects.status[project.status]}
                    />
                    {project.featured && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-flux-400/30 bg-flux-400/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-flux-200 backdrop-blur-md">
                        <Star className="h-3 w-3" aria-hidden="true" />
                        {t.projects.featured}
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    {/* Com screenshot, a logo vira selo ao lado do título: na
                        capa ela competiria com a imagem. */}
                    {project.cover && project.logo && (
                      // Fundo claro atrás da marca: várias logos são feitas
                      // para papel branco e desaparecem sobre o véu escuro
                      // que a capa aplica.
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-glass ring-1 ring-white/40">
                        <img
                          src={project.logo}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-display text-xl font-bold text-white">
                        {copy.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-[0.7rem] text-slate-300">
                        {copy.period} · {copy.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corpo */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p
                    className={cn(
                      T.body,
                      "line-clamp-4 text-pretty text-justify hyphens-auto text-sm leading-relaxed"
                    )}
                  >
                    {copy.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {highlights.map((tech) => (
                      <li key={tech}>
                        <Tag accent="neutral">{tech}</Tag>
                      </li>
                    ))}
                    <li>
                      <Tag accent={project.accent}>
                        +
                        {Object.values(project.stack).flat().length -
                          highlights.length}
                      </Tag>
                    </li>
                  </ul>

                  {/* Rodapé do cartão em duas linhas: a informação da equipe
                      em cima e as ações embaixo. Com os três lado a lado, o
                      texto da equipe e os botões se espremiam e quebravam. */}
                  <div className="mt-6 flex flex-col gap-2 pt-1">
                    <span
                      className={cn(
                        T.faint,
                        "inline-flex items-center gap-1.5 text-xs"
                      )}
                    >
                      <Users className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {copy.teamSize}
                    </span>

                    <div className="flex items-center justify-between gap-2">
                      {/* Acesso direto ao site publicado. Precisa de z-10 para
                          ficar acima da camada que torna o cartão inteiro
                          clicável, senão o clique abriria o modal. */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className={cn(
                            "relative z-10 -ml-1 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-xs font-semibold",
                            "text-flux-600 transition duration-300 dark:text-flux-300",
                            "hover:bg-flux-500/10 hover:text-flux-700 dark:hover:text-flux-200",
                            T.ring
                          )}
                        >
                          <ExternalLink
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                          {t.projects.visitSite}
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => onSelect(project)}
                        aria-label={`${t.projects.openProject}: ${copy.title}`}
                        className={cn(
                          "ml-auto inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold",
                          "text-flux-600 transition duration-300 dark:text-flux-300",
                          "hover:bg-flux-500/10 hover:text-flux-700 dark:hover:text-flux-200",
                          T.ring,
                          // Amplia a área clicável para o cartão inteiro.
                          "after:absolute after:inset-0 after:content-['']"
                        )}
                      >
                        {t.projects.viewDetails}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
