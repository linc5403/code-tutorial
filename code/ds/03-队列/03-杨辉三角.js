const queue = require("./01-数组队列");

function triangle(n) {
  if (n < 1) {
    return null;
  }
  let out = [];
  out[0] = [1];
  for (let i = 2; i <= n; i++) {
    // 构建第i行的数组
    let lineI = new queue.ArrayQueue();
    lineI.enqueue(1);
    let lineI_1 = out[i-2];
    for (let j = 0; j < lineI_1.length-1; j++) {
      lineI.enqueue(lineI_1[j] + lineI_1[j+1]);
    }
    lineI.enqueue(1);
    out[i-1] = lineI.array;
  }
  return out;
}


let n = Number(process.argv[2]);
let out = triangle(n);
console.log(out);
