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

const apiKey = "f47d7dd01810e87ea474835a90444fc5";
const city = "Delhi";

// Step 3
async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    await fetch(url).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Done With Data");
  }
}

fetchWeather();

// // DOM Elements
// const city = document.getElementById("city");
// const country = document.getElementById("country");
// const weatherIcon = document.querySelector(".locationImage img");
// const cityTemp = document.getElementById("cityTemp");
// const weatherType = document.getElementById("weatherType");
// const humidity = document.getElementById("humidity");
// const windSpeed = document.getElementById("windSpeed");
// const pressure = document.getElementById("pressure");
// const visibility = document.getElementById("visibility");
// const weatherCard = document.getElementById("currentLocation");

// function initWeather() {
//   getUserLocation();
// }

// // Trigger initial load
// initWeather();
