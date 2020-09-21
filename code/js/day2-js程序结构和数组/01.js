// 得到[0, 100)的一个整数
let target = Math.floor(Math.random() * 100);
const input = document.getElementById("input");
const result = document.getElementById("result");
const times = document.getElementById("times");
// count用来保存用户猜了多少次
let count = 0;
const runButton = document.getElementById("run");
const log = document.getElementById("log");
// 光标自动移动在input里面
input.focus();

function run() {
  console.log(target);
  const guess = Number(input.value);
  console.log(guess);
  if (guess !== target) {
    if (guess > target) {
      result.innerHTML = "你猜大了";
    } else {
      result.innerHTML = "你猜小了";
    }
    times.innerHTML = "第" + (++count) + "次";
    // 对于用户猜的第一次处理一下log区的内容
    if (count === 1) {
      log.innerHTML = guess;
    } else {
      log.innerHTML += " " + guess;
    }
  } else {
    log.innerHTML += " " + guess;
    result.innerHTML = "你猜对了, 结果是" + target + "<br><br> 再来一次";
    times.innerHTML = "";

    // 重新开始， 初始化count和target
    count = 0;
    target = Math.floor(Math.random() * 100);
  }
  // 清除input框的内容
  input.value = "";
  // 让光标跑到input框里面
  input.focus();
}

runButton.addEventListener("click", run);

// 当用户在input里面输入回车时， 触发runButton的click事件
input.addEventListener("keyup", function (event) {
  console.log(event.code);
  if (event.code === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    runButton.click();
  }
});
