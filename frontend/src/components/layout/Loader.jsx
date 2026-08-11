import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";
import { useI18n } from "../../i18n";
import { profile } from "../../data/profile";

const SESSION_KEY = "ew-portfolio-intro-seen";
const MAX_DURATION = 1100;

/**
 * Abertura de marca. Diferente do loader antigo (setTimeout fixo de 2,5s, que
 * atrasava o LCP de propósito), este sai assim que a página termina de
 * carregar, tem teto de ~1,1s, aparece só uma vez por sessão e é ignorado
 * quando o usuário pede menos movimento.
 */
export default function Loader() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.sessionStorage.getItem(SESSION_KEY);
  });

  useEffect(() => {
    if (!visible) return undefined;
    if (reduce) {
      setVisible(false);
      return undefined;
    }

    const dismiss = () => {
      window.sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(false);
    };

    const cap = window.setTimeout(dismiss, MAX_DURATION);
    // Se a página já carregou, sai no próximo tick.
    if (document.readyState === "complete") {
      const quick = window.setTimeout(dismiss, 550);
      return () => {
        clearTimeout(cap);
        clearTimeout(quick);
      };
    }
    window.addEventListener("load", dismiss, { once: true });
    return () => {
      clearTimeout(cap);
      window.removeEventListener("load", dismiss);
    };
  }, [visible, reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-6 bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          aria-hidden="true"
        >
          <div className="relative flex h-24 w-24 items-center justify-center">
            <span className="absolute inset-0 rounded-2xl border border-flux-400/30 animate-spin-slow" />
            <span className="absolute inset-2 rounded-xl bg-gradient-to-br from-flux-400/25 to-pulse-500/25 blur-lg" />
            <span className="relative font-display text-2xl font-bold text-white">
              {profile.initials}
            </span>
          </div>

          <div className="h-px w-40 overflow-hidden bg-white/10">
            <motion.span
              className="block h-full w-1/3 bg-gradient-to-r from-transparent via-flux-400 to-transparent"
              animate={{ x: ["-120%", "320%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <p
            className={cn(
              "font-mono text-[0.7rem] uppercase tracking-[0.25em] text-slate-500"
            )}
          >
            {t.loader.text}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
