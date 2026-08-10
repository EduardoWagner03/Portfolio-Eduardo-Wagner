import React, { useCallback, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Expand,
  ExternalLink,
  Layers,
  Radio,
  Target,
  Users,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { cn } from "../lib/cn";
import { GlassCard, Tag, T } from "./ui/primitives";
import Lightbox from "./ui/Lightbox";
import { teamSocials } from "../data/projectsData";
import { useI18n } from "../i18n";
import { useEscapeKey, useLockBodyScroll } from "../lib/hooks";

const STACK_KEYS = [
  "frontend",
  "backend",
  "database",
  "libraries",
  "integrations",
];

/** Cabeçalho de bloco dentro do modal. */
function Block({ icon: Icon, title, children, className }) {
  return (
    <section className={cn("mt-10 first:mt-0", className)}>
      <h3 className="flex items-center gap-2.5 font-display text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
        <Icon
          className="h-[1.15rem] w-[1.15rem] text-flux-500 dark:text-flux-400"
          aria-hidden="true"
        />
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ProjectModal({ project, onClose }) {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const scrollRef = useRef(null);

  const open = Boolean(project);
  useLockBodyScroll(open);
  useEscapeKey(open && lightboxIndex === null, onClose);

  const copy = project ? t.projects.items[project.id] : null;

  const galleryImages = useMemo(() => {
    if (!project || !copy) return [];
    return project.gallery.map((src, index) => ({
      src,
      title: copy.features[index]?.title ?? copy.title,
    }));
  }, [project, copy]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {open && copy && (
            <motion.div
              className="fixed inset-0 z-[70] overflow-y-auto overscroll-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Fundo clicável */}
              <button
                type="button"
                aria-label={t.projects.modal.close}
                onClick={onClose}
                className="fixed inset-0 h-full w-full cursor-default bg-ink-950/80 backdrop-blur-md"
              />

              <div className="relative flex min-h-full items-start justify-center p-3 sm:p-6 lg:p-10">
                <motion.div
                  ref={scrollRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="project-modal-title"
                  initial={reduce ? false : { opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "relative w-full max-w-5xl overflow-hidden rounded-3xl",
                    T.glass,
                    "bg-white/85 shadow-glass dark:bg-ink-900/85"
                  )}
                >
                  {/* ---------------------------------------- Capa do modal */}
                  <div className="relative aspect-[21/9] max-h-[19rem] w-full overflow-hidden">
                    {project.cover ? (
                      <img
                        src={project.cover}
                        alt={copy.title}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="relative h-full w-full bg-gradient-to-br from-pulse-600/40 via-ink-900 to-flux-600/30">
                        <span
                          aria-hidden="true"
                          className="block h-full w-full bg-grid-dark bg-grid-sm opacity-60"
                        />
                        {project.logo && (
                          <span className="absolute left-1/2 top-1/2 inline-flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/95 p-3 shadow-glass ring-1 ring-white/40">
                            <img
                              src={project.logo}
                              alt=""
                              className="h-full w-full object-contain"
                            />
                          </span>
                        )}
                      </div>
                    )}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-white/40 dark:bg-ink-950/45"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/20 dark:from-ink-900 dark:via-ink-900/85 dark:to-ink-900/20"
                    />

                    <button
                      type="button"
                      onClick={onClose}
                      aria-label={t.projects.modal.close}
                      className={cn(
                        "absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl",
                        "border border-white/20 bg-ink-950/50 text-white backdrop-blur-md",
                        "transition duration-300 hover:border-rose-400/60 hover:text-rose-300",
                        T.ring
                      )}
                    >
                      <X className="h-5 w-5" />
                    </button>

                    <div className="absolute inset-x-5 bottom-4 flex items-end gap-4 sm:inset-x-8">
                      {project.cover && project.logo && (
                        <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/95 p-2 shadow-glass ring-1 ring-white/40">
                          <img
                            src={project.logo}
                            alt=""
                            className="h-full w-full object-contain"
                          />
                        </span>
                      )}
                      <div className="min-w-0">
                        <p className="font-mono text-xs text-flux-600 dark:text-flux-300">
                          {copy.period} · {copy.role}
                        </p>
                        <h2
                          id="project-modal-title"
                          className={cn(
                            T.heading,
                            "mt-1 text-3xl sm:text-4xl lg:text-5xl"
                          )}
                        >
                          {copy.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* -------------------------------------------- Conteúdo */}
                  <div className="px-5 pb-10 pt-6 sm:px-8 lg:px-10">
                    {/* Links externos do projeto, quando existirem. */}
                    {(project.link || project.repo) && (
                      <div className="mb-7 flex flex-wrap gap-3">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                              "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold",
                              "bg-gradient-to-r from-flux-400 to-pulse-500 text-ink-950",
                              "transition duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-glow",
                              T.ring
                            )}
                          >
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            {t.projects.modal.visit}
                          </a>
                        )}
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                              "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold",
                              T.glass,
                              "text-slate-700 dark:text-slate-200",
                              "transition duration-300 ease-smooth hover:-translate-y-0.5 hover:border-flux-400/50 hover:shadow-glow",
                              T.ring
                            )}
                          >
                            <FaGithub className="h-4 w-4" aria-hidden="true" />
                            {t.projects.modal.repo}
                          </a>
                        )}
                      </div>
                    )}

                    <Block icon={Layers} title={t.projects.modal.overview}>
                      <p className={cn(T.body, "text-pretty text-justify hyphens-auto leading-relaxed")}>
                        {copy.story}
                      </p>
                    </Block>

                    {/* Responsabilidades */}
                    <Block
                      icon={Target}
                      title={t.projects.modal.responsibilities}
                    >
                      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {copy.responsibilities.map((item) => (
                          <li
                            key={item}
                            className={cn(
                              "flex gap-3 rounded-xl border border-slate-900/[0.07] bg-slate-900/[0.02] p-3.5",
                              "dark:border-white/[0.07] dark:bg-white/[0.02]",
                              T.body,
                              T.prose,
                              "text-sm leading-relaxed"
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-flux-400 to-pulse-400"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Block>

                    {/* Equipe */}
                    <Block icon={Users} title={t.projects.modal.team}>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {project.team.map((member, index) => {
                          const memberCopy = copy.team[index];
                          const links = teamSocials[member.name] ?? {};
                          const initials = member.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("");
                          return (
                            <GlassCard
                              key={member.name}
                              className={cn(
                                "flex h-full flex-col p-5",
                                // O cartão do próprio Eduardo ganha um leve
                                // realce, para a equipe se ler de relance.
                                member.self &&
                                  "ring-1 ring-flux-400/25 dark:ring-flux-400/20"
                              )}
                            >
                              <div className="flex items-start gap-3.5">
                                <span
                                  className={cn(
                                    "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold",
                                    member.self
                                      ? "bg-gradient-to-br from-flux-400 to-pulse-500 text-ink-950 shadow-glow"
                                      : "border border-flux-400/25 bg-gradient-to-br from-flux-400/10 to-pulse-500/10 text-slate-700 dark:text-slate-200"
                                  )}
                                >
                                  {initials}
                                </span>
                                <div className="min-w-0 flex-1">
                                  <p className="font-display text-sm font-semibold leading-tight text-slate-900 dark:text-white">
                                    {member.name}
                                  </p>
                                  {/* Sem truncate: os papéis passaram a ter
                                      nomes longos e ficavam cortados. */}
                                  <p
                                    className={cn(
                                      "mt-1 text-xs leading-snug",
                                      member.self
                                        ? "text-flux-600 dark:text-flux-300"
                                        : T.faint
                                    )}
                                  >
                                    {memberCopy?.role}
                                  </p>
                                </div>
                              </div>

                              <p
                                className={cn(
                                  T.body,
                                  T.prose,
                                  "mt-4 flex-1 text-xs leading-relaxed"
                                )}
                              >
                                {memberCopy?.resp}
                              </p>

                              <div className="mt-4 flex gap-2 border-t border-slate-900/[0.07] pt-4 dark:border-white/[0.07]">
                                {[
                                  { Icon: FaGithub, href: links.github },
                                  { Icon: FaLinkedinIn, href: links.linkedin },
                                ]
                                  .filter((link) => link.href)
                                  .map(({ Icon, href }) => (
                                    <a
                                      key={href}
                                      href={href}
                                      target="_blank"
                                      rel="noreferrer"
                                      aria-label={`${member.name} no ${Icon === FaGithub ? "GitHub" : "LinkedIn"}`}
                                      className={cn(
                                        "inline-flex h-9 w-9 items-center justify-center rounded-lg",
                                        "border border-slate-900/10 text-slate-600 dark:border-white/10 dark:text-slate-300",
                                        "transition duration-300 ease-smooth hover:border-flux-400/50 hover:text-flux-600 dark:hover:text-flux-300",
                                        "hover:-translate-y-0.5 hover:bg-flux-400/[0.07] hover:shadow-glow",
                                        T.ring
                                      )}
                                    >
                                      <Icon className="h-4 w-4" />
                                    </a>
                                  ))}
                              </div>
                            </GlassCard>
                          );
                        })}
                      </div>
                    </Block>

                    {/* Integração IoT (apenas ThermalTech) */}
                    {copy.iot && (
                      <Block icon={Radio} title={t.projects.modal.iot}>
                        <ul className="flex flex-col gap-2.5">
                          {copy.iot.map((item) => (
                            <li
                              key={item}
                              className={cn(
                                "flex gap-3 rounded-xl border border-pulse-400/20 bg-pulse-400/[0.06] p-3.5",
                                T.body,
                                T.prose,
                                "text-sm leading-relaxed"
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse-400"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Block>
                    )}

                    {/* Funcionalidades — com galeria quando houver imagens */}
                    <Block icon={Expand} title={t.projects.modal.features}>
                      <div className="flex flex-col gap-4">
                        {copy.features.map((feature, index) => {
                          const image = project.gallery[index];
                          if (!image) {
                            return (
                              <GlassCard key={feature.title} className="p-4 sm:p-5">
                                <h4 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                                  {feature.title}
                                </h4>
                                <p
                                  className={cn(
                                    T.body,
                                    "mt-2 text-pretty text-justify hyphens-auto text-sm leading-relaxed"
                                  )}
                                >
                                  {feature.desc}
                                </p>
                              </GlassCard>
                            );
                          }
                          return (
                          <GlassCard
                            key={feature.title}
                            className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-5 sm:p-5"
                          >
                            <button
                              type="button"
                              onClick={() => setLightboxIndex(index)}
                              aria-label={`${t.projects.modal.expandImage}: ${feature.title}`}
                              className={cn(
                                "group/img relative overflow-hidden rounded-xl sm:col-span-2",
                                T.ring
                              )}
                            >
                              <img
                                src={project.gallery[index]}
                                alt={feature.title}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[16/10] w-full object-cover object-top transition duration-500 ease-smooth group-hover/img:scale-105"
                              />
                              <span className="absolute inset-0 flex items-center justify-center bg-ink-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100">
                                <Expand className="h-5 w-5 text-white" />
                              </span>
                            </button>

                            <div className="sm:col-span-3">
                              <h4 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                                {feature.title}
                              </h4>
                              <p
                                className={cn(
                                  T.body,
                                  "mt-2 text-pretty text-justify hyphens-auto text-sm leading-relaxed"
                                )}
                              >
                                {feature.desc}
                              </p>
                            </div>
                          </GlassCard>
                          );
                        })}
                      </div>
                    </Block>

                    {/* Stack */}
                    <Block icon={Cpu} title={t.projects.modal.stack}>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {STACK_KEYS.filter(
                          (key) => project.stack[key]?.length
                        ).map((key) => (
                          <GlassCard key={key} className="p-4">
                            <h4
                              className={cn(
                                T.faint,
                                "text-[0.68rem] font-semibold uppercase tracking-[0.16em]"
                              )}
                            >
                              {t.projects.modal.stackLabels[key]}
                            </h4>
                            <ul className="mt-3 flex flex-wrap gap-1.5">
                              {project.stack[key].map((tech) => (
                                <li key={tech}>
                                  <Tag
                                    accent={
                                      key === "backend" || key === "libraries"
                                        ? "pulse"
                                        : key === "integrations"
                                          ? "neutral"
                                          : "flux"
                                    }
                                  >
                                    {tech}
                                  </Tag>
                                </li>
                              ))}
                            </ul>
                          </GlassCard>
                        ))}
                      </div>
                    </Block>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
