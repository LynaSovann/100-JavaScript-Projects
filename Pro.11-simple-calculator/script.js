const inputElement = document.querySelector("[data-result]");
const buttonElements = document.querySelectorAll("button");

Array.from(buttonElements, (btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "C") {
      clearInput();
    } else if (btn.innerText === "=") {
      calculation();
    } else {
      inputDisplay(btn.innerText);
    }
  });
});

function clearInput() {
  inputElement.value = "";
}

function calculation() {
  if (inputElement.value === "") {
    return;
  }
  inputElement.value = eval(inputElement.value);
}

function inputDisplay(arg) {
  const lastText = inputElement.value.slice(-1);
  if (
    (lastText === "+") |
    (lastText === "-") |
    (lastText === "*") |
    (lastText === "/")
  ) {
    if ((arg === "+") | (arg === "-") | (arg === "*") | (arg === "/")) return;
  }
  inputElement.value += arg;
  console.log(inputElement.value.slice(-1));
}
