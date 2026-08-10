import React from "react";
import { ArrowUpRight, FolderCode, Users } from "lucide-react";
import { cn } from "../../lib/cn";
import { GlassCard, Section, SectionHeading, Tag, T } from "../ui/primitives";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { projects } from "../../data/projectsData";
import { useI18n } from "../../i18n";

/** Chip de status com semântica de cor (verde = entregue, âmbar = em curso). */
function StatusPill({ status, label }) {
  const done = status === "done";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider backdrop-blur-md",
        done
          ? "border-emerald-400/30 bg-emerald-400/15 text-emerald-700 dark:text-emerald-300"
          : "border-amber-400/30 bg-amber-400/15 text-amber-700 dark:text-amber-300"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          done ? "bg-emerald-500" : "bg-amber-500 motion-safe:animate-pulse"
        )}
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
                  <img
                    src={project.cover}
                    alt={copy.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition duration-700 ease-smooth group-hover/card:scale-[1.06]"
                  />
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
                  <div className="absolute left-4 top-4">
                    <StatusPill
                      status={project.status}
                      label={t.projects.status[project.status]}
                    />
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <div className="min-w-0">
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
                      "line-clamp-4 text-pretty text-sm leading-relaxed"
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

                  <div className="mt-6 flex items-center justify-between gap-3 pt-1">
                    <span
                      className={cn(
                        T.faint,
                        "inline-flex items-center gap-1.5 text-xs"
                      )}
                    >
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      {copy.teamSize}
                    </span>

                    <button
                      type="button"
                      onClick={() => onSelect(project)}
                      aria-label={`${t.projects.openProject}: ${copy.title}`}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold",
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
              </GlassCard>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
