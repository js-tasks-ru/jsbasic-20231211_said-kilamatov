import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.createSlider();
    this.createEvent();
    this.createEventSteps();
  }

  createSlider() {
    this.slide = createElement(
      `<div class="slider">
        <div class="slider__thumb" style="left: 50%;">
          <span class="slider__value">2</span>
        </div>
        <div class="slider__progress" style="width: 50%;"></div>
        <div class="slider__steps">
        </div>
      </div>`
    );

    for (let i = 0; i < Math.trunc(this.steps); i++) {
      const span = document.createElement("span");
      if (i === 0) {
        span.classList.add("slider__step-active");
      }
      this.slide.querySelector(".slider__steps").append(span);
    }

    return this.slide;
  }

  createEvent() {
    this.slide.addEventListener("click", (event) => {
      const left = event.clientX - this.elem.getBoundingClientRect().left;
      const leftRelative = left / this.elem.offsetWidth;
      const segments = this.steps - 1;
      const approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      const valuePercents = (this.value / segments) * 100;

      const thumb = this.elem.querySelector(".slider__thumb");
      const progress = this.elem.querySelector(".slider__progress");
      const leftPercents = valuePercents;
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      this.dispatchSliderChangeEvent(this.value);
    });
  }

  dispatchSliderChangeEvent(value) {
    const event = new CustomEvent("slider-change", {
      detail: this.value,
      bubbles: true,
    });
    this.slide.dispatchEvent(event);
  }

  createEventSteps() {
    this.slide.addEventListener("click", (event) => {
      const left = event.clientX - this.elem.getBoundingClientRect().left;
      const leftRelative = left / this.elem.offsetWidth;
      const segments = this.steps - 1;
      const approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);

      const slideValue = this.elem.querySelector(".slider__value");
      slideValue.innerHTML = this.value;

      const slideSteps = this.slide.querySelectorAll(".slider__steps > span");
      slideSteps.forEach((item, index) => {
        if (index === this.value) {
          item.classList.add("slider__step-active");
        } else {
          item.classList.remove("slider__step-active");
        }
      });
    });
  }
}
