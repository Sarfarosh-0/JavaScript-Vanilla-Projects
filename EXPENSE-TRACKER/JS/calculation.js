const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const totalBalance = document.getElementById("totalBalance");

let calTotalIncome = 0;

function calculateIncome() {
  transactions.forEach((transaction) => {
    calTotalIncome = calTotalIncome + transaction.amount;

    totalIncome.textContent = calTotalIncome;
  });
}
