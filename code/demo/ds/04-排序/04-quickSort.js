const swap = require("./lib").swap;

// 合法的下标是从begin到end-1，不包含end
function quick(a, begin, end) {
  if (begin >= end - 1) {
    return;
  }

  //使用a[begin]将其分为两个部分，[begin, j) 和[j+1, end)
  // 左边的都比j小，右边的都比j大
  let j = end - 1;
  let i = begin + 1;
  while (i <= j) {
    // 找出一个i使得 a[i] > a[begin]
    while (i < end && a[i] <= a[begin]) {
      i++;
    }
    // 找出一个j使得 a[j] <= a[begin]
    while (a[j] > a[begin]) {
      j--;
    }
    // 交换i和j
    if (i < j) {
      swap(a, i, j);
      i++;
      j--;
    }
  }

  // 交换a[j] 和 a[begin]
  if (begin != j) {
    swap(a, begin, j);
  }

  // 对左边的数组再次排序
  quick(a, begin, j);
  // 对右边的数组再次排序
  quick(a, j + 1, end);
}

function quickSort(a) {
  quick(a, 0, a.length);
}

module.exports = {
  sort: quickSort,
};
