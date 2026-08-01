const cities = ["delhi", "london", "tokyo", "dubai", "paris", "lisbon"];

async function citiesWeather() {
  for (const cityName of cities) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const cityTemp = document.getElementById(`${cityName}Temp`);
    console.log(cityName);

    const cityIcon = document.getElementById(`${cityName}Icon`);

    const res = await fetch(url);
    const data = await res.json();

    console.log("Temperature:", data.main.temp);
    console.log("Icon Code:", data.weather[0].icon);

    cityTemp.textContent = Math.floor(data.main.temp);
    console.log("Updated Temp Element:", cityTemp.textContent);

    cityIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log("Icon URL:", cityIcon.src);
    cityIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  }
}

citiesWeather();
