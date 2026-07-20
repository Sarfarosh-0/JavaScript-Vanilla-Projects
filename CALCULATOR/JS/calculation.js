const numbersDisplay = document.getElementById("numbers");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll("#inputBody button");

// clearing all input of resultBody
numbersDisplay.textContent = 0;
resultDisplay.textContent = "";

let currentNumbers = "";
console.log(currentNumbers);

currentNumbers += 10;
console.log(currentNumbers);

buttons.forEach((button) => {
  const value = button.textContent.trim();
  const ariaLabel = button.getAttribute("aria-label");

  button.addEventListener("click", () => {
    // 1. CLEAR ACTION
    if (value === "C") {
      currentNumbers = "";
      numbersDisplay.textContent = "0";
      resultDisplay.textContent = "";
    }

    // 2. BACKSPACE ACTION
    else if (ariaLabel === "Backspace") {
      currentNumbers = currentNumbers.slice(0, -1);
      numbersDisplay.textContent = currentNumbers || "0";
      calculateResult();
    }

    // 3. EQUALS ACTION
    else if (ariaLabel === "Equal To") {
      calculateResult();
    }

    // 4. OPERATOR ACTIONS (Appends using += instead of overwriting with =)
    else if (ariaLabel === "Divide") {
      currentNumbers += "/";
    } else if (ariaLabel === "Multiply") {
      currentNumbers += "*";
    } else if (ariaLabel === "Subtract") {
      currentNumbers += "-";
    } else if (ariaLabel === "Add") {
      currentNumbers += "+";
    } else if (ariaLabel === "Percentage") {
      currentNumbers += "%";
    }

    // 5. NUMBER & DECIMAL INPUTS
    // Instead of hardcoding "1", "2", etc., check if the value is a number or a decimal point
    else if (!isNaN(value) || value === ".") {
      // Prevent leading multiple zeros if the display is empty
      if (currentNumbers === "" && value === "0") {
        numbersDisplay.textContent = "0";
      } else {
        currentNumbers += value;
        numbersDisplay.textContent = currentNumbers;
      }
    }
  });
});
