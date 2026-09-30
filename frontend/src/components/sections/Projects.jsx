import React from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Star,
  Users,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "../../lib/cn";
import { GlassCard, SectionHeading, Tag, T } from "../ui/primitives";
import Reveal from "../ui/Reveal";
import { projects } from "../../data/projectsData";
import { useI18n } from "../../i18n";
import { useClientMediaQuery } from "../../lib/hooks";

/**
 * Corta o texto na última palavra inteira antes do limite.
 *
 * O `line-clamp` do CSS resolve a altura, mas corta por caractere: as
 * descrições terminavam em "infraestrutura serv..." e "navegação do clien...".
 * Cortando aqui, o corte cai sempre entre palavras.
 */
// 160 e não 185: o texto justificado abre espaço entre as palavras e reduz o
// que cabe em quatro linhas. Acima disso, o line-clamp voltava a cortar por
// caractere nas descrições mais densas.
function clampWords(text, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  // Tira pontuação solta antes das reticências ("3D:" vira "3D").
  return `${cut.slice(0, lastSpace).replace(/[\s,.;:·-]+$/, "")}…`;
}

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

function ProjectCard({ project, onSelect }) {
  const { t } = useI18n();
  const copy = t.projects.items[project.id];
  const highlights = project.stack.frontend.slice(0, 3);
  const summary = clampWords(copy.description);

  return (
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
              // `truncate` e a largura limitada evitam que nomes
              // longos vazem pelas bordas da capa.
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 truncate px-4 text-center font-display text-5xl font-bold text-white/[0.07] sm:text-6xl"
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
        {/* O texto já chega cortado em palavra inteira; o
            line-clamp fica como rede de segurança para larguras
            onde ele ainda passe de quatro linhas. */}
        <p
          className={cn(
            T.body,
            "line-clamp-4 text-pretty text-justify text-sm leading-relaxed"
          )}
        >
          {summary}
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
            texto da equipe e os botões se espremiam e quebravam.
            `mt-auto` prende o bloco na base, para os rodapés dos
            cartões vizinhos alinharem mesmo quando um deles tem uma
            linha a mais de tecnologias. */}
        <div className="mt-auto flex flex-col gap-2 pt-6">
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
  );
}

// Largura mínima para a trilha horizontal. A altura também conta: numa tela
// baixa o cartão não cabe inteiro na área presa e o rodapé dele sumiria.
const PIN_QUERY = "(min-width: 1024px) and (min-height: 740px)";

// Recuo da trilha alinhado à borda do container (max-w-7xl + px-8).
const TRACK_INSET = "max(2rem, calc((100vw - 80rem) / 2 + 2rem))";

/**
 * Item da trilha com efeito de coverflow: quanto mais longe do centro da
 * tela, mais o cartão gira em Y, virado para o meio, e recua em Z. A posição
 * sai da própria translação da trilha, então o giro acompanha o scroll.
 */
