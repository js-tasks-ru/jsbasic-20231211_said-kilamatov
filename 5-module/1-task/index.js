function hideSelf() {
  // ваш код...
  let btn = document.querySelector(".hide-self-button");
  btn.addEventListener("click", hideText);

  function hideText() {
    this.hidden = true;
  }
  return btn;
}
