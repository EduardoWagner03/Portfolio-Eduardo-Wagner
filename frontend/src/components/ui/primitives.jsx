import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";
import MaskReveal from "./MaskReveal";
import { VIEWPORT, fadeIn, fadeUp, growX, stagger } from "../../lib/motion";

// Total de seções numeradas (Sobre, Habilidades, Projetos, Experiência e
// Contato), exibido ao lado do índice de cada título.
const SECTION_COUNT = "05";

/* ------------------------------------------------------------------ *
 * Tokens compartilhados — combinações de classes usadas em toda a UI.
 * ------------------------------------------------------------------ */
export const T = {
  container: "mx-auto w-full max-w-7xl px-5 sm:px-8",
  // backdrop-blur-md em vez de -xl: com dezenas de cartões de vidro na página,
  // o raio maior dominava o tempo de paint e engasgava o scroll.
  glass:
    "border border-slate-900/[0.08] bg-white/70 backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.035]",
  glassHover:
    "hover:border-flux-500/40 dark:hover:border-flux-400/40 hover:shadow-glow",
  heading: "font-display font-bold tracking-tight text-slate-900 dark:text-white",
  body: "text-slate-600 dark:text-slate-400",
  faint: "text-slate-500 dark:text-slate-500",
  // Texto corrido justificado. A hifenização evita os "rios" de espaço em
  // branco que a justificação cria em colunas estreitas.
  prose: "text-justify hyphens-auto",
  ring: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flux-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-ink-950",
  gradientText:
    "bg-gradient-to-r from-flux-500 via-flux-400 to-pulse-500 bg-clip-text text-transparent dark:from-flux-300 dark:via-flux-400 dark:to-pulse-400",
};

/* ------------------------------------------------------------------ *
 * Section — espaçamento vertical e container consistentes.
 * ------------------------------------------------------------------ */
export function Section({ id, ref, className, containerClassName, children }) {
  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative scroll-mt-24 py-16 sm:py-20 lg:py-24", className)}
    >
      <div className={cn(T.container, containerClassName)}>{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * SectionHeading — índice + título + subtítulo.
 * ------------------------------------------------------------------ */
export function SectionHeading({
  index,
  title,
  subtitle,
  align = "center",
  className,
}) {
  const centered = align === "center";
  const reduce = useReducedMotion();
  // Sem `initial`/`whileInView` na raiz, os filhos com variants simplesmente
  // não animam: é o caminho de quem pediu menos movimento.
  const timing = reduce
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: VIEWPORT,
        variants: stagger(0.14),
      };

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...timing}
    >
      {/* Índice da seção no lugar do selo em pílula, que deixava a página
          com cara de modelo pronto. Segue a mesma linguagem do contador da
          trilha de projetos. */}
      {index && (
        <motion.p
          variants={fadeIn}
          className="font-mono text-sm tabular-nums tracking-widest"
        >
          <span className="text-flux-600 dark:text-flux-400">{index}</span>
          <span className="text-slate-400 dark:text-slate-600"> / {SECTION_COUNT}</span>
        </motion.p>
      )}
      <h2
        className={cn(
          T.heading,
          "text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-5xl"
        )}
      >
        <MaskReveal text={title} trigger="inherit" />
      </h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            T.body,
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg"
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.span
        aria-hidden="true"
        variants={growX}
        className={cn(
          "h-px w-24",
          centered
            ? "origin-center bg-gradient-to-r from-transparent via-flux-400/60 to-transparent"
            : "origin-left bg-gradient-to-r from-flux-400/70 to-transparent"
        )}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ *
 * GlassCard — superfície de vidro com brilho que segue o cursor.
 * ------------------------------------------------------------------ */
export function GlassCard({
  as: Tag = "div",
  className,
  interactive = true,
  tilt = interactive,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();

  // O brilho segue o ponteiro via custom properties inline — sem CSS externo.
  // As mesmas coordenadas inclinam o cartão em 3D na direção do cursor.
  const handlePointerMove = (event) => {
    if (reduce || !interactive) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (!tilt || event.pointerType !== "mouse") return;
    // Até 5 graus: mais que isso distorce o texto e cansa a leitura.
    el.style.setProperty("--ry", `${(x / rect.width - 0.5) * 10}deg`);
    el.style.setProperty("--rx", `${(0.5 - y / rect.height) * 10}deg`);
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <Tag
      onPointerMove={handlePointerMove}
      onPointerLeave={tilt ? handlePointerLeave : undefined}
      className={cn(
        "group/card relative overflow-hidden rounded-2xl",
        T.glass,
        "shadow-glass transition duration-500 ease-smooth",
        interactive && T.glassHover,
        // Sem checar `reduce` aqui: a classe é inerte com as variáveis em
        // zero, e mudar o className no cliente quebraria a hidratação.
        tilt &&
          "[transform:perspective(1000px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]",
        className
      )}
      {...rest}
    >
      {/*
        Os filhos são renderizados diretamente, sem wrapper. Um <div> em volta
        deles fazia com que classes de layout passadas em `className`
        (grid, flex) se aplicassem a um único filho, empilhando o conteúdo.
        As camadas decorativas vêm depois no DOM e são absolutas, então
        continuam por cima sem ocupar espaço no grid/flex.
      */}
      {children}
      {interactive && !reduce && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 bg-[radial-gradient(280px_circle_at_var(--mx,50%)_var(--my,50%),rgba(34,211,238,0.14),transparent_70%)]"
        />
      )}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/25"
      />
    </Tag>
  );
}

/* ------------------------------------------------------------------ *
 * Button — âncora ou botão com as mesmas variantes.
 * ------------------------------------------------------------------ */
const BUTTON_BASE =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-300 ease-smooth disabled:cursor-not-allowed disabled:opacity-50";

const BUTTON_VARIANTS = {
  primary: cn(
    "text-ink-950 shadow-glow",
    "bg-gradient-to-r from-flux-300 via-flux-400 to-pulse-400",
    "hover:shadow-glow-lg hover:brightness-110 active:scale-[0.98]"
  ),
  outline: cn(
    "text-slate-800 dark:text-slate-100",
    "border border-slate-900/15 bg-white/60 backdrop-blur-md",
    "dark:border-white/15 dark:bg-white/[0.04]",
    "hover:border-flux-500/50 hover:bg-flux-500/[0.06] hover:text-flux-700",
    "dark:hover:border-flux-400/50 dark:hover:text-flux-200 active:scale-[0.98]"
  ),
  ghost: cn(
    "text-slate-600 dark:text-slate-300",
    "hover:bg-slate-900/[0.05] hover:text-slate-900",
    "dark:hover:bg-white/[0.07] dark:hover:text-white active:scale-[0.97]"
  ),
};

const BUTTON_SIZES = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem] sm:h-14 sm:px-8 sm:text-base",
  icon: "h-10 w-10",
};

