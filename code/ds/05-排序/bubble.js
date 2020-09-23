const swap = require("./swap").swap;

function bubble(a) {
  // 遍历n-1轮，每次将一个最大的元素排到最后去
  for (let i = 0; i < a.length - 1; i++) {
    let order = true;
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        swap(a, j, j + 1);
        order = false;
      }
    }
    if (order == true) {
      break;
    }
    console.log(a);
  }
}

module.exports = {
  bubble,
};
