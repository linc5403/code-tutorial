const swap = require("./lib").swap;

function bubbleSort(a) {
  // j表示每次冒泡结束的那个元素
  // j表示此次冒泡排好序的那个位置
  // j表示无序序列的最大下标，j后面的都是有序的了，不用处理
  for (let j = a.length - 1; j > 0; j--) {
    // i表示从0到j的一次冒泡
    let swapped = false;
    for (let i = 0; i < j; i++) {
      // 如果一次交换都没有发生，说明这个序列一定是有序的了
      if (a[i] > a[i + 1]) {
        swap(a, i, i + 1);
        swapped = true;
      }
    }
    console.log(a);
    if (swapped == false) {
      break;
    }
  }
}

module.exports = {
  sort: bubbleSort,
};
