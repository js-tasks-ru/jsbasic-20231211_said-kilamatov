function showSalary(users, age) {
  // ваш код...
  return users
    .filter((item) => item.age <= age)
    .map(
      (item, index, array) =>
        `${item.name}, ${item.balance}${
          array.length - 1 === "\n" ? array.pop() : ""
        }`
    )
    .join("\n");
}
