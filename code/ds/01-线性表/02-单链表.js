class Node {
  constructor(item = null, next = null) {
    this.item = item;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(item, pos) {
    if (pos < 0) {
      return false;
    }
    let newNode = new Node(item);
    if (pos == 0) {
      // 新节点在头部
      newNode.next = this.head;
      this.head = newNode;
      return true;
    }
    // 不在第一个节点
    // 1. 找到上一个节点
    let pre = this.head;
    pos--;
    while (pos > 0 && pre != null) {
      pre = pre.next;
      pos--;
    }
    if (pos != 0) {
      // pos溢出了现在链表的长度
      return false;
    }
    // 2. 插入新节点
    newNode.next = pre.next;
    pre.next = newNode;
    return true;
  }

  delete(pos) {
    if (pos < 0) {
      return null;
    }
    let r;

    if (this.head == null) {
      return null;
    }

    // 删除头节点
    if (pos == 0) {
      r = this.head;
      this.head = this.head.next;
      return r.item;
    }
    // 删除非头节点
    // 1. 找到上一个节点
    let pre = this.head;
    pos--;
    while (pos > 0 && pre.next != null) {
      pre = pre.next;
      pos--;
    }
    // 2. 删除下一个节点
    if (pos != 0 || pre.next == null) {
      return null;
    }
    r = pre.next;
    pre.next = pre.next.next;
    return r.item;
  }
}

let l = new LinkedList();
l.insert(1, 0);
console.log(l.head);
// 1
l.insert(2, 1);
console.log(l.head);
// 1, 2
l.insert(3, 0);
console.log(l.head);
// 3, 1, 2
l.insert(4, 1);
console.log(l.head);
// 3, 4, 1, 2
l.insert(5, 4);
console.log(l.head);
// 3, 4, 1, 2, 5
