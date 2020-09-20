const input = document.getElementById("input");
const result = document.getElementById("result");
const runButton = document.getElementById("run");
input.focus();

function pi(last) {
  let fenMu = 1,
    flag = 1,
    sum = 0;
  let item = flag / fenMu;
  while (Math.abs(item) > last) {
    sum += item;
    fenMu = fenMu + 2;
    flag = -flag;
    item = flag / fenMu;
  }
  sum += item;
  return sum * 4;
}

function run() {
  const lastItem = Number(input.value);
  console.log(lastItem);

  result.innerHTML = "last = " + lastItem +  "<br>" + "Pi = " + pi(lastItem);

  input.value = null;
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
