class SeqList {
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
}

let s = new SeqList();
s.insert(10, 0);
s.insert(20, 0);
s.delete(0);
s.delete(0);
