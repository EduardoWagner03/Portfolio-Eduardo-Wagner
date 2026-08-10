import React from "react";
import {
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  MonitorSmartphone,
  Server,
  ShoppingCart,
  Sparkles,
  Wrench,
} from "lucide-react";
import { cn } from "../../lib/cn";
import { GlassCard, Section, SectionHeading, Tag, T } from "../ui/primitives";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { skillCategories, skills } from "../../data/projectsData";
import { useI18n } from "../../i18n";

const ICONS = {
  Code2,
  Server,
  Database,
  Cloud,
  MonitorSmartphone,
  Wrench,
  GitBranch,
  Sparkles,
  ShoppingCart,
};

export default function Skills() {
  const { t } = useI18n();

  return (
    <Section id="skills">
      <SectionHeading
        badge={t.skills.badge}
        badgeIcon={Cpu}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      {/* Bento assimétrico: categorias densas ocupam duas colunas. */}
      <RevealGroup
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        gap={0.07}
      >
        {skillCategories.map(({ key, icon, accent, span, learning }) => {
          const Icon = ICONS[icon] ?? Code2;
          const items = skills[key] ?? [];
          return (
            <RevealItem
              key={key}
              variant="scaleIn"
              className={cn("min-w-0", span)}
            >
              <GlassCard className="flex h-full flex-col p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                      accent === "pulse"
                        ? "border-pulse-400/25 bg-pulse-400/10 text-pulse-600 dark:text-pulse-300"
                        : "border-flux-400/25 bg-flux-400/10 text-flux-600 dark:text-flux-300"
                    )}
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                  </span>
                  <h3
                    className={cn(
                      T.heading,
                      "text-base leading-tight sm:text-lg"
                    )}
                  >
                    {t.skills.categories[key]}
                  </h3>
                  {learning && (
                    <span className="relative ml-auto flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-pulse-400 motion-safe:animate-pulse-ring" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-pulse-400" />
                    </span>
                  )}
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li key={skill}>
                      <Tag accent={accent}>{skill}</Tag>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "block h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-smooth group-hover/card:scale-x-100",
                      accent === "pulse"
                        ? "bg-gradient-to-r from-pulse-400/70 to-transparent"
                        : "bg-gradient-to-r from-flux-400/70 to-transparent"
                    )}
                  />
                </div>
              </GlassCard>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
