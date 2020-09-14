var a = "zhangsan";
console.log(a);
var b = new Object();
b.name = a;
b.age = 12;

b.score = [];
b.score[0] = 100;
b.score[1] = 200;
b.out = function(aaa) {
  console.log("name: " + b.name);
  console.log("age: " + b.age);
  b.score.forEach(element => {
    console.log(element);
  });
  console.log(aaa);
}
b.out(a);