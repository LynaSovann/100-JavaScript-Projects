const board = document.querySelector("[data-board]");
const boxes = document.querySelectorAll("[data-box]");
let xturn = true;

onHover();

boxes.forEach((box) => {
  box.addEventListener("click", handleClick, { once: true });
});

function onHover() {
  if (xturn) {
    board.classList.remove("o");
    board.classList.add("x");
  } else {
    board.classList.remove("x");
    board.classList.add("o");
  }
}

function handleClick(e) {
  const box = e.target;
  const currentClass = xturn ? "x" : "o";
  box.classList.add(currentClass);
  checkwin() && alert("Draw!");
  xturn = !xturn;
  onHover();
}

function checkwin() {
  return [...boxes].every((box) => drawOt(box));
}

function drawOt(box) {
  return box.classList.contains("x") | box.classList.contains("o");
}
