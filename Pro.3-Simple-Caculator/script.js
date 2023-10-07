const outputTextElement = document.querySelector("[data-result]");
const resultText = document.querySelector("[data-output-text]");
const operands = document.querySelectorAll("[data-operand]");
const operators = document.querySelectorAll("[data-operator]");
const equalElement = document.querySelector("[data-equals]");
const dataClear = document.querySelector("[data-clear]");
const dataClearEntry = document.querySelector("[data-clear-entry]");

dataClearEntry.addEventListener("click", clearEntry);

dataClear.addEventListener("click", clearData);

operands.forEach((operand) => {
  operand.addEventListener("click", operandInput);
});

operators.forEach((operator) => {
  operator.addEventListener("click", operatorInput);
});

function clearEntry () {
  outputTextElement.innerText.slice(0, -1);
}

function operandInput(e) {
  const value = e.target.innerText;
  if (outputTextElement.innerText.includes(".") && value === ".") {
    return;
  } else {
    if (!outputTextElement.innerText) {
      outputTextElement.innerText = value;
    } else {
      outputTextElement.innerText += value;
    }
  }
}

function operatorInput(e) {
  const value = e.target.innerText;
  if (outputTextElement.innerText === "") return;
  else {
    outputTextElement.innerText = outputTextElement.innerText + `${value}`;

  }
}

function clearData () {
  outputTextElement.innerText = "";
  resultText.innerText = "";
}

