console.log("APP UI JAVASCRIPT");

// Date and Time
console.log("Date and Time");

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

function UpdateClock() {
  const date = new Date();
  document.getElementById("Hour").textContent = String(
    date.getHours(),
  ).padStart(2, "0");
  document.getElementById("Minutes").textContent = String(
    date.getMinutes(),
  ).padStart(2, "0");
}

UpdateClock();
setInterval(UpdateClock, 1000);
