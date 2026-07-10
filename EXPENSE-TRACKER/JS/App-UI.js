const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const mainContent = document.getElementById("mainContent");

sidebarToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isHidden = sidebar.classList.contains("-translate-x-full");
  isHidden ? openSidebar() : closeSidebar();
});

function openSidebar() {
  sidebar.classList.remove("-translate-x-full");
  sidebarToggleBtn.classList.add("hidden");

  if (window.innerWidth >= 768) {
    mainContent.classList.add("md:ml-52");
  }
}

function closeSidebar() {
  sidebar.classList.add("-translate-x-full");
  sidebarToggleBtn.classList.remove("hidden");

  if (window.innerWidth >= 768) {
    mainContent.classList.remove("md:ml-52");
  }
}

closeSidebarBtn.addEventListener("click", closeSidebar);
