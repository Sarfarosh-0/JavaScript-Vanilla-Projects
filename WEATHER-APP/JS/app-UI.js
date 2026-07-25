console.log("APP UI JAVASCRIPT");

const sidebar = document.getElementById("sidebar");
const closeBarBtn = document.getElementById("closeSidebarBtn");
const openBarBtn = document.getElementById("openSidebarBtn");
const mainContent = document.getElementById("mainContent");

closeBarBtn.addEventListener("click", closeSidebar);
openBarBtn.addEventListener("click", openSidebar);
// mainContent.addEventListener("click", closeSidebar);

function openSidebar() {
  sidebar.classList.remove("-translate-x-full");
  openBarBtn.classList.add('hidden')
  if (window.innerWidth >= 768) {
    mainContent.classList.add("ml-64");
  }
}

function closeSidebar() {
  openBarBtn.classList.remove('hidden')
  sidebar.classList.add("-translate-x-full");
  mainContent.classList.remove("ml-64");
}

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
setInterval(UpdateClock,1000)