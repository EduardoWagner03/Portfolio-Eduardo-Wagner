import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "../../lib/cn";
import { T } from "../ui/primitives";
import { useI18n } from "../../i18n";
import { useScrolled } from "../../lib/hooks";

export default function BackToTop() {
  const { t } = useI18n();
  const visible = useScrolled(700);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.nav.backToTop}
          title={t.nav.backToTop}
          className={cn(
            "fixed bottom-6 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full sm:right-8",
            T.glass,
            "text-flux-600 shadow-glass dark:text-flux-300",
            "transition duration-300 hover:shadow-glow hover:-translate-y-0.5",
            T.ring
          )}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
