console.log("Welcome User Calculator Started");

const display = document.getElementById("numbers");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("#inputBody button");

// clearing all input of resultBody
display.textContent = 0;
result.textContent = "";

let currentNumbers = "";
console.log(currentNumbers);

currentNumbers += 10;
console.log(currentNumbers);

buttons.forEach((button) => {
  const value = button.textContent.trim();
  const ariaLabel = button.getAttribute("aria-label");
  console.log(value);
  console.log(ariaLabel);

  button.addEventListener("click", () => {
    if (value === "C") {
      // Clear Everything
      currentInput = "";
      numbersDisplay.textContent = "0";
      resultDisplay.textContent = "";
    } else if (ariaLabel === "Backspace") {
      // Remove last character
      currentInput = currentInput.slice(0, -1);
      numbersDisplay.textContent = currentInput || "0";
      calculateResult();
    } else if ("Equal To" === ariaLabel) {
      calculateResult();
    }

    if (ariaLabel === "Divide") appendValue = "/";
    if (ariaLabel === "Multiply") appendValue = "*";
    if (ariaLabel === "Subtract") appendValue = "-";
    if (ariaLabel === "Add") appendValue = "+";
    if (ariaLabel === "Percentage") appendValue = "%";

    if ("1" === value) {
      console.log("Enter 1");
      currentNumbers += 1;
      console.log(currentNumbers);
    }
  });
});
