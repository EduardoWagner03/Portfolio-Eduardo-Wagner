import React from "react";
import {
  Code2,
  Download,
  GraduationCap,
  Handshake,
  Lightbulb,
  Rocket,
  Users,
  UserRoundSearch,
} from "lucide-react";
import { cn } from "../../lib/cn";
import { Button, GlassCard, Section, SectionHeading, T } from "../ui/primitives";
import Reveal, { RevealGroup, RevealItem } from "../ui/Reveal";
import { useI18n } from "../../i18n";
import { profile } from "../../data/profile";

const JOURNEY_ICONS = [GraduationCap, Rocket, Users, Lightbulb];

export default function About() {
  const { t, lang } = useI18n();
  // `profile.cv` é um objeto por idioma. Usar ele direto no href gerava
  // "[object Object]" e levava o visitante a uma página 404.
  const cvHref = profile.cv[lang] ?? profile.cv.pt;

  return (
    <Section id="about">
      <SectionHeading
        badge={t.about.badge}
        badgeIcon={UserRoundSearch}
        title={t.about.title}
        subtitle={t.about.subtitle}
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12">
        {/* ------------------------------------------- Cartão de identidade */}
        <Reveal variant="slideLeft" className="lg:col-span-5">
          <GlassCard className="h-full p-6 sm:p-8 lg:sticky lg:top-28">
            <div className="flex items-center gap-4">
              <img
                src={profile.avatar}
                alt=""
                width={72}
                height={72}
                loading="lazy"
                decoding="async"
                className="h-16 w-16 rounded-2xl object-cover object-top ring-1 ring-flux-400/30"
              />
              <div>
                <h3
                  className={cn(
                    T.heading,
                    "flex items-center gap-2 text-xl sm:text-2xl"
                  )}
                >
                  {t.about.introTitle}
                  <Code2
                    className="h-5 w-5 text-flux-500 dark:text-flux-400"
                    aria-hidden="true"
                  />
                </h3>
                <p className={cn(T.faint, "font-mono text-xs")}>
                  {profile.email}
                </p>
              </div>
            </div>

            <p className={cn(T.body, "mt-6 text-pretty text-justify hyphens-auto leading-relaxed")}>
              {t.about.introText}
            </p>

            <dl className="mt-7 grid grid-cols-2 gap-3">
              {t.about.facts.map((fact, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-900/[0.07] bg-slate-900/[0.02] px-3.5 py-3 dark:border-white/[0.07] dark:bg-white/[0.02]"
                >
                  <dt
                    className={cn(
                      T.faint,
                      "text-[0.65rem] uppercase tracking-[0.14em]"
                    )}
                  >
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-display text-sm font-semibold text-slate-900 dark:text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Retrato de formatura: fecha o cartão de identidade. */}
            <figure className="relative mt-7">
              <img
                src={profile.graduationPhoto}
                alt={t.about.graduationAlt}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-2xl object-cover object-top ring-1 ring-flux-400/25"
              />
              {/* Selo do curso sobre a foto, no canto oposto ao rosto. */}
              <img
                src={profile.courseLogo}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute right-3 top-3 h-12 w-12 rounded-xl object-contain shadow-glass ring-1 ring-white/25"
              />
              <figcaption
                className={cn(T.faint, "mt-3 text-center text-xs")}
              >
                {t.about.graduationCaption}
              </figcaption>
            </figure>
          </GlassCard>
        </Reveal>

        {/* ------------------------------------------------ Trilha pessoal */}
        <RevealGroup className="flex flex-col gap-4 lg:col-span-7" gap={0.12}>
          {t.about.journey.map((item, index) => {
            const Icon = JOURNEY_ICONS[index];
            return (
              // A chave é o índice, e não o texto: com o texto, trocar de
              // idioma trocava a chave, o React remontava o cartão e ele
              // nascia no estado "hidden" de um RevealGroup que já havia
              // animado com `once: true`. O cartão ficava invisível.
              <RevealItem key={index} variant="slideRight">
                <GlassCard className="p-6 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                    {/* O primeiro cartão é o da formação: ali a logo do curso
                        diz mais do que o ícone genérico de capelo. */}
                    {index === 0 ? (
                      <img
                        src={profile.courseLogo}
                        alt={t.about.courseLogoAlt}
                        loading="lazy"
                        decoding="async"
                        className="h-11 w-11 shrink-0 rounded-xl object-contain ring-1 ring-flux-400/25"
                      />
                    ) : (
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-flux-400/25 bg-gradient-to-br from-flux-400/15 to-pulse-500/15 text-flux-600 dark:text-flux-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                    <div>
                      <h4
                        className={cn(
                          T.heading,
                          "text-lg sm:text-xl",
                          "transition-colors duration-300 group-hover/card:text-flux-600 dark:group-hover/card:text-flux-300"
                        )}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={cn(
                          T.body,
                          "mt-2.5 text-pretty text-justify hyphens-auto text-sm leading-relaxed sm:text-[0.95rem]"
                        )}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      {/* ------------------------------------------- Faixa de formação */}
      <Reveal className="mt-6">
        <GlassCard className="p-6 sm:p-7">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <img
              src={profile.courseLogo}
              alt={t.about.courseLogoAlt}
              loading="lazy"
              decoding="async"
              className="h-20 w-20 shrink-0 rounded-2xl object-contain ring-1 ring-flux-400/25"
            />
            <div className="min-w-0">
              <p
                className={cn(
                  T.faint,
                  "text-[0.65rem] uppercase tracking-[0.16em]"
                )}
              >
                {t.about.education.badge}
              </p>
              <h3 className={cn(T.heading, "mt-1.5 text-lg sm:text-xl")}>
                {t.about.education.course}
              </h3>
              <p className={cn(T.body, "mt-1 text-sm")}>
                {t.about.education.institution}
              </p>
              <p className={cn(T.faint, "mt-2 font-mono text-xs")}>
                {t.about.education.period}
              </p>
            </div>
          </div>
        </GlassCard>
      </Reveal>

      {/* -------------------------------------------------- Faixa de CTA */}
      <Reveal className="mt-6">
        <GlassCard className="overflow-hidden p-7 sm:p-10">
          <span
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-flux-400/20 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-pulse-500/20 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className={cn(T.heading, "text-2xl sm:text-3xl")}>
                {t.about.ctaTitle}
              </h3>
              <p className={cn(T.body, "mt-3 text-pretty text-justify hyphens-auto leading-relaxed")}>
                {t.about.ctaText}
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 xs:flex-row lg:w-auto">
              <Button href="#contact" icon={Handshake} size="lg">
                {t.about.ctaPrimary}
              </Button>
              <Button
                href={cvHref}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                icon={Download}
                size="lg"
              >
                {t.about.ctaSecondary}
              </Button>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
