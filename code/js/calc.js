let runButton = document.getElementById("run");

function run() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let op = document.getElementById("op").value;
  let rlt;
  // your code ...

  document.getElementById("result").value = op + num1 + num2;
}

runButton.addEventListener("click", run);
