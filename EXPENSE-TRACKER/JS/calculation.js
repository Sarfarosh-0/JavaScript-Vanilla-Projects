const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const totalBalance = document.getElementById("totalBalance");

let calTotalIncome = parseInt(0);
let calTotalExpense = parseInt(0);
let calTotalBalance = parseInt(0);

function calculateIncome() {
  transactions.forEach((transaction) => {
    if (transaction.type === "Income") {
      calTotalIncome = calTotalIncome + parseInt(transaction.amount);
      totalIncome.textContent = calTotalIncome;
    }
  });
}

function calculateExpense() {
  transactions.forEach((transaction) => {
    if (transaction.type === "Expense") {
      calTotalExpense = calTotalExpense + parseInt(transaction.amount);
      totalExpense.textContent = calTotalExpense;
    }
  });
}

function calculateBalance() {
  transactions.forEach((transaction) => {
    calTotalBalance = calTotalIncome - calTotalExpense;
    totalBalance.textContent = calTotalBalance;
  });
}
