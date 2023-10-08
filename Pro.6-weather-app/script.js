const inputElement = document.getElementById("input");
const goBtnElement = document.getElementById("go-btn");
const url = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "57919df3f1f214c6d91adfc8b75bfee4";
let wrongInputTime;

goBtnElement.addEventListener("click", () => {
  if (!inputElement.value) return;
  else {
    handleSearch(inputElement.value);
  }
});

async function fetchApi(city) {
  const api = url + `?units=metric&appid=${api_key}&q=${city}`;
  const res = await fetch(api)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return res;
}

async function handleSearch(cityName) {
  const resultTextElement = document.getElementById("result-text");
  resultTextElement.style.display = "block";
  const searchElement = document.getElementById("search");
  searchElement.innerText = cityName;
  const iconElement = document.getElementById("icon");

  const weather = await fetchApi(cityName);
  const weatherElement = document.getElementById("weather");
  const celsiusElement = document.getElementById("celsius");
  const pressureElement = document.querySelector("[data-pressure]");
  const windElement = document.querySelector("[data-wind]");
  const humidityElement = document.querySelector("[data-humidity]");

  if (weather.cod === "404") {
    const notFoundElement = document.getElementById("not-found");
    notFoundElement.style.display = "block";
    weatherElement.style.display = "none";
    clearTimeout(wrongInputTime);
    wrongInputTime = setTimeout(() => {
      notFoundElement.style.display = "none";
      inputElement.value = "";
      resultTextElement.style.display = "none";
      inputElement.focus();
    }, 2000);
    return;
  }

if (weather.weather[0].main === "Clouds") {
  iconElement.src = "/icons/clouds.png";
} else if (weather.weather[0].main === "Clear") {
  iconElement.src = "/icons/clear-sky.png";
} else if (weather.weather[0].main === "Rain") {
  iconElement.src = "/icons/rain.png";
} else if (weather.weather[0].main === "Drizzle") {
  iconElement.src = "/icons/drizzle.png";
} else if (weather.weather[0].main === "Mist") {
  iconElement.src = "/icons/mist.png";
} else;

  weatherElement.style.display = "block";
  celsiusElement.innerText = Math.round(weather.main.temp) + "°C";
  humidityElement.innerText = weather.main.humidity + "%";
  windElement.innerText = Math.round(weather.wind.speed) + "km/h";
  pressureElement.innerText = weather.main.pressure;
console.log(weather)
}

inputElement.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && e.target.value) {
    handleSearch(e.target.value);
  }
});
