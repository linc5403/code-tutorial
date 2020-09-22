let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
let out = document.getElementById("out");
out.innerHTML = "" + s.pop() + " " + s.pop() + " " + s.pop();