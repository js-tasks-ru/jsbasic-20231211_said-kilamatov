function sumSalary(salaries) {
  // ваш код...
  let sum = 0;

  if (Object.keys(salaries).length == 0) {
    return 0;
  }

  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && !isNaN(salaries[key]) && isFinite(salaries[key])) {
      sum += salaries[key];
    }
  }

  return sum;
}
