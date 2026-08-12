import { useEffect, useState } from "react";

/**
 * Scrollspy via IntersectionObserver — retorna o id da seção mais visível.
 *
 * Observa uma faixa fina logo abaixo do header fixo em vez de comparar
 * intersectionRatio entre seções: ratio é proporcional à altura total do
 * elemento, então uma seção muito alta (ex.: a timeline de Experiência)
 * nunca "vence" seções curtas mesmo estando claramente em foco na tela.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return undefined;

    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });
        // ids está em ordem de documento; a seção ativa é a última visível
        // dentro da faixa, ou seja, a mais recente a cruzar o topo.
        const current = ids.filter((id) => visible.has(id)).pop();
        if (current) setActive(current);
      },
      { threshold: 0, rootMargin: "-88px 0px -70% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/** True depois que a página rolou mais que `offset` pixels. */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}

/** Bloqueia o scroll do body enquanto um overlay estiver aberto. */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [locked]);
}

/** Dispara um callback quando a tecla Escape é pressionada. */
export function useEscapeKey(enabled, handler) {
  useEffect(() => {
    if (!enabled) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") handler(event);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled, handler]);
}

/** Acompanha uma media query com atualização reativa. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const list = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);
    setMatches(list.matches);
    list.addEventListener("change", onChange);
    return () => list.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/**
 * `false` no servidor e na primeira renderização do cliente, `true` depois.
 *
 * Existe por causa do pré-render estático: componentes que criam portal para
 * `document.body` quebram o build, porque no servidor não há `document`. Como
 * modal e lightbox só aparecem por interação, adiar a montagem deles não custa
 * nada de conteúdo indexável.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
