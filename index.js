import { BiggerNumber } from "./services/funcoes.js";
import { readNumber } from "./services/loops.js";
import { typeNumber } from "./services/funcoes.js";
import { getNote } from "./services/funcoes.js";
import { getAge } from "./services/funcoes.js";
import { sumArr } from "./services/arrays.js";
import { readArr } from "./services/arrays.js";
import { onlyPairs } from "./services/arrays.js";
import PromptSync from "prompt-sync";
import { largestNumber } from "./services/arrays.js";
import { searchUser } from "./services/objetos.js";
import { readUser } from "./services/loops.js";
import { readEmail } from "./services/loops.js";

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

function readArrays() {
  //Mostra a soma do itens do Array
  const arr = sumArr([3, 4, 5, 6, 7]);
  console.log(arr);

  //Mostra um nome em cada linha
  const arrr = readArr(["Marcos", "Bruno", "Thiago"]);

  //Mostra apenas números pares
  const pares = onlyPairs([2, 6, 4, 7, 3, 2, 1, 0]);
  console.log(pares);

  //Mostra o maior número de um array
  const bigNum = largestNumber([2, 6, 4, 7, -2, 2, 100, 0, 94]);
  console.log(bigNum);
}

// readArrays();

function fluxo() {
  try {
    const getUserName = readUser("DIGITE SEU NOME: ");
    const getAgeUser = readNumber("DIGITE SUA IDADE: ");

    const UserComplete = {
      name: getUserName,
      age: getAgeUser,
    };

    const users = searchUser(getUserName, UserComplete);

    console.log(users);
  } catch (erro) {
    console.log(erro.message ?? erro);
    fluxo();
  }
}

// fluxo();

function fluxoCreateUser() {
  try {
    const email = readEmail("DIGITE SEU EMAIL: ");
    console.log(email);
  } catch (erro) {
    console.log(erro.message ?? erro);
  }
}
fluxoCreateUser();