export function Button({
  as,
  variant = "primary",
  size = "md",
  className,
  icon: Icon,
  iconRight: IconRight,
  loading = false,
  children,
  ...rest
}) {
  const Tag = as ?? (rest.href ? "a" : "button");
  return (
    <Tag
      className={cn(
        BUTTON_BASE,
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        T.ring,
        className
      )}
      {...(Tag === "button" ? { type: rest.type ?? "button" } : null)}
      {...rest}
    >
      {loading ? (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      ) : (
        Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      )}
      {children}
      {IconRight && (
        <IconRight
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Tag>
  );
}

/* ------------------------------------------------------------------ *
 * Tag — chip de tecnologia.
 * ------------------------------------------------------------------ */
export function Tag({ children, accent = "flux", className }) {
  const accents = {
    flux: "border-flux-500/25 bg-flux-500/[0.08] text-flux-700 dark:border-flux-400/20 dark:bg-flux-400/[0.09] dark:text-flux-200 hover:border-flux-500/50",
    pulse:
      "border-pulse-500/25 bg-pulse-500/[0.08] text-pulse-700 dark:border-pulse-400/20 dark:bg-pulse-400/[0.09] dark:text-pulse-200 hover:border-pulse-500/50",
    neutral:
      "border-slate-900/10 bg-slate-900/[0.04] text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300 hover:border-slate-900/25 dark:hover:border-white/25",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border px-2.5 py-1 font-mono text-xs",
        "transition duration-300 ease-smooth hover:-translate-y-0.5",
        accents[accent],
        className
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * Magnetic — leve atração ao cursor (desativada com reduced motion).
 * ------------------------------------------------------------------ */
export function Magnetic({ children, strength = 0.25, className }) {
  const reduce = useReducedMotion();
  const ref = React.useRef(null);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={offset}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = ref.current.getBoundingClientRect();
        setOffset({
          x: (event.clientX - (rect.left + rect.width / 2)) * strength,
          y: (event.clientY - (rect.top + rect.height / 2)) * strength,
        });
      }}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  );
}
