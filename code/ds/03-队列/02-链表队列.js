class Node {
  constructor(item = null, next = null) {
    this.item = item;
    this.next = next;
  }
}
class LinkedQueue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(item, pos) {
    if (pos < 0 || pos > this.length) {
      return false;
    }

    let newNode = new Node(item);

    if (pos == 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return true;
    }

    let pre = this.head;
    for (let i = 1; i < pos; i++) {
      pre = pre.next;
    }
    newNode.next = pre.next;
    pre.next = newNode;
    this.length++;
    return true;
  }

  delete(pos) {
    if (pos < 0 || pos >= this.length) {
      return null;
    }

    let r;

    if (pos == 0) {
      r = this.head;
      this.head = this.head.next;
      this.length--;
      return r.item;
    }

    let pre = this.head;
    for (let i = 1; i < pos; i++) {
      pre = pre.next;
    }
    r = pre.next;
    pre.next = pre.next.next;
    this.length--;
    return r.item;
  }

  print() {
    let node = this.head;
    while (node != null) {
      console.log(node.item);
      node = node.next;
    }
  }

  enqueue(item) {
    return this.insert(item, 0);
  }

  dequeue() {
    return this.delete(this.length-1);
  }
}
