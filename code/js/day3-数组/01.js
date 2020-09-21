let s = [
  "储文义",
  "徐大羽",
  "朱道承",
  "王梓人",
  "何益帆",
  "赵鹏",
  "孙一博",
  "王赛群",
  "徐敏达",
  "王淼",
  "陈永辉",
  "张泽鹏",
  "赵宸霄",
  "章月雯",
  "黄俊琅",
];

let runButton = document.getElementById("run");
runButton.addEventListener("click", run);
let result = document.getElementById("result");
function run() {
  let prize = s[Math.floor(Math.random() * s.length)];
  result.innerHTML = "今天示范 " + prize + " 的作业";
}


