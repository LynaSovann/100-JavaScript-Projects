const generateButton = document.querySelector("[data-generate-btn]");
const inputElement = document.querySelector("[data-input]");
const copyButton = document.querySelector("[data-copy-btn]");

if (!inputElement.value) {
  copyButton.disabled = true;
} else {
  copyButton.disabled = false;
}

copyButton.addEventListener("click", () => {
  inputElement.select();
  navigator.clipboard.writeText(inputElement.value);
});

generateButton.addEventListener("click", () => {
  inputElement.value = generatePassword();
  copyButton.disabled = false;
});

function generatePassword() {
  const option =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * option.length);
    password = password + option.substring(randomNum, randomNum + 1);
  }
  return password;
}
