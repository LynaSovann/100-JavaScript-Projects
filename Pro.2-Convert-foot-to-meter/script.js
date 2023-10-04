const formElement = document.querySelector("[data-form]");
const resultText = document.querySelector("[data-result]");
const inputElement = document.querySelector("[data-input]");

formElement.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const tempValue = inputElement.value * 0.3048;
  const result = parseFloat(tempValue).toFixed(2);
  resultText.innerText = `${inputElement.value} ft = ${result} m`;
  inputElement.value = "";
  console.log(inputElement.value)
}


