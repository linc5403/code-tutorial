// 数组栈
// 底层数据结构是数组
class ArrayStack {
  // 构造函数， 初始化底层的数组
  constructor() {
    this.array = [];
  }

  // insert 在指定位置增加元素
  insert(item, pos) {
    if (pos < 0 || pos > this.array.length) {
      // pos非法
      return false;
    }

    for (let i = this.array.length; i >= pos + 1; i--) {
      // 将pos开始的元素都向后移动一个位置
      // 注意：从lenght位置开始，最后开始移动
      // 还要注意：java不能访问lenght下标的元素
      this.array[i] = this.array[i - 1];
    }
    // 将item放到pos位置
    this.array[pos] = item;
    return true;
  }

  // 返回删除的元素
  delete(pos) {
    if (pos < 0 || pos >= this.array.length) {
      return null;
    }
    // 先保存一下pos位置的元素，以免后面的for语句覆盖掉
    let r = this.array[pos];
    // 从pos开始向后， 用后一个元素的值覆盖当前元素
    for (let i = pos; i < this.array.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    // 还需要将最后一个元素抹掉
    // 注意：此处和java不一样，java数组的长度不能直接改变
    this.array.length--;
    return r;
  }

  // 获取pos位置的元素
  get(pos) {
    if (pos < 0 || pos >= this.array.length) {
      return null;
    }
    return this.array[pos];
  }

  // 修改pos位置的元素
  modify() {}

  // 判断顺序表是否为空（一个元素都没有称为空）
  isEmpty() {
    return this.array.length == 0;
  }

  // 新增栈的方法
  // push -> 将item加入到现有数组的最右边（栈顶）
  push(item) {
    return this.insert(item, this.array.length);
  }

  // pop -> 从数组中删除最右边（栈顶）元素，并返回它的值
  pop() {
    return this.delete(this.array.length - 1);
  }

  // 查看栈顶元素的值
  peep() {
    return this.get(this.array.length - 1);
  }
}

module.exports = {
  ArrayStack,
};
