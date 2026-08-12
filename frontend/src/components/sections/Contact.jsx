import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Copy,
  Mail,
  MessageSquare,
  Rocket,
  Send,
  ShieldCheck,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { cn } from "../../lib/cn";
import { Button, GlassCard, Section, SectionHeading, T } from "../ui/primitives";
import Reveal from "../ui/Reveal";
import { useI18n } from "../../i18n";
import { profile } from "../../data/profile";
import {
  LIMITS,
  sanitize,
  validateAll,
  validateField,
} from "../../lib/formValidation";

/* ------------------------------------------------------------------ *
 * Campo de formulário com label flutuante e estado de erro acessível.
 * ------------------------------------------------------------------ */
function Field({
  id,
  label,
  error,
  as = "input",
  className,
  hint,
  ...inputProps
}) {
  const Control = as;
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 dark:text-slate-400"
      >
        {label}
      </label>
      <Control
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-xl border px-4 py-3 text-sm text-slate-900 dark:text-white",
          "bg-white/70 backdrop-blur-md placeholder:text-slate-400 dark:bg-white/[0.03] dark:placeholder:text-slate-600",
          "transition duration-300 ease-smooth",
          "focus:outline-none focus:ring-2 focus:ring-flux-400/60",
          error
            ? "border-rose-400/60 focus:ring-rose-400/50"
            : "border-slate-900/10 hover:border-slate-900/20 focus:border-flux-400/60 dark:border-white/10 dark:hover:border-white/20",
          as === "textarea" && "min-h-[9rem] resize-y"
        )}
        {...inputProps}
      />
      <div className="flex min-h-[1.1rem] items-center justify-between gap-3">
        {error ? (
          <p id={`${id}-error`} role="alert" className="text-xs text-rose-500">
            {error}
          </p>
        ) : (
          <span />
        )}
        {hint && <span className={cn(T.faint, "text-xs")}>{hint}</span>}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Canal de contato — link + botão de copiar independente.
 * ------------------------------------------------------------------ */
function Channel({ icon: Icon, label, value, href, copyValue }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard indisponível (contexto não seguro): o link ainda funciona.
    }
  };

  return (
    <GlassCard className="flex items-center gap-4 p-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-flux-400/25 bg-gradient-to-br from-flux-400/15 to-pulse-500/15 text-flux-600 dark:text-flux-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={cn("min-w-0 flex-1 rounded-lg", T.ring)}
      >
        <span className="block font-display text-sm font-semibold text-slate-900 dark:text-white">
          {label}
        </span>
        <span className={cn(T.faint, "block truncate font-mono text-xs")}>
          {value}
        </span>
        <span className="absolute inset-0" aria-hidden="true" />
      </a>

      {copyValue && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`${copied ? t.contact.copied : t.contact.copy}: ${value}`}
          className={cn(
            "relative z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
            "text-slate-500 transition duration-300 hover:bg-flux-500/10 hover:text-flux-600",
            "dark:text-slate-400 dark:hover:text-flux-300",
            T.ring
          )}
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      )}

      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover/card:translate-x-1 dark:text-slate-600"
      />
    </GlassCard>
  );
}

/* ------------------------------------------------------------------ *
 * Seção de contato.
 * ------------------------------------------------------------------ */
