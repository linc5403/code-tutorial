const BST = require("./bst").Bst;

let tree = new BST();

tree.insert(10);
// tree.preTraverse(tree.root);
console.log("*********************")
tree.insert(20);
// tree.preTraverse(tree.root);
console.log("*********************")
tree.insert(30);
tree.desc(tree.root);
// tree.preTraverse(tree.root);
console.log("*********************")
tree.delete(20);
// tree.preTraverse(tree.root);
// console.log("*********************")
console.log(tree);