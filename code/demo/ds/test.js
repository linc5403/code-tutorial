let s = "OoPpsS"
let stack = [];
for (let i = 0; i < s.length; i++) {
  let top;
  if (stack.length == 0) {
    top = "0";
  } else {
    top = stack[stack.length - 1];
  }

  let code = s.charCodeAt(i);
  let codeTop = top.charCodeAt(0);
  if (Math.abs(code - codeTop) == 32) {
    stack.pop();
  } else {
    stack.push(s[i]);
  }
}

let r = stack.join("");
console.log(r);
