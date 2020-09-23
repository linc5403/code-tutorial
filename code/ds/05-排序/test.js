// const sort = require("./bubble").bubble;
const sort = require("./quick").quick;
const rand = require("./randArray");

let a = rand.randN(10, 100);
sort(a);
console.log(a)