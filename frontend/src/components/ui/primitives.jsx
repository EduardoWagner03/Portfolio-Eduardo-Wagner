import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";
import Reveal from "./Reveal";

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
  ring: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flux-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-ink-950",
  gradientText:
    "bg-gradient-to-r from-flux-500 via-flux-400 to-pulse-500 bg-clip-text text-transparent dark:from-flux-300 dark:via-flux-400 dark:to-pulse-400",
};

/* ------------------------------------------------------------------ *
 * Section — espaçamento vertical e container consistentes.
 * ------------------------------------------------------------------ */
export function Section({ id, className, containerClassName, children }) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-16 sm:py-20 lg:py-24", className)}
    >
      <div className={cn(T.container, containerClassName)}>{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Badge — pílula de rótulo com ícone.
 * ------------------------------------------------------------------ */
export function Badge({ icon: Icon, children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5",
        "text-[0.7rem] font-semibold uppercase tracking-[0.16em]",
        "border border-flux-500/25 bg-flux-500/[0.07] text-flux-700",
        "dark:border-flux-400/25 dark:bg-flux-400/[0.08] dark:text-flux-300",
        className
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * SectionHeading — badge + título + subtítulo.
 * ------------------------------------------------------------------ */
export function SectionHeading({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "center",
  className,
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && <Badge icon={badgeIcon}>{badge}</Badge>}
      <h2
        className={cn(
          T.heading,
          "text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            T.body,
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg"
          )}
        >
          {subtitle}
        </p>
      )}
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-24 bg-gradient-to-r from-transparent via-flux-400/60 to-transparent",
          centered ? "" : "bg-gradient-to-r from-flux-400/70 to-transparent"
        )}
      />
    </Reveal>
  );
}

/* ------------------------------------------------------------------ *
 * GlassCard — superfície de vidro com brilho que segue o cursor.
 * ------------------------------------------------------------------ */
export function GlassCard({
  as: Tag = "div",
  className,
  interactive = true,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();

  // O brilho segue o ponteiro via custom properties inline — sem CSS externo.
  const handlePointerMove = (event) => {
    if (reduce || !interactive) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <Tag
      onPointerMove={handlePointerMove}
      className={cn(
        "group/card relative overflow-hidden rounded-2xl",
        T.glass,
        "shadow-glass transition duration-500 ease-smooth",
        interactive && T.glassHover,
        className
      )}
      {...rest}
    >
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
      <div className="relative">{children}</div>
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
