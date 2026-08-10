import React from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  Award,
  BookOpen,
  Bot,
  Boxes,
  Briefcase,
  Gamepad2,
  GraduationCap,
  LaptopMinimal,
  Palette,
  Rocket,
  Route,
  Thermometer,
  UtensilsCrossed,
} from "lucide-react";
import { cn } from "../../lib/cn";
import { GlassCard, Section, SectionHeading, T } from "../ui/primitives";
import Reveal from "../ui/Reveal";
import { experience } from "../../data/experienceData";
import { useI18n } from "../../i18n";

const ICONS = {
  BookOpen,
  GraduationCap,
  Award,
  Bot,
  Boxes,
  Gamepad2,
  Thermometer,
  Briefcase,
  LaptopMinimal,
  Palette,
  Rocket,
  UtensilsCrossed,
};

export default function Experience() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const railRef = React.useRef(null);

  // A linha central se "preenche" conforme a seção passa pelo viewport.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section id="experience">
      <SectionHeading
        badge={t.experience.badge}
        badgeIcon={Route}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <div ref={railRef} className="relative mt-14 lg:mt-20">
        {/* Trilho: à esquerda no mobile, centralizado no desktop */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[15px] top-0 w-px bg-slate-900/10 dark:bg-white/10 lg:left-1/2 lg:-translate-x-1/2"
        >
          <motion.div
            className="h-full w-full origin-top bg-gradient-to-b from-flux-400 via-flux-400/70 to-pulse-500"
            style={reduce ? { scaleY: 1 } : { scaleY }}
          />
        </div>

        <ol className="flex flex-col gap-8 lg:gap-3">
          {experience.map((entry, index) => {
            const copy = t.experience.items[entry.id];
            const Icon = ICONS[entry.icon] ?? Briefcase;
            const left = index % 2 === 0;
            const accentText =
              entry.accent === "pulse"
                ? "text-pulse-600 dark:text-pulse-300"
                : "text-flux-600 dark:text-flux-300";
            const accentBorder =
              entry.accent === "pulse"
                ? "border-pulse-400/30 bg-pulse-400/10"
                : "border-flux-400/30 bg-flux-400/10";

            return (
              <li
                key={entry.id}
                className={cn(
                  "relative pl-11 lg:grid lg:grid-cols-2 lg:gap-x-14 lg:pl-0"
                )}
              >
                {/* Nó do trilho — a posição atual ganha um halo pulsante */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-1.5 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-md",
                    accentBorder,
                    accentText,
                    "lg:left-1/2 lg:-translate-x-1/2"
                  )}
                >
                  {entry.current && (
                    <span className="absolute inset-0 rounded-full bg-pulse-400/40 motion-safe:animate-pulse-ring" />
                  )}
                  <Icon className="relative h-4 w-4" />
                </span>

                <Reveal
                  variant={left ? "slideLeft" : "slideRight"}
                  className={cn(
                    "lg:py-6",
                    left
                      ? "lg:col-start-1 lg:pr-4 lg:text-right"
                      : "lg:col-start-2 lg:pl-4"
                  )}
                >
                  <GlassCard className="p-5 sm:p-6">
                    <div
                      className={cn(
                        "flex flex-wrap items-center gap-3",
                        left && "lg:justify-end"
                      )}
                    >
                      <span
                        className={cn(
                          "rounded-full border px-3 py-1 font-mono text-[0.7rem] font-semibold",
                          accentBorder,
                          accentText
                        )}
                      >
                        {copy.period}
                      </span>
                      {entry.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse"
                          />
                          {t.experience.currentLabel}
                        </span>
                      )}
                    </div>

                    <h3
                      className={cn(T.heading, "mt-3 text-lg sm:text-xl", accentText)}
                    >
                      {copy.title}
                    </h3>
                    <p
                      className={cn(
                        T.faint,
                        "mt-1 text-sm font-medium tracking-wide"
                      )}
                    >
                      {copy.org}
                    </p>

                    <ul
                      className={cn(
                        "mt-4 flex flex-col gap-2",
                        left && "lg:items-end"
                      )}
                    >
                      {copy.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className={cn(
                            T.body,
                            "flex gap-2.5 text-sm leading-relaxed",
                            left && "lg:flex-row-reverse lg:text-right"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              "mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full",
                              entry.accent === "pulse"
                                ? "bg-pulse-400"
                                : "bg-flux-400"
                            )}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
