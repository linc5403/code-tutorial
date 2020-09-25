const swap = require("./lib").swap;

function selectionSort(a) {
  // i表示未排序的元素开始的下标
  // 对于从a[i]到a[length-1]这些未排序的数组， 选择一个最小的和i进行交换
  for (let i = 0; i < a.length - 1; i++) {
    // 1. 选出最小的元素
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    // 2. 和a[i] 交换
    if (i != min) {
      // i不是最小的元素，才需要交换
      // 交换min和i
      swap(a, i, min);
    }
  }
}

module.exports = {
  sort: selectionSort,
}
