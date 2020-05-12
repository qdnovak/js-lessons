var slider = document.getElementsByClassName("slider");
let images = document.querySelectorAll(".infinity-slider img");
console.log(images.length);
let currnet = 0;

let slider2 = document.querySelector(".slider");
console.log(slider);

slider2.addEventListener("click", function () {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("opacity0");
  }
  images[currnet].classList.remove("opacity0");

  if (currnet + 1 == images.length) {
    currnet = 0;
  } else {
    currnet++;
  }
  console.log(currnet);
});

let btnup = document.querySelector(".btn-up");
let btndown = document.querySelector(".btn-down");
console.log(btndown, btnup);

btnup.addEventListener("click", function () {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("opacity0");
  }
  images[currnet].classList.remove("opacity0");

  if (currnet + 1 == images.length) {
    currnet = 0;
  } else {
    currnet++;
  }
  console.log(currnet);
});
btndown.addEventListener("click", function () {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("opacity0");
  }
  images[currnet].classList.remove("opacity0");

  if (currnet - 1 == images.length) {
    currnet = 0;
  } else if (currnet <= 0) {
    currnet = images.length - 1;
  } else {
    currnet--;
  }
  console.log(currnet);
});
