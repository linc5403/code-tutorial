function randN(n, limit=100) {
  let a = [];
  for (let i = 0; i < n; i++){
    a.push(Math.floor(Math.random() * limit));
  }
  return a;
}

module.exports = {
  randN
}