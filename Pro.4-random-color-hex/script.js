const colorContainer = document.querySelector("[data-color-container]");

function getRandomColorCode() {
  let colorCode = "";
  const hex = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 16);
    colorCode += hex.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

function createColorBox() {
  for (let i = 0; i < 7; i++) {
    const code = `#${getRandomColorCode()}`;
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.background = code;
    const h1 = document.createElement("h1");
    h1.innerText = code;
    div.appendChild(h1);
    colorContainer.appendChild(div);
  }
}

createColorBox();
copyHexCode();

function copyHexCode () {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            navigator.clipboard.writeText(box.innerText);
            alert(box.innerText + " copied to clipboard")
        })
    })
}
