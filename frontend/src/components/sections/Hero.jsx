import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Cog,
  Database,
  Mail,
  Monitor,
  MousePointerClick,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SiJira } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { cn } from "../../lib/cn";
import { Badge, Button, GlassCard, T } from "../ui/primitives";
import Reveal, { RevealGroup, RevealItem } from "../ui/Reveal";
import Typewriter from "../ui/Typewriter";
import ParticleField from "../background/ParticleField";
import { useI18n } from "../../i18n";
import { profile } from "../../data/profile";

const STAT_ICONS = [Cog, Wrench, Cloud];

// Ícones orbitais e sua posição no anel ao redor da foto.
const ORBIT = [
  { Icon: Cog, at: "left-0 top-6 sm:-left-2" },
  { Icon: Database, at: "right-2 top-0 sm:-top-2" },
  { Icon: Cloud, at: "-right-1 top-1/3 sm:-right-4" },
  { Icon: SiJira, at: "bottom-8 -right-1 sm:-right-3" },
  { Icon: Monitor, at: "bottom-0 left-8" },
  { Icon: FaGithub, at: "-left-1 bottom-1/3 sm:-left-4" },
];

export default function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32"
    >
      <ParticleField className="absolute inset-0 h-full w-full" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* ---------------------------------------------- Coluna de texto */}
        <div className="lg:col-span-7">
          <RevealGroup className="flex flex-col items-start gap-6" gap={0.1}>
            <RevealItem>
              <Badge icon={Rocket}>{t.hero.badge}</Badge>
            </RevealItem>

            <RevealItem>
              <h1
                className={cn(
                  T.heading,
                  "text-balance text-[2.6rem] leading-[0.95] xs:text-5xl sm:text-6xl lg:text-[4.5rem]"
                )}
              >
                {t.hero.firstName}
                <br />
                <span className={T.gradientText}>{t.hero.lastName}</span>
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="flex min-h-[2.2em] items-center font-mono text-base text-slate-700 dark:text-slate-300 sm:text-xl">
                <span className="mr-2 text-flux-500 dark:text-flux-400">
                  &gt;
                </span>
                <Typewriter words={t.hero.roles} />
              </p>
            </RevealItem>

            <RevealItem>
              <p
                className={cn(
                  T.body,
                  "max-w-2xl text-pretty text-justify hyphens-auto text-[0.95rem] leading-relaxed sm:text-lg"
                )}
              >
                {t.hero.description}
              </p>
            </RevealItem>

            <RevealItem className="flex w-full flex-col gap-3 pt-1 xs:flex-row xs:items-center">
              <Button
                href="#projects"
                size="lg"
                icon={Sparkles}
                iconRight={ArrowRight}
                className="w-full xs:w-auto"
              >
                {t.hero.primaryCta}
              </Button>
              <Button
                href="#contact"
                size="lg"
                variant="outline"
                icon={Mail}
                className="w-full xs:w-auto"
              >
                {t.hero.secondaryCta}
              </Button>
            </RevealItem>
          </RevealGroup>

          {/* Destaques */}
          <RevealGroup
            className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3"
            gap={0.09}
            delay={0.15}
          >
            {t.hero.stats.map((stat, index) => {
              const Icon = STAT_ICONS[index];
              return (
                <RevealItem key={stat.label}>
                  <GlassCard className="h-full p-4">
                    <Icon
                      className="mb-3 h-5 w-5 text-flux-500 dark:text-flux-400"
                      aria-hidden="true"
                    />
                    <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                      {stat.label}
                    </p>
                    <p className={cn(T.faint, "mt-1 text-xs leading-relaxed")}>
                      {stat.desc}
                    </p>
                  </GlassCard>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>

        {/* ---------------------------------------------- Coluna do retrato */}
        <Reveal
          variant="scaleIn"
          delay={0.2}
          className="order-first flex justify-center lg:order-none lg:col-span-5"
        >
          <div className="relative aspect-square w-[16rem] xs:w-[19rem] sm:w-[23rem] lg:w-full lg:max-w-[26rem]">
            {/* Anel externo girando */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-dashed border-flux-400/25 motion-safe:animate-spin-slow dark:border-flux-400/20"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[8%] rounded-full border border-pulse-400/20"
            />
            {/* Halo */}
            <div
              aria-hidden="true"
              className="absolute inset-[12%] rounded-full bg-gradient-to-br from-flux-400/30 to-pulse-500/30 blur-2xl"
            />

            {/* Foto */}
            <div className="absolute inset-[14%] overflow-hidden rounded-full ring-1 ring-white/30 dark:ring-white/15">
              <img
                src={profile.photo}
                alt={t.hero.photoAlt}
                width={420}
                height={420}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 ease-smooth hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent"
              />
            </div>

            {/* Chips de tecnologia orbitando */}
            {ORBIT.map(({ Icon, at }, index) => (
              <motion.div
                key={t.hero.orbit[index]}
                className={cn("absolute z-10", at)}
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={{
                  duration: 5 + index * 0.55,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              >
                <div
                  className={cn(
                    "group/chip flex items-center gap-2 rounded-xl px-2.5 py-2",
                    T.glass,
                    "shadow-glass transition duration-300 hover:shadow-glow"
                  )}
                  title={t.hero.orbit[index]}
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-flux-500 dark:text-flux-300"
                    aria-hidden="true"
                  />
                  <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium text-slate-700 opacity-0 transition-all duration-300 group-hover/chip:max-w-[10rem] group-hover/chip:opacity-100 dark:text-slate-200">
                    {t.hero.orbit[index]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#about"
        aria-label={t.hero.scroll}
        className={cn(
          "absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 rounded-lg px-3 py-1 sm:flex",
          T.faint,
          "text-[0.7rem] uppercase tracking-[0.2em] transition hover:text-flux-500",
          T.ring
        )}
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MousePointerClick className="h-4 w-4" aria-hidden="true" />
        {t.hero.scroll}
      </motion.a>
    </section>
  );
}
