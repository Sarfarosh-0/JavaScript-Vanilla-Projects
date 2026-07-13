const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const totalBalance = document.getElementById("totalBalance");

let calTotalIncome = 0;
let calTotalExpense = 0;
let calTotalBalance = 0;

function calculateIncome() {
  calTotalIncome = 0;
  transactions.forEach((transaction) => {
    if (transaction.type === "Income") {
      calTotalIncome += parseFloat(transaction.amount) || 0;
    }
  });
  totalIncome.textContent = `₹ ${calTotalIncome.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function calculateExpense() {
  calTotalExpense = 0;
  transactions.forEach((transaction) => {
    if (transaction.type === "Expense") {
      calTotalExpense += parseFloat(transaction.amount) || 0;
    }
  });
  totalExpense.textContent = `₹ ${calTotalExpense.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function calculateBalance() {
  calTotalBalance = calTotalIncome - calTotalExpense;
  totalBalance.textContent = `₹ ${calTotalBalance.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  
  totalBalance.classList.remove("text-green-600", "text-blue-600", "text-red-600");

  if (calTotalBalance === 0) {
    totalBalance.classList.add("text-blue-600");
  } else if (calTotalBalance > 0) {
    totalBalance.classList.add("text-green-600");
  } else {
    totalBalance.classList.add("text-red-600");
  }
}

function clearAllTotals() {
  totalIncome.textContent = `₹ 0.00`;
  totalExpense.textContent = `₹ 0.00`;
  totalBalance.textContent = `₹ 0.00`;
  totalBalance.classList.remove("text-green-600", "text-blue-600", "text-red-600");
}

function runCalculations() {
  calculateIncome();
  calculateExpense();
  calculateBalance();
}