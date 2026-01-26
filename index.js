import { BiggerNumber } from "./services/funcoes.js";
import { readNumber } from "./services/loops.js";
import { typeNumber } from "./services/funcoes.js";
import { getNote } from "./services/funcoes.js";
import { getAge } from "./services/funcoes.js";
import { sumArr } from "./services/arrays.js";
import { readArr } from "./services/arrays.js";
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

// GetNote();

function GetAgeUser() {
  try {
    const Age = readNumber("DIGITE SUA IDADE: ");

    const statusAge = getAge(Age);

    console.log("ELE É: ", statusAge);
  } catch (error) {
    console.log(error.message ?? error);
  }
}

const arr = sumArr([3, 4, 5, 6, 7]);

const arrr = readArr(["Marcos", "Bruno", "Thiago"]);
