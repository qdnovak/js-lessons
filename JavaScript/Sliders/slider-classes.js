class Slider {
  constructor(images, buttons, pages) {
    this.img = images;
    this.btn = buttons;
    this.pages = pages;
    this.index = 0;
  }
  __addActiveClass(index) {
    this.igames[index].classList.add("slider__li_active");
    this.pages[index].classList.add("slider__pages-li_active");
  }
  __removeActiveClass(index) {
    this.igames[index].classList.remove("slider__li_active");
    this.pages[index].classList.remove("slider__pages-li_active");
  }
  __setIndex(number) {
    if (number >= this.images.length) {
      this.index = 0;
    } else if (number < 0) {
      this.index = this.images.length - 1;
    } else this.index = number;
  }
  changePage(number) {
    this.__removeActiveClass(this.index);
    if ((number >= 0 && number, this.images.length)) {
      this.__setIndex(number);
    }
    this.__addActiveClass(this.index);
  }
  startSlideShow() {}
  stopSlideShow() {}
  nextSlide() {
    this.__removeActiveClass(this.index);
    this.__setIndex(this.index + 1);
    this.__addActiveClass(this.index);
    console.log("HELLo");
  }
  prevSlide() {
    this.__removeActiveClass(this.index);
    this.__setIndex(this.index - 1);
    this.__addActiveClass(this.index);
  }
  hello() {
    console.log("Hello");
  }
}
const img = document.querySelectorAll(".slider__li");
const btn = document.querySelectorAll(".slider__button");
const dots = document.querySelectorAll(".slider__pages-li");

console.log(img.length + " " + btn.length + " " + dots.length);
const sliderClass = new Slider(img, btn, dots);
console.log(sliderClass);