export default function Contact() {
  const { t } = useI18n();
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // Guarda a chave da mensagem (ex.: "minName"), não o texto: assim os erros
  // já visíveis acompanham a troca de idioma.
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");

  const message = (key) => (key ? t.contact.form[key] : null);

  const update = (key) => (event) => {
    const value = sanitize(key, event.target.value);
    setValues((current) => ({ ...current, [key]: value }));
    // A confirmação de envio não expira sozinha; ela sai de cena quando a
    // pessoa começa a escrever a próxima mensagem.
    setStatus((current) => (current === "sent" ? "idle" : current));
    // Só revalida em tempo real depois que o campo já foi visitado, para o
    // erro não aparecer enquanto a pessoa ainda está digitando pela primeira
    // vez. Depois disso, some assim que o valor fica válido.
    if (touched[key])
      setErrors((current) => ({ ...current, [key]: validateField(key, value) }));
  };

  const handleBlur = (key) => () => {
    setTouched((current) => ({ ...current, [key]: true }));
    setErrors((current) => ({
      ...current,
      [key]: validateField(key, values[key]),
    }));
  };

  const openMailtoFallback = () => {
    const body = `${values.message}\n\n--\n${values.name} · ${values.email}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(nextErrors).length) {
      // Leva o foco ao primeiro campo com problema, em vez de deixar a pessoa
      // procurar onde está o erro.
      const first = ["name", "email", "subject", "message"].find(
        (field) => nextErrors[field]
      );
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contato`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Falha no envio");
      setStatus("sent");
      // Limpa o formulário: sem isso a mensagem continua na tela depois do
      // envio, o que faz parecer que nada aconteceu e convida a pessoa a
      // enviar de novo.
      setValues({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});
      return;
    } catch {
      // Backend indisponível: cai para o cliente de email do visitante.
      openMailtoFallback();
      setStatus("fallback");
    }

    window.setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <Section id="contact">
      <SectionHeading
        badge={t.contact.badge}
        badgeIcon={MessageSquare}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* ------------------------------------------------- Canais diretos */}
        <Reveal variant="slideLeft" className="flex flex-col gap-4 lg:col-span-5">
          <GlassCard interactive={false} className="overflow-hidden p-6 sm:p-7">
            <span
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-flux-400/20 blur-3xl"
            />
            <div className="relative">
              <h3 className={cn(T.heading, "text-2xl")}>
                {t.contact.introTitle}
              </h3>
              <p className={cn(T.body, "mt-3 text-pretty text-justify hyphens-auto leading-relaxed")}>
                {t.contact.introText}
              </p>

              <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span
                    aria-hidden="true"
                    className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 motion-safe:animate-pulse-ring"
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  {t.contact.available}
                </span>
              </div>
            </div>
          </GlassCard>

          <Channel
            icon={Mail}
            label={t.contact.methods.email}
            value={profile.email}
            href={`mailto:${profile.email}`}
            copyValue={profile.email}
          />
          <Channel
            icon={FaLinkedinIn}
            label={t.contact.methods.linkedin}
            value={profile.linkedin.handle}
            href={profile.linkedin.url}
          />
          <Channel
            icon={FaGithub}
            label={t.contact.methods.github}
            value={profile.github.handle}
            href={profile.github.url}
          />
          <Channel
            icon={Rocket}
            label={t.contact.methods.company}
            value={profile.company.handle}
            href={profile.company.url}
          />
        </Reveal>

        {/* ------------------------------------------------------ Formulário */}
        <Reveal variant="slideRight" className="lg:col-span-7">
          <GlassCard interactive={false} className="h-full p-6 sm:p-8">
            <h3 className={cn(T.heading, "text-xl sm:text-2xl")}>
              {t.contact.formTitle}
            </h3>

            <form onSubmit={handleSubmit} noValidate className="mt-6">
              <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  label={t.contact.form.name}
                  placeholder={t.contact.form.namePlaceholder}
                  value={values.name}
                  onChange={update("name")}
                  onBlur={handleBlur("name")}
                  error={message(errors.name)}
                  autoComplete="name"
                  maxLength={LIMITS.name.max}
                  spellCheck={false}
                />
                <Field
                  id="contact-email"
                  type="email"
                  label={t.contact.form.email}
                  placeholder={t.contact.form.emailPlaceholder}
                  value={values.email}
                  onChange={update("email")}
                  onBlur={handleBlur("email")}
                  error={message(errors.email)}
                  autoComplete="email"
                  inputMode="email"
                  maxLength={LIMITS.email.max}
                  spellCheck={false}
                  autoCapitalize="none"
                />
              </div>

              <Field
                id="contact-subject"
                label={t.contact.form.subject}
                placeholder={t.contact.form.subjectPlaceholder}
                value={values.subject}
                onChange={update("subject")}
                onBlur={handleBlur("subject")}
                error={message(errors.subject)}
                maxLength={LIMITS.subject.max}
              />

              <Field
                as="textarea"
                id="contact-message"
                rows={6}
                label={t.contact.form.message}
                placeholder={t.contact.form.messagePlaceholder}
                value={values.message}
                onChange={update("message")}
                onBlur={handleBlur("message")}
                error={message(errors.message)}
                maxLength={LIMITS.message.max}
                hint={`${values.message.length}/${LIMITS.message.max} ${t.contact.form.counter}`}
              />

              <Button
                type="submit"
                size="lg"
                className="mt-2 w-full"
                icon={status === "sent" || status === "fallback" ? Check : Send}
                loading={status === "sending"}
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? t.contact.form.sending
                  : status === "sent" || status === "fallback"
                    ? t.contact.form.sent
                    : t.contact.form.submit}
              </Button>

              <AnimatePresence>
                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    role="status"
                    aria-live="polite"
                    className="mt-3 flex items-start gap-2.5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                    />
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">
                      {t.contact.form.sentNote}
                    </p>
                  </motion.div>
                )}

                {status === "fallback" && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    role="status"
                    className="mt-3 text-center text-xs text-emerald-600 dark:text-emerald-400"
                  >
                    {t.contact.form.fallbackNote}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            <p
              className={cn(
                T.faint,
                "mt-6 flex items-start gap-2 text-xs leading-relaxed"
              )}
            >
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-flux-500 dark:text-flux-400"
                aria-hidden="true"
              />
              {t.contact.privacy}
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
