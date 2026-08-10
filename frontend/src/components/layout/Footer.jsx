import React from "react";
import { Mail, MapPin } from "lucide-react";
// Marcas: lucide deprecou seus ícones de marca, então usamos react-icons.
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { cn } from "../../lib/cn";
import { T } from "../ui/primitives";
import { useI18n } from "../../i18n";
import { profile } from "../../data/profile";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const socials = [
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
    { icon: FaLinkedinIn, href: profile.linkedin.url, label: "LinkedIn" },
    { icon: FaGithub, href: profile.github.url, label: "GitHub" },
  ];

  return (
    <footer className="relative mt-10 border-t border-slate-900/[0.07] dark:border-white/[0.07]">
      <div className={cn(T.container, "py-12")}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Identidade */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src={profile.photo}
                alt=""
                width={44}
                height={44}
                loading="lazy"
                decoding="async"
                className="h-11 w-11 rounded-xl object-cover ring-1 ring-flux-400/30"
              />
              <div>
                <p className="font-display font-semibold text-slate-900 dark:text-white">
                  {profile.shortName}
                </p>
                <p className={cn(T.faint, "text-xs")}>{t.footer.role}</p>
              </div>
            </div>
            <p
              className={cn(
                T.body,
                "mt-5 text-pretty text-justify hyphens-auto text-sm italic leading-relaxed"
              )}
            >
              “{t.footer.quote}”
            </p>
            <p
              className={cn(
                T.faint,
                "mt-4 inline-flex items-center gap-1.5 text-xs"
              )}
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {t.footer.location}
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-2">
              {t.nav.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "inline-block rounded text-sm transition-colors duration-300",
                      "text-slate-600 hover:text-flux-600 dark:text-slate-400 dark:hover:text-flux-300",
                      T.ring
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes */}
          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                  T.glass,
                  "text-slate-600 transition duration-300 dark:text-slate-300",
                  "hover:-translate-y-0.5 hover:text-flux-600 hover:shadow-glow dark:hover:text-flux-300",
                  T.ring
                )}
              >
                <Icon className="h-[1.15rem] w-[1.15rem]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-900/[0.07] pt-6 text-xs sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.07]">
          <p className={T.faint}>
            © {year} {profile.shortName}. {t.footer.rights}
          </p>
          <p className={T.faint}>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
