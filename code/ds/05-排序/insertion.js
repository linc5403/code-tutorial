const swap = require("./swap").swap;

function insertionSort(a) {
  // i 从1开始， 到length-1， 将a[i]放到合适位置
  for (let i = 1; i < a.length; i++) {
    let j = i;
    while (j > 0 && a[j] < a[j - 1]) {
      swap(a, j, j - 1);
      j--;
    }
  }
}

module.exports = {
  insertion: insertionSort,
};
