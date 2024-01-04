function camelize(str) {
  // ваш код...
  return str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item.slice(0, 1).toUpperCase(1) + item.slice(1)
    )
    .join("");
}
