/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = rows;
  }

  set elem(rows) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    table.prepend(thead);

    let trHead = document.createElement("tr");
    thead.append(trHead);
    let uniqueKeys = [];

    for (let i = 0; i < this.rows.length; i++) {
      let keys = Object.keys(this.rows[i]);

      keys.map((key) => {
        if (!uniqueKeys.includes(key)) {
          uniqueKeys.push(key);
          let th = document.createElement("th");
          th.textContent = key;
          trHead.append(th);
        }
      });
    }

    let tbody = document.createElement("tbody");
    table.append(tbody);

    for (let i = 0; i < this.rows.length; i++) {
      let tr = document.createElement("tr");
      tbody.append(tr);

      let value = Object.values(this.rows[i]);
      value.map((value) => {
        let td = document.createElement("td");
        td.textContent = value;
        tr.append(td);
      });

      tr.insertAdjacentHTML("beforeend", "<td><button>X</button></td>");
    }

    let tr = document.querySelectorAll("tr");

    table.onclick = function (event) {
      let target = event.target;

      if (target.tagName != "BUTTON") return;

      let tr = target.closest("tr");

      if (tr) {
        tr.remove();
      }
    };
    this.table = table;
    document.body.append(table);
    return table;
  }

  get elem() {
    return this.table;
  }
}
