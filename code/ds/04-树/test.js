const BST = require("./bst").Bst;

let tree = new BST();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.delete(20);
console.log(tree);