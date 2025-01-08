var numbers = [3, 56, 2, 48, 5];

//Mapa -Crie um novo array fazendo algo com cada item de um array.

const newNumber = numbers.map(function (x) {
  return x * 2;
});

console.log("map:" + newNumber);

//Filtro - Crie um novo array mantendo os itens que retornam verdadeiros.

const filterNumb = numbers.filter(function (num) {
  return num > 10;
});

console.log("filter:" + filterNumb);

//Reduzir - Acumule um valor fazendo algo em cada item de um array.

let reduceNumber = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator= " + accumulator);
  console.log("currentNumber= " + accumulator);
  return accumulator + currentNumber;
});

console.log("reduce:" + reduceNumber);

//Localizar - encontra o primeiro item que corresponde a um array.
//Diferente do filter ele não percorre toda a matriz, neste caso
//Ele para no primeiro numero maior que 10

const findNumber = numbers.find(function (num) {
  return num > 10;
});

console.log("find:" + findNumber);

//FindIndex - encontra o índice do primeiro item que corresponde.
// var numbers = [3, 56, 2, 48, 5]; neste caso o primeiro indeice maior que 10 é o 56
//indece 1 pois o 3 é o indece 0

const findIndexNumber = numbers.findIndex(function (num) {
  return num > 10;
});

console.log("findIndex:" + findIndexNumber);

//Desafio com String.protótipo.substring()

import emojipedia from "./emojipedia";

const newEmojipidia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipidia);