function TrackItem({ x, viewportWidth, enabled, className, children, ...rest }) {
  const ref = React.useRef(null);
  const offset = useMotionValue(0);
  const width = useMotionValue(1);

  React.useEffect(() => {
    if (!enabled) return undefined;
    const measure = () => {
      if (!ref.current) return;
      offset.set(ref.current.offsetLeft);
      width.set(ref.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [enabled, offset, width]);

  const position = useTransform(
    [x, offset, width, viewportWidth],
    ([tx, left, w, vw]) =>
      vw ? Math.max(-1, Math.min(1, (left + w / 2 + tx - vw / 2) / (vw / 2))) : 0
  );
  const rotateY = useTransform(position, (n) => -n * 30);
  const z = useTransform(position, (n) => -Math.abs(n) * 180);

  return (
    <motion.li
      ref={ref}
      style={enabled ? { rotateY, z, transformPerspective: 1400 } : undefined}
      className={className}
      {...rest}
    >
      {children}
    </motion.li>
  );
}

export default function Projects({ onSelect }) {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const pin = useClientMediaQuery(PIN_QUERY) && !reduce;

  const pinRef = React.useRef(null);
  const viewportRef = React.useRef(null);
  const trackRef = React.useRef(null);

  // Quanto a trilha precisa andar para mostrar o último cartão. Vira altura
  // extra da seção: cada pixel de scroll vertical move um pixel para o lado.
  const [distance, setDistance] = React.useState(0);
  const distanceValue = useMotionValue(0);
  const viewportWidth = useMotionValue(0);

  React.useEffect(() => {
    if (!pin) {
      setDistance(0);
      distanceValue.set(0);
      return undefined;
    }
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;
      const next = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setDistance(next);
      distanceValue.set(next);
      viewportWidth.set(viewport.clientWidth);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(trackRef.current);
    observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, [pin, distanceValue, viewportWidth]);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.0005,
  });
  const x = useTransform([progress, distanceValue], ([p, d]) => -p * d);
  // Os números andam no sentido contrário e bem mais devagar que a trilha,
  // o que descola eles dos cartões e dá a sensação de profundidade.
  const numberX = useTransform(
    [progress, distanceValue],
    ([p, d]) => p * d * 0.12
  );
  const counter = useTransform(progress, (p) =>
    String(
      Math.min(projects.length, Math.floor(p * projects.length) + 1)
    ).padStart(2, "0")
  );

  // Teclado: focar um cartão que ainda está fora da área visível rola a
  // página até a posição em que a trilha o deixa centralizado.
  const handleFocus = (event) => {
    if (!pin) return;
    const card = event.target.closest("[data-project-card]");
    const viewport = viewportRef.current;
    if (!card || !viewport) return;
    const shift =
      card.offsetLeft - (viewport.clientWidth - card.offsetWidth) / 2;
    const top = pinRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + Math.min(distance, Math.max(0, shift)) });
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <div className={T.container}>
        <SectionHeading
          index="03"
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />
      </div>

      <div
        ref={pinRef}
        className="relative mt-14"
        style={pin ? { height: `calc(100vh + ${distance}px)` } : undefined}
      >
        {/* `overflow-clip` e não `hidden`: um contêiner `hidden` ainda pode ser
            rolado por código, e o foco do teclado deslocaria a trilha por
            conta própria, brigando com o scroll. */}
        <div
          ref={viewportRef}
          className={cn(
            pin &&
              "sticky top-0 flex h-screen flex-col justify-center overflow-clip pt-[5.25rem]"
          )}
        >
          <motion.ul
            ref={trackRef}
            onFocus={handleFocus}
            style={pin ? { x, paddingInline: TRACK_INSET } : undefined}
            className={
              pin
                ? "flex w-max items-stretch gap-8"
                : cn(
                    T.container,
                    "grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3"
                  )
            }
          >
            {projects.map((project, index) => (
              <TrackItem
                key={project.id}
                x={x}
                viewportWidth={viewportWidth}
                enabled={pin}
                data-project-card
                className={cn(
                  "relative flex min-w-0 flex-col pt-16",
                  pin && "w-[24rem] xl:w-[26rem]"
                )}
              >
                {/* Número gigante vazado acima do cartão. Só a base encosta
                    nele; antes ficava metade escondido atrás da capa. */}
                <motion.span
                  aria-hidden="true"
                  style={pin ? { x: numberX } : undefined}
                  className="pointer-events-none absolute left-1 top-0 select-none font-display text-[5rem] font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgb(6_182_212/0.45)] dark:[-webkit-text-stroke:1px_rgb(34_211_238/0.35)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.span>
                <Reveal
                  variant="fadeUp"
                  delay={pin ? 0 : (index % 3) * 0.1}
                  className="relative z-10 flex flex-1 flex-col"
                >
                  <ProjectCard project={project} onSelect={onSelect} />
                </Reveal>
              </TrackItem>
            ))}
          </motion.ul>

          {pin && (
            <div className={cn(T.container, "mt-6 flex items-center gap-5")}>
              <span className="font-mono text-xs tabular-nums text-slate-500">
                <motion.span className="text-slate-900 dark:text-white">
                  {counter}
                </motion.span>
                {" / "}
                {String(projects.length).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-slate-900/10 dark:bg-white/10">
                <motion.div
                  className="h-full origin-left bg-gradient-to-r from-flux-400 to-pulse-500"
                  style={{ scaleX: progress }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

