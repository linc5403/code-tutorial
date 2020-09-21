const input = document.getElementById("input");
const result = document.getElementById("result");
const runButton = document.getElementById("run");
input.focus();

function pi(last) {
  let fenMu = 1,
    flag = 1,
    sum = 0;
  let item;

  do {
    item = flag / fenMu;
    console.log(item);
    sum += item; // item的值已经加入到sum中，所以不需要再循环体外面再加一次item
    fenMu += 2;
    flag = -flag;
  } while (Math.abs(item) >= last);

  return sum * 4;
}

function run() {
  const lastItem = Number(input.value);
  result.innerHTML = "last = " + lastItem + "<br>" + "Pi = " + pi(lastItem);
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
