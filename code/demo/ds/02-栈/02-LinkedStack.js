// 单链表实现的栈

// 定义节点的类(class)
class Node {
  constructor(item, next = null) {
    this.item = item;
    this.next = next;
  }
}

class LinkedStack {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // 查找指定位置的节点
  // 注意：findPos函数并没有判断pos是否合法
  findPos(pos) {
    let r = this.head;
    for (let i = 0; i < pos; i++) {
      r = r.next;
    }
    return r;
  }

  // 在指定位置插入一个节点
  insert(item, pos) {
    // 判断pos的有效范围
    if (pos < 0 || pos > this.length) {
      return false;
    }
    // 初始化Node的操作
    let newNode = new Node(item);
    // 如果插入0号位置，表示变更了链表的头结点
    if (pos == 0) {
      // 新head插入的节点应该是新的头结点
      newNode.next = this.head; // 新节点指向现在的头结点
      this.head = newNode; // 变更链表的头结点为新创建的节点
      this.length++; // 长度+1 不要忘了
      return true;
    }
    // 找到pos-1编号的节点
    let pre = this.findPos(pos - 1);
    // newNode指向现在的pos节点
    newNode.next = pre.next;
    // pre指向newNode
    pre.next = newNode;
    // 别忘了要改变长度
    this.length++;
    return true;
  }

  // 删除指定位置的节点，返回null或者对应节点里面的元素（item）
  delete(pos) {
    // 判断pos的合法性
    if (pos < 0 || pos >= this.length) {
      return null;
    }
    // 删除头结点
    if (pos == 0) {
      let r = this.head; // 保存返回值
      this.head = r.next; // 头节点变更为之前的1#节点
      this.length--; // 别忘了长度
      return r.item;
    }
    // 删除其它节点
    let pre = this.findPos(pos - 1);
    let r = pre.next;
    pre.next = pre.next.next;
    this.length--;
    return r.item;
  }

  // 获取pos位置的元素, 只要item，不要Node
  get(pos) {
    if (pos < 0 || pos >= this.length) {
      return null;
    }
    return this.findPos(pos).item;
  }

  // 修改pos位置的元素
  modify() {}

  // 判断顺序表是否为空（一个元素都没有称为空）
  isEmpty() {
    return this.length == 0;
  }

  push(item) {
    return this.insert(item, 0);
  }

  pop() {
    return this.delete(0);
  }

  peep() {
    // 如果是个空链表，findPos会返回null
    return this.findPos(0);
  }
}


// module表示一个模块，简单理解就是一个js文件
// 用在Node.js环境中
module.exports = {
  Stack: LinkedStack,
};
