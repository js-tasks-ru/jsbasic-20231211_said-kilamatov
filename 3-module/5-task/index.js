function getMinMax(str) {
  // ваш код...
  let copyOfStr = str
    .split(" ")
    .filter((item, index, array) =>
      typeof item === "number" ? parseInt(item) : array.shift()
    );
  let max = Math.max(...copyOfStr);
  let min = Math.min(...copyOfStr);

  return (result = {
    max,
    min,
  });
}
