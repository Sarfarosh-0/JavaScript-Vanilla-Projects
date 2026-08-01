// function getUserLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition, showError);
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }
// }

// // Success callback function
// function showPosition(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   console.log(lat);
//   console.log(lon);

// }

// // Error handling callback function
// function showError(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       console.log("User denied the request for Geolocation.");
//       break;
//     case error.POSITION_UNAVAILABLE:
//       console.log("Location information is unavailable.");
//       break;
//     case error.TIMEOUT:
//       console.log("The request to get user location timed out.");
//       break;
//     default:
//       console.log("An unknown error occurred.");
//   }
// }

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

const apiKey = "";

const cityName = "Delhi";

// Step 3
async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const regionNames = new Intl.DisplayNames(["en"], {
      type: "region",
    });
    const countryName = regionNames.of(data.sys.country);
    city.textContent = data.name;
    country.textContent = countryName;

    console.log("Weather Description:", data.weather[0].description);
    console.log("Weather Condition:", data.weather[0].main);

    cityTemp.textContent = Math.floor(data.main.temp);
    feelsLikes.textContent = Math.floor(data.main.feels_like);
    minTemp.textContent = Math.floor(data.main.temp_min);
    maxTemp.textContent = Math.floor(data.main.temp_max);

    humidity.textContent = data.main.humidity;
    windSpeed.textContent = data.wind.speed;
    pressure.textContent = data.main.pressure;
    visibility.textContent = (data.visibility / 1000).toFixed(1);

  } catch (error) {
    console.error("Error fetching weather data:", error);
  } finally {
    console.log("Done fetching weather data.");
  }
}

fetchWeather();
