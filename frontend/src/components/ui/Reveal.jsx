import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { VARIANTS, VIEWPORT, stagger } from "../../lib/motion";

/**
 * Envolve qualquer conteúdo com uma animação de entrada por scroll.
 * Quando o usuário pede menos movimento (prefers-reduced-motion), o conteúdo
 * aparece instantaneamente em vez de animar.
 */
export default function Reveal({
  as = "div",
  variant = "fadeUp",
  delay = 0,
  className,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduce) {
    const Static = as;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      className={className}
      variants={VARIANTS[variant] ?? VARIANTS.fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}

/** Container que anima os filhos em cascata. Use com <Reveal.Item>. */
export function RevealGroup({
  as = "div",
  className,
  gap = 0.08,
  delay = 0,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduce) {
    const Static = as;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      className={className}
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </Component>
  );
}

/** Filho de RevealGroup — herda o timing do container. */
export function RevealItem({
  as = "div",
  variant = "fadeUp",
  className,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduce) {
    const Static = as;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      className={className}
      variants={VARIANTS[variant] ?? VARIANTS.fadeUp}
      {...rest}
    >
      {children}
    </Component>
  );
}
