let target = Math.floor(Math.random() * 100);
const input = document.getElementById("input");
const result = document.getElementById("result");
const times = document.getElementById("times");
let count = 0;
const runButton = document.getElementById("run");
const log = document.getElementById("log");
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
    times.innerHTML = "第" + ++count + "次";
    if (count === 1) {
      log.innerHTML = guess;
    } else {
      log.innerHTML += " " + guess;
    }
  } else {
    log.innerHTML += "泰 " + guess;
    result.innerHTML = "你猜对了, 结果是" + target + "<br><br> 再来一次";
    times.innerHTML = "";

    count = 0;
    target = Math.floor(Math.random() * 100);
  }
  input.value = "";
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
