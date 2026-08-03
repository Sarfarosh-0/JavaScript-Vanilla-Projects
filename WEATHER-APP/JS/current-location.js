// DOM Elements
const city = document.getElementById("city");
const country = document.getElementById("country");
const weatherIcon = document.querySelector(".locationImage img");
const cityTemp = document.getElementById("cityTemp");
const feelsLikes = document.getElementById("feelsLikes");
const weatherType = document.getElementById("weatherType");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");

const weatherCard = document.getElementById("currentLocation");
const maxTemp = document.getElementById("maxTemp");
const minTemp = document.getElementById("minTemp");

// Search Inputs
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const apiKey = "";

// const backgroundMap = {
//   Thunderstorm: "Resources/backgrounds/Thunderstorm.png",
//   Drizzle: "Resources/backgrounds/Light-Rain.png",
//   Rain: "Resources/backgrounds/Heavy-Rain.png",
//   Snow: "Resources/backgrounds/Snowfall.png",
//   Clouds: "Resources/backgrounds/Cloudy.png",
// };

// const atmosphereConditions = [
//   "Mist",
//   "Smoke",
//   "Haze",
//   "Dust",
//   "Fog",
//   "Sand",
//   "Ash",
//   "Squall",
//   "Tornado",
// ];

async function fetchWeather(queryParam = "Lucknow") {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${queryParam}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      alert("City not found. Please try again.");
      throw new Error(`City not found (${res.status})`);
    }

    const data = await res.json();

    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    const countryName = data.sys.country
      ? regionNames.of(data.sys.country)
      : "";

    city.textContent = data.name;
    country.textContent = countryName;
    weatherType.textContent = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // const weatherCondition = data.weather[0].main;

    // if (backgroundMap[weatherCondition]) {
    //   weatherCard.style.backgroundImage = `url('${backgroundMap[weatherCondition]}')`;
    // } else if (atmosphereConditions.includes(weatherCondition)) {
    //   weatherCard.style.backgroundImage =
    //     "url('Resources/backgrounds/fog.png')";
    // } else if (weatherCondition === "Clear") {
    //   const isNight = data.weather[0].icon.includes("n");
    //   weatherCard.style.backgroundImage = isNight
    //     ? "url('Resources/backgrounds/Clear-Night.png')"
    //     : "url('Resources/backgrounds/Bright-Sunny.png')";
    // }

    // Weather Data Updates
    cityTemp.textContent = Math.floor(data.main.temp);
    if (feelsLikes) feelsLikes.textContent = Math.floor(data.main.feels_like);
    if (minTemp) minTemp.textContent = Math.floor(data.main.temp_min);
    if (maxTemp) maxTemp.textContent = Math.floor(data.main.temp_max);

    humidity.textContent = data.main.humidity;
    windSpeed.textContent = data.wind.speed;
    pressure.textContent = data.main.pressure;
    visibility.textContent = (data.visibility / 1000).toFixed(1);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

async function hourlyForecast(queryParam = "Lucknow") {
  const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${queryParam}&cnt=5&appid=${apiKey}&units=metric`;

  try {
    const req = await fetch(hourlyUrl);

    if (!req.ok) {
      throw new Error(`City not found (${req.status})`);
    }
    const hourlyData = await req.json();

    const hourlyTime = document.querySelectorAll(".forecast-time");
    const hourlyIcon = document.querySelectorAll(".forecast-icon");
    const hourlyTemp = document.querySelectorAll(".forecast-temp");

    const hourlyForecastList = hourlyData.list.map((item, index) => ({
      time:
        index === 0
          ? "Now"
          : new Date(item.dt * 1000).toLocaleTimeString("en-IN", {
              hour: "numeric",
              hour12: true,
            }),
      temp: Math.round(item.main.temp),
      icon: item.weather[0].icon,
      description: item.weather[0].description,
    }));

    hourlyForecastList.forEach((data, index) => {
      if (hourlyTime[index]) {
        hourlyTime[index].textContent = data.time;
      }
      if (hourlyTemp[index]) {
        hourlyTemp[index].textContent = data.temp;
      }
      if (hourlyIcon[index]) {
        hourlyIcon[index].src =
          `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
        hourlyIcon[index].alt = data.description;
      }
    });
  } catch (error) {
    console.error("Error fetching forecast:", error);
  }
}

function handleSearch() {
  const query = searchInput.value.trim();
  if (query !== "") {
    fetchWeather(query);
    hourlyForecast(query);
    searchInput.value = "";
  }
}

searchButton.addEventListener("click", handleSearch);

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

// Initial load for Lucknow
fetchWeather("Lucknow");
hourlyForecast("Lucknow");
