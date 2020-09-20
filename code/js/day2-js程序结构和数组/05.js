const input = document.getElementById("input");
const result = document.getElementById("result");
const runButton = document.getElementById("run");
input.focus();

function reverse(n) {
  let count = 0;
  n = Math.abs(n);
  do {
    count++;
    n = Math.floor(n / 10);
  } while (n !== 0);
  // let count = 1;
  // n = Math.abs(n);
  // while(n > 9){
  //   n = Math.floor(n / 10);
  //   count++;
  // }
  return count;
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
