const input = document.getElementById("input");
const result = document.getElementById("result");
const runButton = document.getElementById("run");
input.focus();

function reverse(n) {
  let result = "";
  do {
    result += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);
  // 对于一个负数, 使用 n!==0 的判断会导致死循环, 请问为什么?
  // 再进一步想一下如果想处理负数, 可以怎么实现
  // } while( n !== 0);

  // 以下这种方式是使用一个数字来保存输出, 但是对于1000这样的输入会输出什么? 请试一试
  // let result;
  // while(n > 0) {
  //   result = result * 10 + n % 10;
  //   n = Math.floor(n / 10);
  // }
  return result;
}

function run() {
  const inNum = Number(input.value);
  let output = reverse(inNum);
  result.innerHTML = inNum + "的逆序是" + output;
  input.value = null;
  input.focus();
}

runButton.addEventListener("click", run);

input.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    runButton.click();
  }
});
