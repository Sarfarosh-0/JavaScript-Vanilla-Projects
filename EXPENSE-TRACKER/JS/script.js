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
    transactionUl.className = "contents";

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
    amount.classList.add("text-right", "font-semibold");
    if (type.textContent === "Income") {
      amount.classList.add("text-green-600");
    } else {
      amount.classList.add("text-red-600");
    }

    transactionUl.append(date, description, type, category, amount);
    transactionsContainer.appendChild(transactionUl);

    console.log("Transaction Rended Sucessfully");
  });
}

function addTransaction(e) {
  const isExpense =
    e && e.currentTarget && e.currentTarget.id === "JSaddExpense";
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

  // Clear inputs after adding so it's clean for next time
  document.getElementById(`${prefix}Date`).value = "";
  document.getElementById(`${prefix}Desc`).value = "";
  document.getElementById(`${prefix}Amt`).value = "";

  console.log("Transaction Added Sucessfully");
}

document.getElementById("modalOverlay").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTransaction();
    console.log("Enter Btn Works");
  }
});

function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
  console.log("Data Saved");
}

console.log("All Done");
renderTransactions();
