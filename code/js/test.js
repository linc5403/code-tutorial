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
