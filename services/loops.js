import PromptSync from "prompt-sync";
import { validateEmail } from "./validacaoEmial.js";
const prompt = PromptSync();

// TRATA O ERROR DO PROMPT DO NÚMERO VIR VAZIO OU NÃO SER NÚMERO
export function readNumber(valor) {
  while (true) {
    const value = prompt(valor);

    if (value === "" || isNaN(value)) {
      console.log("NÚMERO INVÁLIDO. TENTE NOVAMENTE");
      continue;
    }
    return Number(value);
  }
}

// TRATA O ERROR DE USER.NAME VIR VAZIO
export function readUser(valor) {
  while (true) {
    const value = prompt(valor);

    if (value === "") {
      console.log("user inválido");
      continue;
    }
    return String(value);
  }
}

export function readEmail(valor) {
  while (true) {
    const email = prompt(valor);

    try {
      return validateEmail(email);
    } catch (erro) {
      console.log(erro.message);
    }
  }
}
