let s = [
  "王夏风",
  "倪靖",
  "吴启仁",
  "管文轩",
  "庞朝杰",
  "江恒",
  "章月雯",
  "杨刚",
  "马磊",
  "张凯琦",
  "冯天艺",
  "刘亚璞",
  "王益鹏",
  "邢舰",
  "林文俊",
  "方文娟",
  "高辉",
  "陈聪",
  //"孙善成",
  "陈楠",
  "赵宸霄",
  "葛子禹",
  "刘方宇",
  "连晨",
  // "储文义",
  // "徐大羽",
  // "朱道承",
  // "王梓人",
  // "何益帆",
  // "赵鹏",
  // "孙一博",
  // "王赛群",
  // "徐敏达",
  // "王淼",
  // "陈永辉",
  // "张泽鹏",
  // "赵宸霄",
  // "章月雯",
  // "黄俊琅",
];

let runButton = document.getElementById("run");
runButton.addEventListener("click", run);
let result = document.getElementById("result");
let input = document.getElementById("input");
input.focus();

function run() {
  let number = Number(input.value);
  // let prize = s[Math.floor(Math.random() * s.length)];
  let randSeq = randN(s.length);
  let choosen = randSeq.slice(0, number);
  let out = "";
  for (let i of choosen) {
    out += s[i] + " ";
  }
  result.innerHTML = out;
  input.focus();
}

// 生成n个随机数列
function randN(n) {
  let base = [];
  for (let i = 0; i < n; i++) {
    base.push(i);
  }

  for (let i = 0; i < n - 1; i++) {
    // 从i到n-1中选出一个随机数
    let r = Math.floor(Math.random() * (n - i)) + i;
    if (r != i) {
      let t = base[r];
      base[r] = base[i];
      base[i] = t;
    }
  }

  return base;
}

input.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    runButton.click();
  }
});
