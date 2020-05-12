const menu = document.getElementById("menu");
const item = document.getElementsByClassName("menu__item");
console.log(menu);
console.log(item.length);
for (var i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    for (var j = 0; j < item.length; j++) {
      item[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}
