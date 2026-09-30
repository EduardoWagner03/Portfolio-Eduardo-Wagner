import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";
import { EASE_OUT_STRONG, VIEWPORT, stagger } from "../../lib/motion";

// Além de subir, cada pedaço tomba para trás no eixo X, como uma placa que
// se levanta: é o que dá volume à entrada em vez de um simples deslize.
const PIECE = {
  hidden: { y: "118%", rotate: 4, rotateX: -80, transformPerspective: 700 },
  visible: {
    y: "0%",
    rotate: 0,
    rotateX: 0,
    transformPerspective: 700,
    transition: { duration: 1.15, ease: EASE_OUT_STRONG },
  },
};

/**
 * Revela texto por máscara: cada pedaço sobe de dentro de uma janela com
 * overflow escondido, com leve rotação e em cascata.
 *
 * - `text` é cortado por palavra, para títulos cuja quebra de linha depende
 *   da largura da tela.
 * - `lines` recebe as linhas já separadas (nós React), para quando a quebra é
 *   parte do desenho, como o nome no hero.
 *
 * `trigger` escolhe quem dispara: `view` ao entrar na tela, `mount` ao
 * carregar, e `inherit` deixa o pai com variants controlar o tempo.
 *
 * O texto continua inteiro no HTML estático; só a posição começa deslocada.
 */
export default function MaskReveal({
  text,
  lines,
  trigger = "view",
  gap = 0.07,
  delay = 0,
  className,
}) {
  const reduce = useReducedMotion();
  const block = Boolean(lines);
  const pieces = lines ?? String(text).split(" ");

  if (reduce) {
    return (
      <span className={className}>
        {pieces.map((piece, index) => (
          <React.Fragment key={index}>
            {block ? <span className="block">{piece}</span> : piece}
            {!block && index < pieces.length - 1 && " "}
          </React.Fragment>
        ))}
      </span>
    );
  }

  const timing =
    trigger === "view"
      ? { initial: "hidden", whileInView: "visible", viewport: VIEWPORT }
      : trigger === "mount"
        ? { initial: "hidden", animate: "visible" }
        : {};

  return (
    <motion.span
      className={cn(block && "block", className)}
      variants={stagger(gap, delay)}
      {...timing}
    >
      {pieces.map((piece, index) => (
        <React.Fragment key={index}>
          {/* O respiro vertical (compensado pela margem negativa) impede que
              acentos e descendentes sejam cortados pela máscara em títulos
              com entrelinha apertada. */}
          <span
            className={cn(
              "-my-[0.14em] overflow-hidden py-[0.14em] align-top",
              block ? "block" : "inline-block"
            )}
          >
            <motion.span
              className={cn("origin-bottom-left", block ? "block" : "inline-block")}
              variants={PIECE}
            >
              {piece}
            </motion.span>
          </span>
          {!block && index < pieces.length - 1 && " "}
        </React.Fragment>
      ))}
    </motion.span>
  );
}
