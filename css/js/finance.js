// Select elements
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const expenseNote = document.getElementById("expense-note");
const savingAmount = document.getElementById("saving-amount");
const savingNote = document.getElementById("saving-note");
const addExpenseBtn = document.getElementById("add-expense-btn");
const addSavingBtn = document.getElementById("add-saving-btn");

const totalExpenseEl = document.getElementById("total-expense");
const totalSavingsEl = document.getElementById("total-savings");
const totalBalanceEl = document.getElementById("total-balance");
const transactionList = document.getElementById("transaction-list");

let totalExpense = 0;
let totalSavings = 0;

// Update summary cards
function updateSummary() {
  totalExpenseEl.textContent = `₹${totalExpense}`;
  totalSavingsEl.textContent = `₹${totalSavings}`;
  totalBalanceEl.textContent = `₹${totalSavings - totalExpense}`;
}

// Add Expense
addExpenseBtn.addEventListener("click", () => {
  const amount = parseFloat(expenseAmount.value);
  const category = expenseCategory.value.trim() || "Misc";
  const note = expenseNote.value.trim();

  if (!amount || amount <= 0) {
    alert("Please enter a valid expense amount.");
    return;
  }

  totalExpense += amount;

  const li = document.createElement("li");
  li.classList.add("expense");
  li.innerHTML = `
    <span>− ₹${amount} (${category}) ${note ? "- " + note : ""}</span>
    <span>${new Date().toLocaleDateString()}</span>
  `;

  transactionList.prepend(li);
  updateSummary();

  expenseAmount.value = "";
  expenseCategory.value = "";
  expenseNote.value = "";
});

// Add Saving
addSavingBtn.addEventListener("click", () => {
  const amount = parseFloat(savingAmount.value);
  const note = savingNote.value.trim();

  if (!amount || amount <= 0) {
    alert("Please enter a valid saving amount.");
    return;
  }

  totalSavings += amount;

  const li = document.createElement("li");
  li.classList.add("saving");
  li.innerHTML = `
    <span>+ ₹${amount} ${note ? "- " + note : ""}</span>
    <span>${new Date().toLocaleDateString()}</span>
  `;

  transactionList.prepend(li);
  updateSummary();

  savingAmount.value = "";
  savingNote.value = "";
});

updateSummary();
