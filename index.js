import { BiggerNumber } from "./services/funcoes.js";
import { readNumber } from "./services/loops.js";
import { typeNumber } from "./services/funcoes.js";
import { getNote } from "./services/funcoes.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function GetNumbers() {
  try {
    const number1 = readNumber("DIGITE O PRIMEIRO NUMERO: ");
    const number2 = readNumber("DIGITE O SEGUNDO NUMERO: ");
    const BigNumber = BiggerNumber(number1, number2);

    console.log("O MAIOR NÚMERO É: ", BigNumber);
  } catch (error) {
    console.log(error);
  }
}

// GetNumbers();
// console.log("_________________");

function wichNumber() {
  try {
    const number = readNumber("DIGITE UM NÚMERO: ");

    const TypeNumber = typeNumber(number);
    console.log("O NÚMERO DIGITADO É: ", TypeNumber);
  } catch (error) {
    console.log(error);
  }
}

// wichNumber();

function GetNote() {
  try {
    const Note = readNumber("DIGITE SUA NOTA: ");

    const statusNote = getNote(Note);
    console.log(statusNote);
  } catch (error) {
    console.log(error.message ?? error);
  }
}

GetNote();
