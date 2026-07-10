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
    // Optional style boost: color income green and expenses red
    type.className =
      transaction.type === "Income" ? "text-green-600" : "text-red-600";

    const category = document.createElement("li");
    category.textContent = transaction.category;

    const amount = document.createElement("li");
    amount.textContent = transaction.amount;

    transactionUl.append(date, description, type, category, amount);
    transactionsContainer.appendChild(transactionUl);

    console.log("Transaction Rended Sucessfully");
  });
}

function addTransaction() {
  const date =
    document.getElementById("IncDate").value ||
    document.getElementById("ExpDate").value;
  const description =
    document.getElementById("IncDesc").value ||
    document.getElementById("ExpDesc").value;
  const category =
    document.getElementById("IncCat").value ||
    document.getElementById("ExpCat").value;
  const amount =
    document.getElementById("IncAmt").value ||
    document.getElementById("ExpAmt").value;

  transactions.push({
    date: date,
    description: description,
    type: "Income",
    category: category,
    amount: amount,
  });
  saveTransactions();
  renderTransactions();
  closeModal();

  console.log("Transaction Added Sucessfully");
}

document.getElementById("modalOverlay").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTransaction();
    console.log("Enter Btn Works");
  }
});

function saveTranscations() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
  console.log("Data Saved");
}

console.log("All Done");

renderTransactions();
