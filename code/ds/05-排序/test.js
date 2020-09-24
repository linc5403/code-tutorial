// const sort = require("./bubble").bubble;
const sort = require("./quick").quick;
// const sort = require("./insertion").insertion;
// const sort = require("./selection").selectionSort;
const rand = require("./randArray");

let a = rand.randN(100, 100);
console.log(a);
sort(a);
console.log(a)