const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const subContainerElement = document.getElementById("sub-container");
const beforeSearchElement = document.getElementById("before-search");
let errorTime;

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputElement.value) {
    return;
  } else {
    handleSubmit();
  }
});

function fetchData() {
  return fetch(url + inputElement.value)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

function resetState(state) {
  if (state.firstChild) {
    while (state.firstChild) {
      state.removeChild(state.firstChild);
    }
  }
}

async function handleSubmit() {
  const res = await fetchData();

  if (res.title) {
    beforeSearchElement.style.display = "block";
    beforeSearchElement.innerText = res.title;
    subContainerElement.style.display = "none";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      inputElement.value = "";
      beforeSearchElement.style.display = "none";
      inputElement.focus();
    }, 2000);
  } else {
    beforeSearchElement.style.display = "none";
    const searchWordElement = document.getElementById("search-word");
    const meaningsElement = document.getElementById("meanings");
    const audioElement = document.getElementById("audio");
    const phoneticElement = document.createElement("span");
    const wordElement = document.createElement("span");
    resetState(searchWordElement);
    wordElement.classList.add("word");
    phoneticElement.classList.add("phonetic");
    searchWordElement.appendChild(wordElement);
    searchWordElement.appendChild(phoneticElement);
    subContainerElement.style.display = "block";
    wordElement.innerText = res[0].word;

    for (let i = 0; i < res[0].phonetics.length; i++) {
      if (res[0].phonetics[i].text !== "undefined") {
        phoneticElement.innerText = res[0].phonetics[i].text;
      }
      if (res[0].phonetics[i].audio !== "") {
        audioElement.src = res[0].phonetics[i].audio;
      }
    }
    resetState(meaningsElement);
    for (let i = 0; i < res[0].meanings.length; i++) {
      const p = document.createElement("p");
      p.classList.add("mean");
      p.innerText = `(${res[0].meanings[i].partOfSpeech}): ${res[0].meanings[i].definitions[0].definition}`;
      meaningsElement.append(p);
    }
  }
  console.log(res);
}
