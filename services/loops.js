import PromptSync from "prompt-sync";
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
