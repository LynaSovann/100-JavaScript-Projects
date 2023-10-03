const starContainerElement = document.getElementById("star-container");
const images = [
  "imgs/rate1.jpg",
  "imgs/rate2.jpg",
  "imgs/rate3.jpg",
  "imgs/rate4.jpg",
  "imgs/rate5.jpg",
];
const imgContainer = document.querySelector("[data-img]");

function createStar() {
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    starContainerElement.appendChild(star);
  }
}

createStar();

function starClick() {
  const stars = document.querySelectorAll(".fa");
  imgContainer.style.setProperty("--img", `url(${images[0]})`);
  stars[0].classList.add("click");
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      imgContainer.style.setProperty("--img", `url(${images[index]})`);
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("click");
      }
      for (let j = stars.length - 1; j > index; j--) {
        stars[j].classList.remove("click");
      }
    });
  });
}

starClick();
