const inputElement = document.querySelector("[data-result]");
const buttonElements = document.querySelectorAll("button");

Array.from(buttonElements, (btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "C") {
      inputElement.value = "";
    } else if (btn.innerText === "=") {
      inputElement.value = eval(inputElement.value);
    } else {
      inputElement.value += btn.innerText;
    }
  });
});
