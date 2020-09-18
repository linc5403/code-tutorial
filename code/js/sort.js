let a;
a = new Object();
a.data = [];
for (let i = 0; i < 10; i++) {
  a.data.push(Math.floor(Math.random() * 10));
  // a[i] = Math.floor(Math.random() * 10);
}
console.log("a :>> ", a);

a.data.forEach(element => {
  console.log('element :>> ', element);
});

// selectSort = function (a) {
function sort(a) {
  for (let i = 0; i < a.length-1; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
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
};
a.selectSort = sort;
a.selectSort(a.data);
// sort(a);

console.log("a :>> ", a);
