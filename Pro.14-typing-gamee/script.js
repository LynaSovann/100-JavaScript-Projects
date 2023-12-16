const API_URL = "http://api.quotable.io/random";
const startGameBtn = document.getElementById("start-btn");
const gameContainerEl = document.getElementById("game-container");
const quoteContainerEl = document.getElementById("quote-container");
const inputContainerEl = document.getElementById("input-container");

startGameBtn.addEventListener("click", () => {
  gameContainerEl.classList.remove("hide");
  startGameBtn.classList.add("hide");
});

function fetchData() {
  const response = fetch(API_URL + "?tags=love").then((res) => res.json());
  return response.then((data) => data.content);
}

async function startGame() {
  quoteContainerEl.innerHTML = "";
  inputContainerEl.value = "";
  const data = await fetchData();

  data.split("").forEach((q) => {
    const spanEl = document.createElement("span");
    spanEl.innerText = q;
    quoteContainerEl.appendChild(spanEl);
  });
}

inputContainerEl.addEventListener("input", () => {
  inputText();
});

function inputText() {
  const individualQuote = document.querySelectorAll("span");
  let individualInput = inputContainerEl.value.split("");
  let correct = true;

  individualQuote.forEach((char, i) => {
    const inputChar = individualInput[i];

    if (inputChar == null) {
      char.classList.remove("correct");
      char.classList.remove("incorrect");
      correct = false;
    } else if (inputChar === char.innerText) {
      char.classList.add("correct");
      char.classList.remove("incorrect");
      correct = true;
    } else {
      char.classList.remove("correct");
      char.classList.add("incorrect");
    }
  });

  if (correct) {
    startGame();
  }
}

startGame();
