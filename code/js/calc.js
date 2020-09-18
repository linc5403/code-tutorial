// let是js的一个关键字，声明一个变量， 变量名通常使用小写字母开头的驼峰命名规范
// zhangSan liSi wangWu liJiaCheng
// 我们通过变量的名字直接使用这个变量，找到这个箱子

// = 是赋值运算符
// 赋值表示将右边的值给左边

// document是一个对象，表示HTML的文档
// getElementById是document这个对象的一个方法， 通过id获取到该id对应的元素

// getElementById()的括号表示接受输入

// 我们输入的是"run", 用双引号或是单引号括起来的东西，我们称之为字符串

// ;用来表示一句代码的结束
let runButton = document.getElementById("run");

// 一个函数是一段代码的集合，函数的定义：
//       使用function关键字表示你要定义一个函数， function后面应该跟上你的函数名
//       run就被成为函数名
// 函数名后面的()表示这个函数接收的参数，
//      注意：函数也可以不接受参数，也可以接收多个参数
//      参数可以是变量， 也可以是字符串， 也可以是数字， 其他的任何东西
// 函数要做的事情在参数()的后面用{}括起来
function run() {
  // num1得到input #num1的数字
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  // op得到下拉框中选中的符号， 它是一个字符串， 取值范围在html里面写的
  let op = document.getElementById("op").value;
  let rlt;
  // your code ...

  document.getElementById("result").value = rlt;
}

// 通过runButton（=这个按钮）的click事件来运行run
runButton.addEventListener("click", run);
