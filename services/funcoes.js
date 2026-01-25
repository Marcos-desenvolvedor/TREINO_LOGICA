// VERIFICA SE UM NÚMERO E MAIOR QUE O OUTRO
export function BiggerNumber(n1, n2) {
  const num1 = Number(n1);
  const num2 = Number(n2);

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Valores inválidos");
  }

  const Big = num1 >= num2 ? num1 : num2;
  return Big;
}

//VERIFICA SE O NÚMERO E PAR OU ÍMPAR
export function typeNumber(n) {
  const number = Number(n);

  if (isNaN(number)) {
    throw new Error("Valor inválido");
  }

  const numberType = number % 2 === 0 ? "Par" : "Ímpar";
  return numberType;
}

export function getNote(note) {
  const Note = Number(note);

  if (Note < 0 || Note > 10) {
    throw new Error("Nota inválida");
  }

  let status = "";

  if (Note > 6) {
    status = "APROVADO";
  } else if (Note > 4) {
    status = "RECUPERAÇÃO";
  } else {
    status = "REPROVADO";
  }

  return status;
}
