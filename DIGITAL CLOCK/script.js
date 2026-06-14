// Function to Change the Date
function UpdateDate() {
  const date = new Date();
  document.getElementById("Month").textContent = date.toLocaleDateString(
    "en-us",
    { month: "long" },
  );
  document.getElementById("Date").textContent = date.getDate() + ",";
  document.getElementById("Year").textContent = date.getFullYear();
  document.getElementById("WeekDay").textContent = date.toLocaleDateString(
    "en-us",
    { weekday: "long" },
  );
}
UpdateDate();
setInterval(UpdateDate, 60000);

let Hour12;
let Hour24;

//Function For 24 Hour Clock
function UpdateClock24() {
  const date = new Date();
  clearInterval(Hour12);
  document.getElementById("AM_PM").style.display = "none";
  document.getElementById("Hour").textContent = String(
    date.getHours(),
  ).padStart(2, "0");
  document.getElementById("Minutes").textContent = String(
    date.getMinutes(),
  ).padStart(2, "0");
  document.getElementById("Seconds").textContent = String(
    date.getSeconds(),
  ).padStart(2, "0");
}

//Function For 12 Hour Clock
function UpdateClock12() {
  const date = new Date();
  clearInterval(Hour24);
  const time12Hour = date.toLocaleDateString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  document.getElementById("AM_PM").style.display = "block";
  document.getElementById("Hour").textContent = time12Hour
    .slice(11, 13)
    .padStart(2, "0");
  document.getElementById("Minutes").textContent = time12Hour
    .slice(14, 16)
    .padStart(2, "0");
  document.getElementById("Seconds").textContent = time12Hour
    .slice(17, 19)
    .padStart(2, "0");
}

// Calling the 12 Hour Clock on Click
document.getElementById("Format_12").addEventListener("click", () => {
  UpdateClock12();
  Hour12 = setInterval(UpdateClock12, 1000);
});

// Calling the 24 Hour Clock on Click
document.getElementById("Format_24").addEventListener("click", () => {
  UpdateClock24();
  Hour24 = setInterval(UpdateClock24, 1000);
});

// Changing the Theme
const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");

lightBtn.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "light");
});

darkBtn.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "dark");
});
