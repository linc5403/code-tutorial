const linkedStack = require("./02-链表栈");

function isOperator(c) {
  switch (c) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

// 获取命令行的参数 ‘5 1 2 + 4 * + 3 -'
let arg = process.argv[2].split(" ");

let s = new linkedStack.Stack();

for (let i of arg) {
  if (isOperator(i)) {
    // 操作数 -> 将栈里面的两个元素弹出来进行计算，结果再入栈
    let b = s.pop();
    let a = s.pop();
    let r;
    switch (i) {
      case "+":
        r = a + b;
        break;
      case "-":
        r = a - b;
        break;
      case "*":
        r = a * b;
        break;
      case "/":
        r = a / b;
        break;
    }
    s.push(r);
  } else {
    // 操作数入栈
    let n = Number(i);
    if (i.length > 0 && Number.isInteger(n)) {
      s.push(Number(i));
    }
  }
}

console.log(s.pop());
