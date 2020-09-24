/* eslint-disable no-constant-condition */
class Node {
  constructor(item) {
    this.item = item;
    this.l = null;
    this.r = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  insert(item) {
    if (this.root == null) {
      this.root = new Node(item);
      return;
    }
    // 不是空树，需要先找到其父节点
    let n = this.root;
    while (true) {
      if (item < n.item) {
        if (n.l == null) {
          n.l = new Node(item);
          return;
        } else {
          n = n.l;
        }
      } else {
        if (n.r == null) {
          n.r = new Node(item);
          return;
        } else {
          n = n.r;
        }
      }
    }
  }

  findFather(root, item) {
    if (root == null) {
      return null;
    }
    let n = root;
    if (item < n) {
      if (n.l == null) {
        return null;
      } else {
        return this.findFather(n.l);
      }
    } else if (item > n) {
      if (n.r == null) {
        return null;
      } else {
        return this.findFather(n.r);
      }
    } else {
      return n;
    }
  }

  reconstructTree(n) {
    if (n.r == null) {
      return n.l;
    } else {
      // 左子树挂在右子树的最左边
      // 1. 找到右子树最左边
      if (n.l != null) {
        let t = n.r;
        while (t.l != null) {
          t = t.l;
        }
        t.l = n.l;
      }
      return n.r;
    }
  }

  deleteSon(f, item) {
    if (f.l == item) {
      // delete left
      f.l = this.reconstructTree(f.l);
    } else {
      // delete right
      f.r = this.reconstructTree(f.r);
    }
  }

  delete(item) {
    // 先找到其父节点
    let f = this.findFather(this.root, item);
    if (f != null) {
      // 删除这个节点
      this.deleteSon(f, item);
      return true;
    } else {
      return false;
    }
  }
}
