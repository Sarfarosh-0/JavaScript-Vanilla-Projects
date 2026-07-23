document.addEventListener("DOMContentLoaded", () => {
  const clickSound = document.getElementById("clickSound");

  // Helper function to play button click sound
  function playSound() {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {}); // Prevent errors if user hasn't interacted yet
    }
  }

  // --- Handlers for Input Actions ---
  function handleInput(char) {
    currentNumbers += char;
    numbersDisplay.textContent = currentNumbers;
    calculateResult(false);
  }

  function handleBackspace() {
    currentNumbers = currentNumbers.slice(0, -1);
    numbersDisplay.textContent = currentNumbers;
    calculateResult(false);
  }

  function handleClear() {
    currentNumbers = "";
    numbersDisplay.textContent = "";
    resultDisplay.textContent = "";
  }

  function handleCommit() {
    calculateResult(true);
  }

  // --- Button Click Event Delegation ---
  const inputBody = document.getElementById("inputBody");

  inputBody.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    playSound();

    const ariaLabel = button.getAttribute("aria-label");
    const textContent = button.textContent.trim();

    // Route actions based on aria-label or button text
    if (textContent === "C") {
      handleClear();
    } else if (ariaLabel === "Backspace") {
      handleBackspace();
    } else if (ariaLabel === "Equal To") {
      handleCommit();
    } else if (ariaLabel === "Percentage") {
      handleInput("%");
    } else if (ariaLabel === "Divide") {
      handleInput("/");
    } else if (ariaLabel === "Multiply") {
      handleInput("*");
    } else if (ariaLabel === "Subtract") {
      handleInput("-");
    } else if (ariaLabel === "Add") {
      handleInput("+");
    } else {
      // Numbers (0-9, 00, .)
      handleInput(textContent);
    }
  });

  // --- Keyboard Event Listener ---
  window.addEventListener("keydown", (event) => {
    const key = event.key;

    if (/^[0-9+\-*/%.]$/.test(key)) {
      playSound();
      handleInput(key);
    } else if (key === "Enter" || key === "=") {
      event.preventDefault();
      playSound();
      handleCommit();
    } else if (key === "Backspace") {
      playSound();
      handleBackspace();
    } else if (key === "Escape" || key.toLowerCase() === "c") {
      playSound();
      handleClear();
    }
  });
});
