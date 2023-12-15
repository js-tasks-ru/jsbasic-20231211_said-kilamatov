function factorial(n) {
  let temp = 1;
  let i = 1;
  while (i <= n) {
    temp *= i;
    ++i;
  }
  return temp;
}
