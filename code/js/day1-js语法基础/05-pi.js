function calcSum(n) {
  // 计算pi
  let i, sum, flag, item;
  flag = 1;
  sum = 0;
  for (i = 0; i <= n; i++) {
    item = flag / (i * 2 + 1);
    sum += item;
    flag = -flag;
  }
  return sum;
}

document.getElementById("run").addEventListener("click", () => {
  let input = document.getElementById("input").value;
  let inNum = Number(input);
  console.log(inNum);
  let output = document.getElementById("output");
  if (Number.isInteger(inNum) && inNum > 0) {
    // 调用函数进行计算
    let pi = calcSum(inNum) * 4;
    output.innerHTML = "按照" + inNum + "计算的pi值是" + pi;
  } else {
    output.innerHTML = "请输入一个大于0的整数 ";
  }
});
