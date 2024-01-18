import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = categories;
  }

  set elem(categories) {
    this.categories = createElement(`
    <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <nav class="ribbon__inner">
      <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
      <a href="#" class="ribbon__item" data-id="salads">Salads</a>
      <a href="#" class="ribbon__item" data-id="soups">Soups</a>
      <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
      <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
      <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
      <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
      <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
      <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
    </nav>

    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    </div>`);

    const ribbonInner = this.categories.querySelector(".ribbon__inner");
    const arrowRibbonRight = this.categories.querySelector(
      ".ribbon__arrow_right"
    );
    const arrowRibbonLeft = this.categories.querySelector(
      ".ribbon__arrow_left"
    );

    arrowRibbonRight.addEventListener("click", movingRibbonRight);
    arrowRibbonLeft.addEventListener("click", movingRibbonLeft);
    ribbonInner.addEventListener("scroll", hideRibbonArrow);

    function movingRibbonRight() {
      ribbonInner.scrollBy(350, 0);
      setTimeout(hideRibbonArrow, 300);
    }

    function movingRibbonLeft() {
      ribbonInner.scrollBy(-350, 0);
      setTimeout(hideRibbonArrow, 300);
    }

    function hideRibbonArrow() {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollLeft === 0) {
        arrowRibbonLeft.classList.remove("ribbon__arrow_visible");
      } else {
        arrowRibbonLeft.classList.add("ribbon__arrow_visible");
      }

      if (scrollRight < 1) {
        arrowRibbonRight.classList.remove("ribbon__arrow_visible");
      } else {
        arrowRibbonRight.classList.add("ribbon__arrow_visible");
      }
    }

    ribbonInner.addEventListener("click", (event) => {
      let category = event.target.closest(".ribbon__item");

      if (category) {
        let cat = this.categories.querySelectorAll(".ribbon__item");
        cat.forEach((item) => item.classList.remove("ribbon__item_active"));
        category.classList.add("ribbon__item_active");
        let myEvent = new CustomEvent("ribbon-select", {
          detail: category.dataset.id,
          bubbles: true,
        });

        category.dispatchEvent(myEvent);
      }
    });

    ribbonInner.addEventListener("ribbon-select", (event) => {
      console.log(event.detail);
    });
  }
  get elem() {
    return this.categories;
  }
}
