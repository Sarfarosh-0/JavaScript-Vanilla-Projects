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

citiesWeather();
