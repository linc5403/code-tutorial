const rand = require("./randArray");

function selectionSort(a) {
  for (let i = 0; i < a.length-1; i++) {
    let min = i;
    for (let j = i+1; j < a.length; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    if (min != i) {
      let t = a[i];
      a[i] = a[min];
      a[min] = t;
    }
  }
}

let a = rand.randN(10);
selectionSort(a);
console.log(a);
