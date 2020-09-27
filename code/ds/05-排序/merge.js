function merge(a, begin, middle, end) {
  let b = [];
  let k = 0;
  let i = begin;
  let j = middle;
  while(i < middle && j < end) {
    if (a[i] < a[j]) {
      b[k] = a[i];
      k++;
      i++;
    } else {
      b[k] = a[j];
      k++;
      j++;
    }
  }
  if (a == middle) {
    while(j < end) {
      b[k] = a[j];
      k++; j++;
    }
  } else {
    while(i < middle) {
      b[k] = a[i];
      k++; i++;
    }
  }
  for (k = 0; k < b.length; k++) {
    a[begin+k] = b[k];
  }
}

function mergeSort(a, begin, end) {
  if (begin >= end-1) { // 少于1个元素在数组中
    return;
  }
  // 否则我就要排序
  // middle 表示中间位置的那个元素的下标
  let middle = Math.floor((begin + end) / 2);
  mergeSort(a, begin, middle);
  mergeSort(a, middle, end);
  merge(a, begin, middle, end);
}

function sort(a) {
  mergeSort(a, 0, a.length);
}

module.exports = {
  sort,
}