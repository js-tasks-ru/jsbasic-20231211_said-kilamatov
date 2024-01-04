function filterRange(arr, a, b) {
  // ваш код...
  let copyOfArr = arr.slice();
  return copyOfArr.filter((item) => a >= item || item <= b);
}
