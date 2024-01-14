import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slide) {
    this.slides = slide;
    this.elem = slide;
  }

  set elem(slide) {
    this.slide = createElement(`
    <div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">
    </div>
`);

    for (let i = 0; i < this.slides.length; i++) {
      let currentSlide = this.slides[i];
      let slideElement = createElement(`
      <div class="carousel__slide" data-id="penang-shrimp">
        <img src="/assets/images/carousel/${currentSlide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${currentSlide.price}</span>
          <div class="carousel__title">${currentSlide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);

      let carouselInner = this.slide.querySelector(".carousel__inner");
      carouselInner.append(slideElement);

      let btn = slideElement.querySelector(".carousel__button");

      btn.addEventListener("click", (event) => {
        let btn = event.target.closest("BUTTON");

        if (btn) {
          let myEvent = new CustomEvent("product-add", {
            detail: currentSlide.id,
            bubbles: true,
          });

          btn.dispatchEvent(myEvent);
        }
      });

      btn.addEventListener("product-add", (event) => {
        console.log(event.detail);
      });
    }

    const arrowRight = this.slide.querySelector(".carousel__arrow_right");
    const arrowLeft = this.slide.querySelector(".carousel__arrow_left");
    const arrowSlide = this.slide.querySelector(".carousel__inner");
    const slides = this.slide.querySelectorAll(".carousel__img");
    let translateValue = 0;
    let currentSlides = 0;

    hideArrow();
    arrowRight.addEventListener("click", movingSlideRight);
    arrowLeft.addEventListener("click", movingSlideLeft);

    function movingSlideRight() {
      currentSlides += 1;
      hideArrow();
      translateValue -= arrowSlide.offsetWidth;
      arrowSlide.style.transform = `translateX(${translateValue}px)`;
    }

    function movingSlideLeft() {
      currentSlides -= 1;
      hideArrow();
      translateValue += arrowSlide.offsetWidth;
      arrowSlide.style.transform = `translateX(${translateValue}px)`;
    }

    function hideArrow() {
      if (currentSlides === 0) {
        arrowLeft.style.display = "none";
      } else {
        arrowLeft.style.display = "";
      }

      if (currentSlides === slides.length - 1) {
        arrowRight.style.display = "none";
      } else {
        arrowRight.style.display = "";
      }
    }
  }
  get elem() {
    return this.slide;
  }
}
