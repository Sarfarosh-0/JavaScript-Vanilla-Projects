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
const clearDataModal = document.getElementById("clearDataModal");

const openIncomeDesktopBtn = document.getElementById("addIncomeDesktop");
const openExpenseDesktopBtn = document.getElementById("addExpenseDesktop");

const openIncomeMobileBtn = document.getElementById("addIncomeMobile");
const openExpenseMobileBtn = document.getElementById("addExpenseMobile");

const clearAllData = document.getElementById("clearAllData");

const viewAllTransactions = document.getElementById("viewAllTransactions");

function openModal(modalType) {
  overlay.classList.remove("hidden");

  if (modalType === "income") {
    incomeModal.classList.remove("hidden");
    expenseModal.classList.add("hidden");
    clearDataModal.classList.add("hidden");
  } else if (modalType === "expense") {
    expenseModal.classList.remove("hidden");
    incomeModal.classList.add("hidden");
    clearDataModal.classList.add("hidden");
  } else if (modalType === "clearData") {
    clearDataModal.classList.remove("hidden");
    expenseModal.classList.add("hidden");
    incomeModal.classList.add("hidden");
  }
}

function closeModal() {
  overlay.classList.add("hidden");
  incomeModal.classList.add("hidden");
  expenseModal.classList.add("hidden");
  clearDataModal.classList.add("hidden");
}

openIncomeDesktopBtn.addEventListener("click", () => openModal("income"));
openExpenseDesktopBtn.addEventListener("click", () => openModal("expense"));
openIncomeMobileBtn.addEventListener("click", () => openModal("income"));
openExpenseMobileBtn.addEventListener("click", () => openModal("expense"));
clearAllData.addEventListener("click", () => openModal("clearData"));

document.querySelectorAll(".close-modal-btn").forEach((button) => {
  button.addEventListener("click", closeModal);
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((nav) => {
      nav.classList.remove(
        "bg-blue-400",
        "border",
        "border-white",
        "text-white",
        "font-semibold",
        "shadow-md",
      );
      nav.classList.add("text-black", "hover:bg-gray-200");
    });

    this.classList.remove("text-black", "hover:bg-gray-200");
    this.classList.add(
      "bg-blue-400",
      "border",
      "border-white",
      "text-white",
      "font-semibold",
      "shadow-md",
    );
  });
});

const modalWrapper = document.getElementById("modalWrapper");
const transactionsSection = document.getElementById("transactions");
const transactionsHistory = document.getElementById("transactionsHistory");
const tableTitle = document.getElementById("tableTitle");
const viewAllBtn = document.getElementById("viewAllBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

viewAllBtn.addEventListener("click", (e) => {
  e.preventDefault();

  modalWrapper.classList.add(
    "fixed",
    "inset-0",
    "z-50",
    "flex",
    "items-center",
    "justify-center",
    "bg-black/60",
    "backdrop-blur-sm",
    "p-4",
    "opacity-100"
  );
  modalWrapper.classList.remove("w-full");

  transactionsSection.classList.add(
    "flex",
    "flex-col",
    "w-full", 
    "max-w-4xl",
    "max-h-[85vh]", 
    "p-6",
    "shadow-2xl"
  );
  transactionsSection.classList.remove("mt-3", "p-4", "shadow-lg", "min-h-96", "h-auto");

  transactionsHistory.classList.add("flex-grow", "overflow-y-auto");
  transactionsHistory.classList.remove("md:max-h-[320px]", "max-h-[250px]", "overflow-hidden");

  tableTitle.textContent = "All Transactions";
  viewAllBtn.classList.add("hidden");
  closeModalBtn.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
});

closeModalBtn.addEventListener("click", () => {
  modalWrapper.classList.remove(
    "fixed",
    "inset-0",
    "z-50",
    "flex",
    "items-center",
    "justify-center",
    "bg-black/60",
    "backdrop-blur-sm",
    "p-4",
    "opacity-100"
  );
  modalWrapper.classList.add("w-full");

  transactionsSection.classList.remove(
    "flex",
    "flex-col",
    "w-full",
    "max-w-4xl",
    "max-h-[85vh]",
    "p-6",
    "shadow-2xl"
  );
  transactionsSection.classList.add("mt-3", "p-4", "shadow-lg", "min-h-96");
  
  transactionsHistory.classList.remove("flex-grow", "overflow-y-auto");
  transactionsHistory.classList.add(
    "md:max-h-[320px]",
    "max-h-[250px]",
    "overflow-hidden"
  );

  tableTitle.textContent = "Recent Transactions";
  viewAllBtn.classList.remove("hidden");
  closeModalBtn.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});