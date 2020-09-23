const swap = require("./swap").swap;

function quick(a) {
  quickSort(a, 0, a.length);
}

// 包含begin， 不包含end
function quickSort(a, begin, end) {
  if (begin >= end) {
    return;
  }

  // 使用a[begin] 进行分组
  let i = begin + 1,
    j = end - 1;
  while (i <= j) {
    // 从左边找一个> a[begin]的
    while(a[i] <= a[begin]) {
      i++;
      if (i > j) {
        break;
      }
    }
    // 从右边找一个<=a[begin]的
    while(a[j] > a[begin]) {
      j--;
    }
    if (i <= j) {
      swap(a, i, j);
      i++;
      j--;
    }
  }
  if (j != begin) {
    swap(a, j, begin);
  }
  quickSort(a, begin, j);
  quickSort(a, j+1, end);
}

module.exports = {
  quick,
};
