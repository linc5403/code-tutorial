/*
  给出用户输入数字对4取余的中文结果
  */
function calc() {
  // 获取输入的数字
  let input;
  // 对于input类型的标签， 输入的内容在他们的value属性里面
  input = document.getElementById("input").value;
  // 将input转换成数字
  let inNum = Number(input);
  let out = inNum % 4;
  let outZh;

  switch (out) {
    case 0:
      outZh = "零";
      break;
    case 1:
      outZh = "壹";
      break;
    case 2:
      outZh = "贰";
      break;
    case 3:
      outZh = "叁";
      break;
  }

  // 输出到什么地方？
  document.getElementById("out").innerHTML = inNum + "对4取余是" + outZh;
}

let runButton = document.getElementById("run");
runButton.addEventListener("click", calc);
