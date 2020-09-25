// 交换数组a中的i和j元素
function swapArray(a, i, j) {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
}

// 生成一个随机数组
function randN(n=10, limit=100) {
  let a = [];
  for(let i = 0; i < n; i++){
    a.push(Math.floor(Math.random() * limit));
  }
  return a;
}

module.exports = {
  swap: swapArray,
  randN: randN,
}