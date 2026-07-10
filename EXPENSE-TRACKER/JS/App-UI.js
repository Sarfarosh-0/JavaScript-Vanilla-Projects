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

const overlay = document.getElementById("modalOverlay");
const incomeModal = document.getElementById("incomeModal");
const expenseModal = document.getElementById("expenseModal");

const openIncomeDesktopBtn = document.getElementById("addIncomeDesktop");
const openExpenseDesktopBtn = document.getElementById("addExpenseDesktop");

const openIncomeMobileBtn = document.getElementById("addIncomeMobile");
const openExpenseMobileBtn = document.getElementById("addExpenseMobile");

function openModal(modalType) {
  overlay.classList.remove("hidden");

  if (modalType === "income") {
    incomeModal.classList.remove("hidden");
    expenseModal.classList.add("hidden");
  } else if (modalType === "expense") {
    expenseModal.classList.remove("hidden");
    incomeModal.classList.add("hidden");
  }
}

function closeModal() {
  overlay.classList.add("hidden");
  incomeModal.classList.add("hidden");
  expenseModal.classList.add("hidden");
}

openIncomeDesktopBtn.addEventListener("click", () => openModal("income"));
openExpenseDesktopBtn.addEventListener("click", () => openModal("expense"));
openIncomeMobileBtn.addEventListener("click", () => openModal("income"));
openExpenseMobileBtn.addEventListener("click", () => openModal("expense"));

document.querySelectorAll(".close-modal-btn").forEach((button) => {
  button.addEventListener("click", closeModal);
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});
