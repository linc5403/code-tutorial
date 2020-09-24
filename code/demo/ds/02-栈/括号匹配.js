function pair(s) {
  let stack = [];
  // 遍历s中的每个位置
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      // 如果是左括号 -> 入栈
      stack.push(s[i]);
    } else {
      // 右括号 -> 出栈, 判断是否匹配
      if (stack.length == 0) {
        // 如果栈是空的，说明当前的右括号无法匹配
        return false;
      }
      let t = stack.pop();
      // 判断t(左边的括号)和s[i]的匹配关系
      if (
        (t == "(" && s[i] == ")") ||
        (t == "[" && s[i] == "]") ||
        (t == "{" && s[i] == "}")
      ) {
        // 匹配成功
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
}

console.log(pair("((()){}"))
