import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Wrench,
} from "lucide-react";
import { cn } from "../../lib/cn";
import { GlassCard, SectionHeading, Tag, T } from "../ui/primitives";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { skillCategories, skills } from "../../data/projectsData";
import { useI18n } from "../../i18n";
import { useClientMediaQuery } from "../../lib/hooks";
import { EASE_OUT_STRONG } from "../../lib/motion";

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
  ShieldCheck,
};

// Mesma regra da trilha de projetos: a cena presa só cabe em tela larga e
// com altura suficiente para o cartão mais cheio (Frontend).
const SCENE_QUERY = "(min-width: 1024px) and (min-height: 700px)";

const COUNT = skillCategories.length;
const STEP = 360 / COUNT;
const CARD_WIDTH = 480; // 30rem
// Raio do cilindro que acomoda os cartões lado a lado, mais uma folga.
const RADIUS = Math.round(CARD_WIDTH / 2 / Math.tan(Math.PI / COUNT)) + 40;

/**
 * Converte o progresso do scroll em "capítulo" com pausa: em cada capítulo
 * o cilindro fica parado por um trecho e só depois gira até o próximo. Sem
 * essa pausa ele nunca assentava num cartão e a leitura ficava impossível.
 */
function chapterAt(progress) {
  const u = Math.min(Math.max(progress, 0), 1) * (COUNT - 1);
  const index = Math.floor(u);
  const t = Math.min(Math.max((u - index - 0.3) / 0.4, 0), 1);
  return index + t * t * (3 - 2 * t);
}

function SkillCard({ category, className, flat = false }) {
  const { t } = useI18n();
  const { key, icon, accent, learning } = category;
  const Icon = ICONS[icon] ?? Code2;
  const items = skills[key] ?? [];

  return (
    <GlassCard
      tilt={flat}
      className={cn(
        "flex h-full flex-col",
        flat ? "p-5 sm:p-6" : "p-8",
        // No cilindro o vidro vira superfície opaca: dez desfoques de fundo
        // girando a cada quadro derrubavam a taxa de quadros.
        !flat &&
          "bg-white/95 backdrop-blur-none dark:bg-ink-850/95 dark:shadow-glow",
        className
      )}
    >
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
            flat ? "text-base leading-tight sm:text-lg" : "text-2xl leading-tight"
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

      {/* Os chips entram pela esquerda em cascata, depois do cartão. */}
      <RevealGroup
        as="ul"
        className="mt-5 flex flex-wrap gap-2"
        gap={0.035}
        delay={0.25}
      >
        {items.map((skill) => (
          <RevealItem as="li" key={skill} variant="cascadeLeft">
            <Tag
              accent={accent}
              className={flat ? undefined : "px-3.5 py-2 text-sm"}
            >
              {skill}
            </Tag>
          </RevealItem>
        ))}
      </RevealGroup>
    </GlassCard>
  );
}

/**
 * O quanto a face está de frente para a câmera: 1 na frente, 0 a partir do
 * primeiro vizinho. Os vizinhos ficam a um passo (36°), então o corte fica
 * no cosseno desse ângulo.
 */
function frontness(angle, rotation) {
  const facing = Math.cos(((angle + rotation) * Math.PI) / 180);
  const neighbor = Math.cos((STEP * Math.PI) / 180);
  return Math.min(Math.max((facing - neighbor) / (1 - neighbor), 0), 1);
}

/**
 * Face do cilindro. Só a da frente fica nítida: as que já passaram ou ainda
 * vão chegar ficam foscas e apagadas, como fundo da cena, para não
 * disputarem atenção com o cartão em foco nem com o título à esquerda.
 */
