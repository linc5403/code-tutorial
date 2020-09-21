const input = document.getElementById("input");
const result = document.getElementById("result");
const runButton = document.getElementById("run");
input.focus();

function pi(last) {
  // 1 - 1/3 + 1/5 - 1/7 + 1/9 .....
  let sum = 0,
    item = 1,
    fenMu = 1;
  let flag = 1; // 使用flag来表示正负
  // 1 > 0.0001
  // 1/3 > 0.0001
  // 当这一项的值大于last时，将这一项的值加到sum里面
  // 否则结束运算
  while (Math.abs(item) >= last) {
    sum += item;
    // 计算下一项的值
    fenMu = fenMu + 2;
    flag = -flag;
    item = flag / fenMu;
  }
  sum += item;
  return sum * 4;
}

// 点击run按钮时执行的函数
function run() {
  // 获取用户输入
  const lastItem = Number(input.value);
  console.log(lastItem);
  // 实现功能

  // 输出
  result.innerHTML = "last = " + lastItem + "<br>" + "Pi = " + pi(lastItem);

  // 重置输入
  input.value = null;
  input.focus();
}

runButton.addEventListener("click", run);

input.addEventListener("keyup", function (event) {
  console.log(event.code);
  if (event.code === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    runButton.click();
  }
});
