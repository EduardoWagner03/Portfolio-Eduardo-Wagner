import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Alterna entre frases digitando e apagando.
 * Com prefers-reduced-motion, mostra apenas a primeira frase, estática.
 * O texto completo fica disponível para leitores de tela via aria-label.
 */
export default function Typewriter({
  words,
  className,
  typeSpeed = 55,
  deleteSpeed = 28,
  holdTime = 1900,
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (reduce) return undefined;
    const current = words[index % words.length];

    if (!deleting && text === current) {
      timer.current = setTimeout(() => setDeleting(true), holdTime);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((value) => (value + 1) % words.length);
    } else {
      timer.current = setTimeout(
        () =>
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          ),
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timer.current);
  }, [text, deleting, index, words, reduce, typeSpeed, deleteSpeed, holdTime]);

  if (reduce) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={className} aria-label={words.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] bg-flux-400 animate-caret"
      />
    </span>
  );
}
