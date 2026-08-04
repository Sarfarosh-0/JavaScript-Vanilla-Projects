// FIX: Fallback check for apiKey in case popular-cities.js executes independently
const currentApiKey =
  typeof apiKey !== "undefined"
    ? apiKey
    : window.apiKey || "b83cfd06763dcc81368e69f8fadcbb3b";

const cities = ["delhi", "london", "tokyo", "dubai", "paris", "lisbon"];

async function citiesWeather() {
  for (const cityName of cities) {
    // FIX: Using currentApiKey variable to prevent reference errors if scope differs
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${currentApiKey}&units=metric`;

    const cityTemp = document.getElementById(`${cityName}Temp`);
    const cityIcon = document.getElementById(`${cityName}Icon`);

    // FIX: Added try...catch block to prevent uncaught network error rejections
    try {
      const res = await fetch(url);
      if (!res.ok) continue; // FIX: Skip to next iteration if request fails

      const data = await res.json();

      if (cityTemp) cityTemp.textContent = Math.floor(data.main.temp);
      if (cityIcon)
        cityIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    } catch (err) {
      console.error(`Error fetching weather for ${cityName}:`, err);
    }
  }
}

// FIX:
// 1. Used string literals ("delhi", "london", etc.) instead of undefined variables.
// 2. Wrapped function calls in arrow functions so they execute on click rather than immediately on load.
// 3. Combined multiple function calls inside a single callback for each event listener.
// 4. Fixed element ID target for London button ("londonBtn" instead of "LondonBtn" to match updated HTML ID).

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