function CylinderFace({ category, index, rotation }) {
  const angle = index * STEP;
  const opacity = useTransform(rotation, (r) => {
    const facing = Math.cos(((angle + r) * Math.PI) / 180);
    const visible = Math.max(0, (facing - 0.15) / 0.85);
    return visible * (0.35 + 0.65 * frontness(angle, r));
  });
  const filter = useTransform(
    rotation,
    (r) => `blur(${((1 - frontness(angle, r)) * 8).toFixed(2)}px)`
  );

  return (
    <motion.div
      className="absolute left-0 right-0 top-1/2 [backface-visibility:hidden]"
      style={{
        opacity,
        filter,
        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px) translateY(-50%)`,
      }}
    >
      <SkillCard category={category} />
    </motion.div>
  );
}

function SkillsScene() {
  const { t } = useI18n();
  const pinRef = React.useRef(null);
  const [active, setActive] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.0005,
  });
  const chapter = useTransform(progress, chapterAt);
  const rotation = useTransform(chapter, (c) => -c * STEP);

  useMotionValueEvent(chapter, "change", (c) => {
    const next = Math.round(c);
    setActive((current) => (current === next ? current : next));
  });

  // Os pontos levam direto ao capítulo: calcula o scroll que corresponde
  // ao meio da pausa daquele cartão.
  const goTo = (index) => {
    const el = pinRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const range = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (index / (COUNT - 1)) * range });
  };

  const current = skillCategories[active];
  const total = String(COUNT).padStart(2, "0");

  return (
    <div
      ref={pinRef}
      className="relative mt-10"
      style={{ height: `calc(100vh + ${COUNT * 45}vh)` }}
    >
      <div className="sticky top-0 h-screen overflow-clip pt-20">
        <div
          // Mais largo que o container padrão: o cilindro precisa de espaço
          // para os cartões laterais aparecerem inteiros.
          className="mx-auto grid h-full w-full max-w-[96rem] grid-cols-12 items-center gap-8 px-8"
        >
          {/* ------------------------------------------ Texto do capítulo */}
          <div className="relative z-10 col-span-3">
            <p className="font-mono text-xs tabular-nums text-slate-500">
              <span className="text-slate-900 dark:text-white">
                {String(active + 1).padStart(2, "0")}
              </span>
              {` / ${total}`}
            </p>
            <div className="mt-4 [perspective:900px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h3
                  key={current.key}
                  className={cn(
                    T.heading,
                    "origin-bottom text-balance text-4xl leading-[1.02] xl:text-6xl"
                  )}
                  initial={{ opacity: 0, rotateX: -90, y: 30 }}
                  animate={{
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                    transition: { duration: 0.6, ease: EASE_OUT_STRONG },
                  }}
                  exit={{
                    opacity: 0,
                    rotateX: 90,
                    y: -30,
                    transition: { duration: 0.25 },
                  }}
                >
                  {t.skills.categories[current.key]}
                </motion.h3>
              </AnimatePresence>
            </div>
            <p className={cn(T.body, "mt-4 font-mono text-sm")}>
              {(skills[current.key] ?? []).length} {t.skills.count}
            </p>
            <div className="mt-8 h-px w-40 bg-slate-900/10 dark:bg-white/10">
              <motion.div
                className="h-full origin-left bg-gradient-to-r from-flux-400 to-pulse-500"
                style={{ scaleX: progress }}
              />
            </div>
          </div>

          {/* ------------------------------------------------- Cilindro 3D */}
          <div className="relative col-span-9 h-[40rem] [perspective:2600px]">
            <motion.div
              className="absolute left-1/2 top-1/2 h-0 [transform-style:preserve-3d]"
              style={{
                width: CARD_WIDTH,
                marginLeft: -CARD_WIDTH / 2,
                z: -RADIUS,
                rotateY: rotation,
              }}
            >
              {skillCategories.map((category, index) => (
                <CylinderFace
                  key={category.key}
                  category={category}
                  index={index}
                  rotation={rotation}
                />
              ))}
            </motion.div>
          </div>

          {/* ------------------------------------------ Pontos de navegação */}
          <nav
            aria-label={t.skills.title}
            // Presos à borda da tela, fora da grade: com os cartões maiores, o
            // lateral direito passava por cima dos pontos.
            className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3"
          >
            {skillCategories.map((category, index) => (
              <button
                key={category.key}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`${t.skills.goTo}: ${t.skills.categories[category.key]}`}
                aria-current={index === active ? "step" : undefined}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border transition duration-300 ease-smooth",
                  index === active
                    ? "scale-125 border-flux-400 bg-flux-400 shadow-glow"
                    : "border-slate-400/60 hover:border-flux-400 dark:border-white/30",
                  T.ring
                )}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const scene = useClientMediaQuery(SCENE_QUERY) && !reduce;

  return (
    <section id="skills" className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className={T.container}>
        <SectionHeading
          index="02"
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />
      </div>

      {scene ? (
        <SkillsScene />
      ) : (
        // Celular, tela baixa ou movimento reduzido: o bento de sempre, com
        // as categorias densas ocupando duas colunas.
        <div className={T.container}>
          <RevealGroup
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            gap={0.07}
          >
            {skillCategories.map((category) => (
              <RevealItem
                key={category.key}
                variant="flipUp"
                className={cn("min-w-0", category.span)}
              >
                <SkillCard category={category} flat />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      )}
    </section>
  );
}
