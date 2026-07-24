console.log("APP UI JAVASCRIPT");

// Sidebar
const sideBar = document.getElementById("sidebar");
const CloseBar = document.getElementById("closeSidebarBtn");
CloseBar.addEventListener("click", closeSidebar);
const OpenBar = document.getElementById("openSidebarBtn");
OpenBar.addEventListener("click", openSidebar);

function openSidebar() {
  sidebar.classList.remove("-translate-x-full");
  OpenBar.classList.add("hidden");
}

function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    OpenBar.classList.remove("hidden");
}
