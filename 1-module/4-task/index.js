function checkSpam(str) {
  // ваш код...
  let lowerStr = str.toLowerCase();
  if (lowerStr.includes('1xbet') || lowerStr.includes('xxx')) {
    return true;
  }

  return false;
}
