console.log("Expense Tracker Started");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

document
  .getElementById("JSaddIncome")
  .addEventListener("click", addTransaction);

document
  .getElementById("JSaddExpense")
  .addEventListener("click", addTransaction);

function renderTransactions() {
  const transactionsContainer = document.getElementById("transactionsHistory");
  transactionsContainer.innerHTML = "";

  transactions.forEach((transaction, index) => {
    const transactionUl = document.createElement("ul");
    transactionUl.classList.add("contents");

    const date = document.createElement("li");
    date.textContent = transaction.date;

    const description = document.createElement("li");
    description.textContent = transaction.description;

    const type = document.createElement("li");
    type.textContent = transaction.type;
    type.className =
      transaction.type === "Income" ? "text-green-600" : "text-red-600";
    type.classList.add("font-semibold");

    const category = document.createElement("li");
    category.textContent = transaction.category;

    const amount = document.createElement("li");
    amount.textContent = `₹${Number(transaction.amount).toLocaleString("en-IN")}`;
    amount.classList.add("text-right", "font-semibold", "py-1");
    if (type.textContent === "Income") {
      amount.classList.add("text-green-600");
    } else {
      amount.classList.add("text-red-600");
    }

    transactionUl.append(date, description, type, category, amount);
    transactionsContainer.appendChild(transactionUl);
  });
}

function addTransaction(e, forcedType) {
  const isExpense =
    forcedType === "Expense" ||
    (e && e.currentTarget && e.currentTarget.id === "JSaddExpense");
  const prefix = isExpense ? "Exp" : "Inc";

  const date = document.getElementById(`${prefix}Date`).value;
  const description = document.getElementById(`${prefix}Desc`).value;
  const category = document.getElementById(`${prefix}Cat`).value;
  const amount = document.getElementById(`${prefix}Amt`).value;

  if (!date || !amount) {
    alert("Please fill in at least the Date and Amount fields!");
    return;
  }

  transactions.push({
    date: date,
    description: description || "No description",
    type: isExpense ? "Expense" : "Income",
    category: category,
    amount: amount,
  });

  saveTransactions();
  renderTransactions();
  closeModal();

  document.getElementById(`${prefix}Date`).value = "";
  document.getElementById(`${prefix}Desc`).value = "";
  document.getElementById(`${prefix}Amt`).value = "";
}

document.getElementById("incomeModal").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTransaction(null, "Income");
  }
});

document.getElementById("expenseModal").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTransaction(null, "Expense");
  }
});

function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

renderTransactions();

document
  .getElementById("JSclearAllData")
  .addEventListener("click", deleteAllData);

function deleteAllData() {
  localStorage.clear();
  transactions = [];
  renderTransactions();
  closeModal();
}
