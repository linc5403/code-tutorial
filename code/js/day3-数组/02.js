const input = document.getElementById("input");
const random = document.getElementById("random");
const result = document.getElementById("result");
const runButton = document.getElementById("run");
input.value = 10;
input.focus();

function randNumbers(size) {
  let a = [];
  for (let i = 0; i < size; i++) {
    a.push(Math.floor(Math.random() * 100));
  }
  return a;
}

function selectionSort(a) {
  for (let i = 0; i < a.length-1; i++) {
    let minIndex = i;
    for (let j = i+1; j < a.length; j++) {
      if (a[j] < a[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      let t = a[i];
      a[i] = a[minIndex];
      a[minIndex] = t;
    }
    console.log(a);
  }
}

function fineMinAndSwap(array) {
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }
  // 交换
  if (minIndex != 0) {
    let t = array[minIndex];
    array[minIndex] = array[0];
    array[0] = t;
  }
}

function run() {
  const arraySize = Number(input.value);
  let array = randNumbers(arraySize);
  random.innerHTML = array;
  // fineMinAndSwap(array);
  selectionSort(array);
  result.innerHTML = array;
  input.value = 10;
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
