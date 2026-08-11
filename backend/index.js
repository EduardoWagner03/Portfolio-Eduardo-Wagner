if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: allowedOrigins,
  })
);

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

app.post("/api/contato", async (req, res) => {
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
