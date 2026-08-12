if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

const app = express();

// O Cloud Run fica atrás de um proxy: sem isso o express enxerga o IP do
// balanceador em vez do IP real, e o rate limit valeria para o mundo inteiro
// como se fosse um único visitante.
app.set("trust proxy", 1);

// Corpo pequeno de propósito: o formulário manda cerca de 1 KB, então não há
// motivo para aceitar o padrão de 100 KB.
app.use(express.json({ limit: "16kb" }));

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: allowedOrigins,
  })
);

/**
 * Limite de envio por IP.
 *
 * O CORS não protege este endpoint: ele é uma regra que o navegador respeita,
 * e qualquer script ou curl a ignora. Como a URL da API está no JavaScript do
 * site, ela é pública por definição. Sem limite, um bot esgota a cota de envio
 * da conta Gmail e pode fazer o Google suspendê-la por abuso.
 */
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Muitas mensagens seguidas. Tente novamente mais tarde." },
});

const LIMITS = {
  name: { min: 2, max: 60 },
  email: { max: 254 },
  subject: { min: 3, max: 100 },
  message: { min: 20, max: 1000 },
};

const EMAIL_RE = /^[a-z0-9._%+-]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/;

function validatePayload(body) {
  const { name, email, subject, message } = body || {};

  if (typeof name !== "string" || name.trim().length < LIMITS.name.min || name.length > LIMITS.name.max)
    return "Nome inválido.";
  if (typeof email !== "string" || email.length > LIMITS.email.max || !EMAIL_RE.test(email))
    return "Email inválido.";
  if (typeof subject !== "string" || subject.trim().length < LIMITS.subject.min || subject.length > LIMITS.subject.max)
    return "Assunto inválido.";
  if (typeof message !== "string" || message.trim().length < LIMITS.message.min || message.length > LIMITS.message.max)
    return "Mensagem inválida.";

  return null;
}

let transporter;
function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }
  return transporter;
}

app.post("/api/contato", contactLimiter, async (req, res) => {
  // Campo armadilha: fica escondido no formulário, então pessoa nenhuma o
  // preenche. Bot que despeja texto em todos os campos se entrega aqui.
  // Responde 200 de propósito: avisar que foi barrado ensina o bot a contornar.
  if (typeof req.body?.website === "string" && req.body.website.trim() !== "") {
    console.warn("Envio descartado pelo honeypot.");
    return res.status(200).json({ ok: true });
  }

  const validationError = validatePayload(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { name, email, subject, message } = req.body;

  try {
    await getTransporter().sendMail({
      from: `"Portfolio Eduardo Wagner" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO || process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `${message}\n\n--\n${name} · ${email}`,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Falha ao enviar email de contato:", error);
    return res.status(502).json({ error: "Falha ao enviar a mensagem." });
  }
});

app.get("/health", (_req, res) => res.status(200).send("ok"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Backend do contato rodando na porta ${port}`);
});
