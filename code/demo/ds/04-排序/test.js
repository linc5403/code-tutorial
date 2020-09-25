const randN = require("./lib").randN;
const sort = require("./01-selectionSort").sort;

let a = randN();

console.log(a);
sort(a);
console.log(a);