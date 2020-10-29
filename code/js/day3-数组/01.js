let s = [
  "���ķ�",  "�߾�",  "������",  "������",  "�ӳ���",
  "����",  "������",  "���",  "����",  "�ſ���",
  "������",  "�����",  "������",  "�Ͻ�",  "���Ŀ�",
  "���ľ�",  "�߻�",  "�´�",  
  //"���Ƴ�",
  "���",
  "�����",  "������",  "������",  "����",
  // "������",
  // "�����",
  // "�����",
  // "������",
  // "���淫",
  // "����",
  // "��һ��",
  // "����Ⱥ",
  // "������",
  // "���",
  // "������",
  // "������",
  // "�����",
  // "������",
  // "�ƿ���",
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

// ����n���������
function randN(n) {
  let base = [];
  for (let i = 0; i < n; i++) {
    base.push(i);
  }

  for (let i = 0; i < n - 1; i++) {
    // ��i��n-1��ѡ��һ�������
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