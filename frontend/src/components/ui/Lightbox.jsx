import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "../../lib/cn";
import { T } from "./primitives";
import { useI18n } from "../../i18n";
import { useEscapeKey, useLockBodyScroll } from "../../lib/hooks";

/**
 * Visualizador de imagens em página. Substitui o antigo `window.open` +
 * `document.write`, que era bloqueado por popup blockers e inutilizável no
 * mobile.
 */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const { t } = useI18n();
  const open = index !== null && index >= 0;

  useLockBodyScroll(open);
  useEscapeKey(open, onClose);

  const go = useCallback(
    (step) => {
      if (!images.length) return;
      onNavigate((index + step + images.length) % images.length);
    },
    [images.length, index, onNavigate]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, go]);

  const current = open ? images[index] : null;

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[80] flex flex-col bg-ink-950/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <header className="flex shrink-0 items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <div className="min-w-0">
              <h2 className="truncate font-display text-base font-semibold text-white sm:text-lg">
                {current.title}
              </h2>
              <p className="font-mono text-xs text-slate-400">
                {index + 1} / {images.length}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.projects.lightbox.close}
              autoFocus
              className={cn(
                "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                "border border-white/15 bg-white/[0.06] text-white",
                "transition duration-300 hover:border-rose-400/50 hover:text-rose-300",
                T.ring
              )}
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-16">
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t.projects.lightbox.prev}
                className={cn(
                  "absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full sm:left-5",
                  "border border-white/15 bg-ink-900/70 text-white backdrop-blur-md",
                  "transition duration-300 hover:border-flux-400/50 hover:text-flux-300",
                  T.ring
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            <motion.img
              key={current.src}
              src={current.src}
              alt={current.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full max-w-full rounded-xl object-contain shadow-2xl ring-1 ring-white/10"
            />

            {images.length > 1 && (
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t.projects.lightbox.next}
                className={cn(
                  "absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full sm:right-5",
                  "border border-white/15 bg-ink-900/70 text-white backdrop-blur-md",
                  "transition duration-300 hover:border-flux-400/50 hover:text-flux-300",
                  T.ring
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>

          <p className="shrink-0 pb-5 text-center font-mono text-[0.7rem] text-slate-500">
            {t.projects.lightbox.hint}
          </p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
