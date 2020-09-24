// 以下这一行是在Node.js里面用的，作用是引入其他的js
const Stack = require("./02-LinkedStack").Stack;

// 5 1 2 + 4 * + 3 -

let input = "5 1 2 + 4 * + 3 -";

// 1. 将字符串转为成数组
let array = input.split(" ");
// ["5", "1", "2", "+", "4", "*", "+", "3", "-"]

// 2. 遍历该数组， 处理其中的每个元素
// 2.1 如果是数字 -> 入栈； 如果是符号 -> 取两个出栈， 计算， 结果入栈
let stack = new Stack();
for (let i = 0; i < array.length; i++) {
  // array[i] 就是第i个元素
  let num = Number(array[i]);
  if (Number.isNaN(num)) {
    // 它不是一个数字; + - * /
    // 取两个数字出来
    let right = stack.pop();
    let left = stack.pop();
    let result;
    switch (array[i]) {
      case "+": result = left + right; break;
      case "-": result = left - right; break;
      case "*": result = left * right; break;
      case "/": result = left / right; break;
      default: console.log("无法处理" + array[i]);
    }
    stack.push(result);
  } else {
    // 是一个数字
    stack.push(num);
  }
}

console.log("result: " + stack.pop());