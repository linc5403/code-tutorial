const input = document.getElementById("input");
const result = document.getElementById("result");
const runButton = document.getElementById("run");
input.focus();

function reverse(n) {
  let rlt = "";
  let v;

  do {
    v = n % 10; // -1
    rlt += v; // "-1"
    n = Math.floor(n / 10); // -1
  } while (n != 0);

  // v = n % 10; // --> 个位
  // rlt += v;
  // n = Math.floor(n / 10);
  // v = n % 10; // --> 十位
  // rlt += v;
  // n = Math.floor(n / 10);
  // v = n % 10; // --> 百位
  // rlt += v;
  return rlt;
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
