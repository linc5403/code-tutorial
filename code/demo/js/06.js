document.getElementById("run").addEventListener("click", () => {
  let input = document.getElementById("input").value;
  let inNum = Number(input);
  console.log(inNum);
  let output = document.getElementById("output");
  if (Number.isInteger(inNum) && inNum > 0) {
    // 调用函数进行计算
    let pi = calcPi(inNum) * 4;
    output.innerHTML = "按照" + inNum + "计算的pi值是" + pi;
  } else {
    output.innerHTML = "请输入一个大于0的整数 ";
  }
});

// 根据前n项计算pi/4的值
function calcPi(n) {
  // 1 - 1/3 + 1/5 - 1/7 + 1/9 - 1/11.....
  let sum = 0, i;
  // n = 1
  // return 1;
  // n = 2
  // return 1 - 1/3
  // n = 3
  // return 1 - 1/3 + 1/5
  for (i = 1; i <= n; i++) {
    // 对于每一项i， 计算它的值， 并加到sum里面去
    let item;
    item = 1 / (2 * i - 1);
    if (i % 2 == 0) { // 是偶数项
      // 负值
      item = -item;
      // item = -1 * item;
    }
    sum += item;
  }
  return sum;
}
