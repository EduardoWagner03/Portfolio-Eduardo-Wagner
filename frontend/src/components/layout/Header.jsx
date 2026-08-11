import React, { useCallback, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Languages, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "../../lib/cn";
import { T } from "../ui/primitives";
import { useI18n } from "../../i18n";
import { useTheme } from "../../theme/ThemeProvider";
import { profile } from "../../data/profile";
import {
  useActiveSection,
  useEscapeKey,
  useLockBodyScroll,
  useScrolled,
} from "../../lib/hooks";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

const iconButton = cn(
  "inline-flex h-10 w-10 items-center justify-center rounded-xl",
  "border border-slate-900/10 bg-white/60 text-slate-700 backdrop-blur-md",
  "dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200",
  "transition duration-300 ease-smooth",
  "hover:border-flux-500/50 hover:text-flux-600 dark:hover:border-flux-400/50 dark:hover:text-flux-300",
  "active:scale-95",
  T.ring
);

export default function Header() {
  const { t, toggleLang } = useI18n();
  const { isDark, toggleTheme } = useTheme();
  const scrolled = useScrolled(20);
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useLockBodyScroll(menuOpen);
  useEscapeKey(menuOpen, closeMenu);

  return (
    <>
      <a
        href="#main"
        className={cn(
          "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70]",
          "focus:rounded-lg focus:bg-flux-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-ink-950"
        )}
      >
        {t.nav.skipToContent}
      </a>

      <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
          <nav
            className={cn(
              "flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 sm:px-4",
              "transition-all duration-500 ease-smooth",
              scrolled
                ? cn(T.glass, "shadow-glass")
                : "border border-transparent bg-transparent"
            )}
          >
            {/* Marca */}
            <a
              href="#home"
              onClick={closeMenu}
              className={cn(
                "group flex items-center gap-2.5 rounded-xl px-1.5 py-1",
                T.ring
              )}
              aria-label={profile.shortName}
            >
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-flux-400 to-pulse-500 font-display text-sm font-bold text-ink-950 shadow-glow">
                {profile.initials}
                <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/25" />
              </span>
              <span className="hidden font-display text-sm font-semibold tracking-tight text-slate-900 dark:text-white sm:block">
                {profile.shortName}
              </span>
            </a>

            {/* Navegação desktop com indicador que desliza */}
            <ul className="hidden items-center gap-1 lg:flex">
              {t.nav.items.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-medium",
                        "transition-colors duration-300",
                        isActive
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
                        T.ring
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId={reduce ? undefined : "nav-pill"}
                          className="absolute inset-0 -z-10 rounded-lg border border-flux-500/25 bg-flux-500/[0.09] dark:border-flux-400/25 dark:bg-flux-400/[0.1]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Ações */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className={iconButton}
                aria-label={isDark ? t.nav.toLight : t.nav.toDark}
                title={isDark ? t.nav.toLight : t.nav.toDark}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? "sun" : "moon"}
                    initial={reduce ? false : { rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={reduce ? undefined : { rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    {isDark ? (
                      <Sun className="h-[1.05rem] w-[1.05rem]" />
                    ) : (
                      <Moon className="h-[1.05rem] w-[1.05rem]" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>

              <button
                type="button"
                onClick={toggleLang}
                className={cn(iconButton, "w-auto gap-1.5 px-3")}
                aria-label={t.meta.switchLabel}
                title={t.meta.switchLabel}
              >
                <Languages className="h-[1.05rem] w-[1.05rem]" />
                <span className="font-mono text-xs font-semibold">
                  {t.meta.switchTo}
                </span>
              </button>

              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "hidden h-10 items-center gap-2 rounded-xl px-4 text-sm font-semibold sm:inline-flex",
                  "bg-gradient-to-r from-flux-300 via-flux-400 to-pulse-400 text-ink-950",
                  "shadow-glow transition duration-300 ease-smooth hover:shadow-glow-lg hover:brightness-110 active:scale-95",
                  T.ring
                )}
              >
                <Download className="h-4 w-4" />
                <span className="hidden md:inline">{t.nav.downloadCv}</span>
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className={cn(iconButton, "lg:hidden")}
                aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
              >
                {menuOpen ? (
                  <X className="h-[1.15rem] w-[1.15rem]" />
                ) : (
                  <Menu className="h-[1.15rem] w-[1.15rem]" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Drawer mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label={t.nav.closeMenu}
              onClick={closeMenu}
              className="absolute inset-0 h-full w-full bg-ink-950/70 backdrop-blur-sm"
            />
            <motion.div
              initial={reduce ? false : { y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "absolute inset-x-4 top-24 rounded-2xl p-3",
                T.glass,
                "shadow-glass"
              )}
            >
              <ul className="flex flex-col gap-1">
                {t.nav.items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium",
                        "transition duration-300",
                        active === item.id
                          ? "border border-flux-400/25 bg-flux-400/10 text-flux-700 dark:text-flux-200"
                          : "border border-transparent text-slate-700 hover:bg-slate-900/[0.05] dark:text-slate-300 dark:hover:bg-white/[0.06]",
                        T.ring
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition",
                          active === item.id
                            ? "bg-flux-400 shadow-glow"
                            : "bg-transparent"
                        )}
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className={cn(
                  "mt-2 flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-semibold sm:hidden",
                  "bg-gradient-to-r from-flux-300 via-flux-400 to-pulse-400 text-ink-950 shadow-glow",
                  T.ring
                )}
              >
                <Download className="h-4 w-4" />
                {t.nav.downloadCv}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
