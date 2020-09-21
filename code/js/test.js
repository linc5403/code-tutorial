class Student {
  constructor(name, age = null, gender = null) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  intro() {
    console.log("Hello, this is " + this.name);
  }
}

let s = new Student("wangwu");
s.intro();

const out = document.getElementById("out");

function print(n) {
  let str = "";
  for(let i = 1; i <= n; i++) {
    // 打印空格
    // 空格的数目是5-i
    for (let j = 0; j < n - i; j++) {
      str += "&nbsp";
    }
    // 打印**
    for (let j = 0; j < 2*i-1; j++) {
      str += "*";
    }
    str += "<br>";
  }
  out.innerHTML = str;
}

print(6);