let dots = document.getElementsByClassName("dots-item"),
  dotsArea = document.getElementsByClassName("block-dots")[0],
  slides = document.getElementsByClassName("slides-item"),
  prevBtn = document.getElementById("left-btn"),
  nextBtn = document.getElementById("right-btn"),
  slideIndex = 1;

showSlide(slideIndex);
function showSlide(n) {
  if (n < 1) {
    slideIndex = slides.length;
  } else if (n > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < slides.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  showSlide((slideIndex += n));
}
function currentSlide(n) {
  showSlide((slideIndex = n));
}
prevBtn.onclick = function() {
  plusSlides(-1);
  console.log(prevBtn);
};
nextBtn.onclick = function() {
  plusSlides(1);
  console.log(nextBtn);
};
dotsArea.onclick = function(e) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (e.target.classList.contains("dots-item") && e.target == dots[i - 1]) {
      currentSlide(i);
    }
  }
};
