class Stack{
  constructor(){
    this.array = [];
  }
  push(item) {
    this.array[this.array.length] = item;
  }

  pop() {
    if (this.array.length == 0) {
      return null;
    }

    let r = this.array[this.array.length-1];
    this.array.length--;
    return r;
  }
}