const numbersDisplay = document.getElementById("numbers");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll("#inputBody button");
const clickSound = document.getElementById("clickSound");

// Initial state setups
numbersDisplay.textContent = "0";
resultDisplay.textContent = "";

let currentNumbers = "";

function playAudio() {
  if (clickSound) {
    clickSound.currentTime = 0; 
    clickSound.play().catch(() => {
      console.log('Audio Stoped');
    });
  }
}

buttons.forEach((button) => {
  const value = button.textContent.trim();
  const ariaLabel = button.getAttribute("aria-label");

  button.addEventListener("click", () => {
    playAudio();

    // 1. CLEAR ACTION
    if (value === "C") {
      currentNumbers = "";
      resultDisplay.textContent = "";
    }

    // 2. BACKSPACE ACTION
    else if (ariaLabel === "Backspace") {
      currentNumbers = currentNumbers.slice(0, -1);
    }

    // 3. EQUALS ACTION
    else if (ariaLabel === "Equal To") {
      calculateResult(true);
      return;
    }

    // 4. OPERATORS
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

    // 5. PARENTHESES TOGGLE ()
    // else if (value === "()") {
    //   const openCount = (currentNumbers.match(/\(/g) || []).length;
    //   const closeCount = (currentNumbers.match(/\)/g) || []).length;
    //   const lastChar = currentNumbers.slice(-1);

    //   if (openCount > closeCount && (!isNaN(lastChar) || lastChar === ")")) {
    //     currentNumbers += ")";
    //   } else {
    //     currentNumbers += "(";
    //   }
    // }

    // 6. NUMBERS & DECIMAL INPUT
    else if (!isNaN(value) || value === ".") {
      if (currentNumbers === "" && value === "0") {
      } else {
        currentNumbers += value;
      }
    }

    // Synchronize UI Displays
    numbersDisplay.textContent = currentNumbers || "0";
    calculateResult(false); 
  });
});