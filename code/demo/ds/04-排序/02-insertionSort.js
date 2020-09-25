const swap = require("./lib").swap;

function insertionSort(a) {
  // 从1到length-1， 将每个元素放到合适的位置
  for (let i = 1; i <= a.length - 1; i++) {
    // i表示此次需要处理的元素的索引
    let j = i;
    // j表示向左边放入的位置
    while (a[j] < a[j - 1]) {
      swap(a, j, j - 1);
      j--;
      if (j == 0) {
        //j已经移动到0号位置，它左边已经没有了
        break;
      }
    }
  }
}

module.exports = {
  sort: insertionSort,
};
