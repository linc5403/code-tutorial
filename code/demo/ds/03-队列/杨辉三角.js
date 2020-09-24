const Queue = require("./02-LinkedQueue").Queue;

// 打印5行的杨辉三角
let out = [];
// 先放第0行
out[0] = [1];
for (let i = 1; i <= 10; i++) {
  // 生成每一行，并把它们放到out里面去
  let input = out[i - 1]; // 获取上一行的数据
  let q = new Queue();
  // 将1这个数字入队列
  q.enqueue(1);
  // 遍历上一行，相邻两个元素加起来， 入队列
  for (let j = 0; j < input.length - 1; j++) {
    q.enqueue(input[j] + input[j + 1]);
  }
  // 将末尾的1入队列
  q.enqueue(1);

  // 将q里面的元素依次出队列，保存在数组a中
  out[i] = [];
  while (!q.isEmpty()) {
    out[i].push(q.dequeue());
  }
  // out[i] = a
}

console.log(out);
