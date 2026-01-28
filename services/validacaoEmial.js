export function validateEmail(email) {
  if (typeof email !== "string") {
    throw new Error("Email enválido");
  }

  const value = email.trim();

  if (!value.includes("@") || !value.includes(".")) {
    throw new Error("Formato de email inválido");
  }

  if (value.includes(" ")) {
    throw new Error("Email não pode conter espaços");
  }

  return value;
}
