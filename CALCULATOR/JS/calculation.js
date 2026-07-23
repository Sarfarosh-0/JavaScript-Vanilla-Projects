document.addEventListener("keydown", (event) => {
  const key = event.key;

  // 1. Numbers, decimal point, and operators
  if (/^[0-9+\-*/%.]$/.test(key)) {
    // Append the pressed character to your math expression
    currentNumbers += key;
    numbersDisplay.textContent = currentNumbers;
    calculateResult(false); // Update live preview
  }
  // 2. Commit / Equals (Enter or '=')
  else if (key === "Enter" || key === "=") {
    event.preventDefault(); // Prevents default form submission if inside a form
    calculateResult(true); // Commit the final answer
  }
  // 3. Delete / Backspace
  else if (key === "Backspace") {
    currentNumbers = currentNumbers.slice(0, -1);
    numbersDisplay.textContent = currentNumbers;
    calculateResult(false); // Recalculate preview
  }
  // 4. Clear (Escape or 'c' / 'C')
  else if (key === "Escape" || key.toLowerCase() === "c") {
    currentNumbers = "";
    numbersDisplay.textContent = "";
    resultDisplay.textContent = "";
  }
});
