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
  if (window.innerWidth >= 768) {
    mainContent.classList.add("ml-64");
  }
}

function closeSidebar() {
  sidebar.classList.add("-translate-x-full");
  mainContent.classList.remove("ml-64");
}
