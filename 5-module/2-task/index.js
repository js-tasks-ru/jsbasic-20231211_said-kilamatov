function toggleText() {
  // ваш код...
  let btn = document.querySelector(".toggle-text-button");
  btn.addEventListener("click", hideText);

  function hideText() {
    let txt = document.getElementById("text");
    if (txt.hasAttribute("hidden")) {
      txt.hidden = false;
    } else {
      txt.hidden = true;
    }
  }
}
