function initCarousel() {
  // ваш код...
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const arrowSlide = document.querySelector(".carousel__inner");
  const slides = document.querySelectorAll(".carousel__img");
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
