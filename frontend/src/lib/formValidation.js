// Regras de validação do formulário de contato.
//
// A estratégia tem duas camadas:
//
// 1. `sanitize` roda a cada tecla e corrige o valor no próprio campo, para o
//    visitante nunca conseguir digitar algo inválido (número no nome, espaço
//    no email, maiúscula no email). É correção silenciosa, sem mensagem.
// 2. `validateField` roda no blur e no envio, e devolve a chave da mensagem
//    de erro em `contact.form` do dicionário de idioma. Cuida do que não dá
//    para impedir na digitação: campo vazio, curto demais, email malformado.
//
// As mensagens não moram aqui: este módulo devolve chaves, e o componente as
// traduz. Assim as regras continuam iguais em português e em inglês.

export const LIMITS = {
  name: { min: 2, max: 60 },
  email: { max: 254 },
  subject: { min: 3, max: 100 },
  message: { min: 20, max: 1000 },
};

// Letras (com acento), espaço, apóstrofo, hífen e ponto: cobre "Ana", "João
// D'Ávila", "Maria-Clara" e "J. Silva". Fora disso, não é nome.
const NAME_ALLOWED = /[^\p{L}\p{M}\s'.-]/gu;

// Aceita o formato usual sem tentar implementar o RFC inteiro: um local, uma
// arroba, um domínio com pelo menos um ponto e um TLD de duas letras ou mais.
const EMAIL = /^[a-z0-9._%+-]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/;

const collapseSpaces = (value) => value.replace(/\s{2,}/g, " ");

/**
 * Normaliza o valor digitado. Roda a cada tecla, então nunca corta espaço à
 * direita: isso impediria o visitante de separar duas palavras.
 */
export function sanitize(field, raw) {
  switch (field) {
    case "name":
      return collapseSpaces(raw.replace(NAME_ALLOWED, ""))
        .replace(/^\s+/, "")
        .slice(0, LIMITS.name.max);

    case "email":
      // Email não tem espaço nem maiúscula: o servidor trata o domínio como
      // case-insensitive, e minúsculo evita duplicidade boba no destinatário.
      return raw.replace(/\s+/g, "").toLowerCase().slice(0, LIMITS.email.max);

    case "subject":
      return collapseSpaces(raw).replace(/^\s+/, "").slice(0, LIMITS.subject.max);

    case "message":
      return raw.slice(0, LIMITS.message.max);

    default:
      return raw;
  }
}

/**
 * Valida um campo já sanitizado e devolve a chave da mensagem, ou null.
 */
export function validateField(field, value) {
  const trimmed = value.trim();

  switch (field) {
    case "name": {
      if (!trimmed) return "required";
      if (trimmed.replace(/[^\p{L}]/gu, "").length < LIMITS.name.min)
        return "minName";
      return null;
    }

    case "email": {
      if (!trimmed) return "required";
      if (!EMAIL.test(trimmed)) return "invalidEmail";
      // ".." não é rejeitado pela expressão acima e quase sempre é erro de
      // digitação ("gmail..com").
      if (trimmed.includes("..")) return "invalidEmail";
      return null;
    }

    case "subject": {
      if (!trimmed) return "required";
      if (trimmed.length < LIMITS.subject.min) return "minSubject";
      return null;
    }

    case "message": {
      if (!trimmed) return "required";
      if (trimmed.length < LIMITS.message.min) return "minMessage";
      return null;
    }

    default:
      return null;
  }
}

/**
 * Valida o formulário inteiro. Devolve { campo: chaveDaMensagem }.
 */
export function validateAll(values) {
  return Object.keys(values).reduce((errors, field) => {
    const key = validateField(field, values[field]);
    if (key) errors[field] = key;
    return errors;
  }, {});
}
