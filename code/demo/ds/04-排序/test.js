const randN = require("./lib").randN;
// const sort = require("./01-selectionSort").sort;
// const sort = require("./02-insertionSort").sort;
// const sort = require("./03-bubbleSort").sort;
const sort = require("./04-quickSort").sort;

let a = randN(10);

console.log(a);
sort(a);
console.log(a);