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

// // DOM Elements
// const city = document.getElementById("city");
// const country = document.getElementById("country");
// const weatherIcon = document.querySelector(".locationImage img");
// const cityTemp = document.getElementById("cityTemp");
// const feelsLikes = document.getElementById("feelsLikes");
// const weatherType = document.getElementById("weatherType");
// const humidity = document.getElementById("humidity");
// const windSpeed = document.getElementById("windSpeed");
// const pressure = document.getElementById("pressure");
// const visibility = document.getElementById("visibility");

// const weatherCard = document.getElementById("currentLocation");
// const maxTemp = document.getElementById("maxTemp");
// const minTemp = document.getElementById("minTemp");

const apiKey = "";
const city = "Delhi";

// Step 3
async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("City:", data.name);
    console.log("Country:", data.sys.country);
    console.log("Weather Description:", data.weather[0].description);
    console.log("Current Temperature (°C):", data.main.temp);
    console.log("Feels Like Temperature (°C):", data.main.feels_like);
    console.log("Weather Condition:", data.weather[0].main);
    console.log("Humidity (%):", data.main.humidity);
    console.log("Wind Speed (m/s):", data.wind.speed);
    console.log("Atmospheric Pressure (hPa):", data.main.pressure);
    console.log("Visibility (meters):", data.visibility);

    console.log("Min Temp (°C):", data.main.temp_min);
    console.log("Max Temp (°C):", data.main.temp_max);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  } finally {
    console.log("Done fetching weather data.");
  }
}

fetchWeather();

// function initWeather() {
//   getUserLocation();
// }

// // Trigger initial load
// initWeather();
