const numbersDisplay = document.getElementById("numbers");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll("#inputBody button");

// Initialize displays
numbersDisplay.textContent = "0";
resultDisplay.textContent = "";

let currentNumbers = "";

buttons.forEach((button) => {
  const value = button.textContent.trim();
  const ariaLabel = button.getAttribute("aria-label");

  button.addEventListener("click", () => {
    // 1. CLEAR ACTION
    if (value === "C") {
      currentNumbers = "";
      resultDisplay.textContent = "";
    }

    // 2. BACKSPACE ACTION
    else if (ariaLabel === "Backspace") {
      currentNumbers = currentNumbers.slice(0, -1);
      calculateResult(); // Updates calculation preview if needed
    }

    // 3. EQUALS ACTION
    else if (ariaLabel === "Equal To") {
      calculateResult();
    }

    // 4. OPERATOR ACTIONS
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

    else if (!isNaN(value) || value === ".") {
      if (currentNumbers === "" && value === "0") {
      } else {
        currentNumbers += value;
      }
    }

    numbersDisplay.textContent = currentNumbers || "0";
  });
});

function calculateResult() {
  if (!currentNumbers) {
    resultDisplay.textContent = "";
    return;
  }

  try {
    const formattedExpr = currentNumbers.replace(/%/g, "/100");
    const evaluated = eval(formattedExpr);
    resultDisplay.textContent = evaluated;
  } catch (error) {
    resultDisplay.textContent = "";
  }
}
