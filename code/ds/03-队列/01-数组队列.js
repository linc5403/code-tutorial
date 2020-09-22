class ArrayQueue {
  constructor() {
    this.array = [];
  }

  insert(item, pos) {
    if (pos < 0 || pos > this.array.length) {
      return false;
    }
    for (let i = this.array.length; i > pos; i--) {
      this.array[i] = this.array[i - 1];
    }
    this.array[pos] = item;
    return true;
  }

  delete(pos) {
    if (pos < 0 || pos >= this.array.length) {
      return null;
    }
    let r = this.array[pos];
    for (let i = pos; i < this.array.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.array.length--;
    return r;
  }

  enqueue(item) {
    return this.insert(item, this.array.length);
  }

  dequeue() {
    return this.delete(0);
  }
}
