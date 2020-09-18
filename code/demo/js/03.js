function calcWater() {
  // 获取用户的用水量
  let input;
  // 对于input类型的标签， 输入的内容在他们的value属性里面
  input = document.getElementById("input").value;
  // 将input转换成数字
  let inNum = Number(input);
  let outMoney = 1000000;
  // your code...
  // 根据inNum去计算outMoney
  if (inNum < 0) {
    outMoney = "请输入一个大于等于0的数字";
  }else if (inNum <= 15) {
    outMoney = (4 / 3 * inNum).toFixed(2);
  } else {
    outMoney = (2.5 * inNum - 10.5).toFixed(2);
  }

  // 输出到什么地方？
  document.getElementById("out").innerHTML = outMoney;
}

let runButton = document.getElementById("run");
runButton.addEventListener("click", calcWater);
