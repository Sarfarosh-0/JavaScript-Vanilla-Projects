const cities = ["delhi", "london", "tokyo", "dubai", "paris", "lisbon"];

async function citiesWeather() {
  for (const cityName of cities) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const cityTemp = document.getElementById(`${cityName}Temp`);
    const cityIcon = document.getElementById(`${cityName}Icon`);

    const res = await fetch(url);
    const data = await res.json();

    cityTemp.textContent = Math.floor(data.main.temp);
    cityIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  }
}

document
  .getElementById("delhiBtn")
  .addEventListener("click", fetchWeather(delhi), hourlyForecast(delhi));
document
  .getElementById("londonBtn")
  .addEventListener("click", fetchWeather(london), hourlyForecast(london));
document
  .getElementById("tokyoBtn")
  .addEventListener("click", fetchWeather(tokyo), hourlyForecast(tokyo));
document
  .getElementById("dubaiBtn")
  .addEventListener("click", fetchWeather(dubai), hourlyForecast(dubai));
document
  .getElementById("parisBtn")
  .addEventListener("click", fetchWeather(paris), hourlyForecast(paris));
document
  .getElementById("lisbonBtn")
  .addEventListener("click", fetchWeather(lisbon), hourlyForecast(lisbon));

citiesWeather();
