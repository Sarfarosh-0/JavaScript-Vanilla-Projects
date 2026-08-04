const currentApiKey =
  typeof apiKey !== "undefined"
    ? apiKey
    : window.apiKey || "";

const cities = ["delhi", "london", "tokyo", "dubai", "paris", "lisbon"];

async function citiesWeather() {
  for (const cityName of cities) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${currentApiKey}&units=metric`;

    const cityTemp = document.getElementById(`${cityName}Temp`);
    const cityIcon = document.getElementById(`${cityName}Icon`);

    try {
      const res = await fetch(url);
      if (!res.ok) continue;

      const data = await res.json();

      if (cityTemp) cityTemp.textContent = Math.floor(data.main.temp);
      if (cityIcon)
        cityIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    } catch (err) {
      console.error(`Error fetching weather for ${cityName}:`, err);
    }
  }
}

const delhiBtn = document.getElementById("delhiBtn");
if (delhiBtn) {
  delhiBtn.addEventListener("click", () => {
    fetchWeather("delhi");
    hourlyForecast("delhi");
  });
}

const londonBtn = document.getElementById("londonBtn");
if (londonBtn) {
  londonBtn.addEventListener("click", () => {
    fetchWeather("london");
    hourlyForecast("london");
  });
}

const tokyoBtn = document.getElementById("tokyoBtn");
if (tokyoBtn) {
  tokyoBtn.addEventListener("click", () => {
    fetchWeather("tokyo");
    hourlyForecast("tokyo");
  });
}

const dubaiBtn = document.getElementById("dubaiBtn");
if (dubaiBtn) {
  dubaiBtn.addEventListener("click", () => {
    fetchWeather("dubai");
    hourlyForecast("dubai");
  });
}

const parisBtn = document.getElementById("parisBtn");
if (parisBtn) {
  parisBtn.addEventListener("click", () => {
    fetchWeather("paris");
    hourlyForecast("paris");
  });
}

const lisbonBtn = document.getElementById("lisbonBtn");
if (lisbonBtn) {
  lisbonBtn.addEventListener("click", () => {
    fetchWeather("lisbon");
    hourlyForecast("lisbon");
  });
}

citiesWeather();
