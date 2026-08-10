import React from "react";
import { Mail, MapPin } from "lucide-react";
// Marcas: lucide deprecou seus ícones de marca, então usamos react-icons.
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { cn } from "../../lib/cn";
import { T } from "../ui/primitives";
import { useI18n } from "../../i18n";
import { profile } from "../../data/profile";

// O rodapé não repete a navegação: o header é fixo e acompanha a rolagem, e
// o botão de voltar ao topo já cobre o retorno ao início.
export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const socials = [
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
    { icon: FaLinkedinIn, href: profile.linkedin.url, label: "LinkedIn" },
    { icon: FaGithub, href: profile.github.url, label: "GitHub" },
  ];

  return (
    <footer className="relative mt-8 border-t border-flux-400/30 dark:border-flux-400/25">
      {/* Filete em gradiente sobre a borda, para destacá-la */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-flux-400 to-transparent"
      />
      {/* Brilho suave descendo da borda */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-flux-400/[0.08] to-transparent"
      />

      <div className={cn(T.container, "relative py-8")}>
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          {/* Identidade: foto, depois nome/cargo e, ao lado deles, a frase
              centralizada verticalmente na altura desse par de linhas. */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <div className="flex items-center gap-4">
              <img
                src={profile.photo}
                alt=""
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
                className="h-12 w-12 shrink-0 rounded-xl object-cover object-top ring-1 ring-flux-400/30"
              />
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                  {profile.shortName}
                </p>
                <p className={cn(T.faint, "text-xs")}>{t.footer.role}</p>
              </div>
            </div>

            <span
              aria-hidden="true"
              className="hidden h-9 w-px shrink-0 bg-gradient-to-b from-transparent via-flux-400/60 to-transparent sm:block"
            />

            <p
              className={cn(
                T.body,
                "max-w-md text-pretty text-xs italic leading-relaxed"
              )}
            >
              “{t.footer.quote}”
            </p>
          </div>

          {/* Redes */}
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-xl",
                  T.glass,
                  "text-slate-600 transition duration-300 dark:text-slate-300",
                  "hover:-translate-y-0.5 hover:text-flux-600 hover:shadow-glow dark:hover:text-flux-300",
                  T.ring
                )}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* A localização desce para a barra inferior: assim a frase pode ficar
            centralizada no par nome/cargo, sem uma terceira linha puxando o
            alinhamento para baixo. */}
        {/* Separador com o mesmo acento da borda superior */}
        <div
          aria-hidden="true"
          className="mt-6 h-px bg-gradient-to-r from-transparent via-flux-400/45 to-transparent"
        />

        <div className="flex flex-col gap-1.5 pt-4 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className={T.faint}>
            © {year} {profile.shortName}. {t.footer.rights}
          </p>
          <p className={cn(T.faint, "inline-flex items-center gap-1.5")}>
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {t.footer.location}
          </p>
          <p className={T.faint}>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
