// https://leetcode-cn.com/problems/valid-parentheses/
const linkedStack = require("./02-链表栈");
let arg = process.argv[2];

function pair(s) {
  let stack = new linkedStack.Stack();
  for (let e of s) {
    if (["(", "[", "{"].indexOf(e) != -1) {
      // 左边括号， 入栈
      stack.push(e);
    } else {
      let top = stack.pop();
      if (top === null) {
        return false;
      }
      if (e === ")") {
        if (top !== "(") {
          return false;
        }
      } else {
        if (e.charCodeAt(0) !== top.charCodeAt(0) + 2) {
          return false;
        }
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(pair(arg));
