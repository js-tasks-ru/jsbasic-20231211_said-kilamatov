function highlight(table) {
  // ваш код...
  let tbody = table.querySelector("tbody");
  for (let row of tbody.rows) {
    let td = row.children[3];
    if (td.getAttribute("data-available") === "true") {
      row.classList.add("available");
    } else if (td.getAttribute("data-available") === null) {
      row.hidden = true;
    } else {
      row.classList.add("unavailable");
    }

    td = row.children[2];
    if (td.innerHTML === "m") {
      row.classList.add("male");
    } else {
      row.classList.add("female");
    }

    td = row.children[1];
    if (+td.innerHTML < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
