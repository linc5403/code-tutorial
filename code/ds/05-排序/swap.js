function swap(a, i, j) {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
}

module.exports = {
  swap,
};
