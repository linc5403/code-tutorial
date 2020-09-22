const list = require("./01-顺序表");

let l = new list.SeqList();

// 线性表的插入
for (let i = 0; i < 10; i++) {
  l.insert(i, 0);
}

// 线性表的打印
l.print();

// 线性表的删除
while (!l.isEmpty()) {
  console.log(l.delete(0));
}
