function calculateResult(isFinalCommit = false) {
  if (!currentNumbers) {
    resultDisplay.textContent = "";
    return;
  }

  try {
    let formattedExpr = currentNumbers.replace(/%/g, "/100");

    const evaluated = Function(`'use strict'; return (${formattedExpr})`)();

    if (
      evaluated !== undefined &&
      !isNaN(evaluated) &&
      evaluated !== Infinity
    ) {
      if (isFinalCommit) {
        currentNumbers = String(evaluated);
        numbersDisplay.textContent = currentNumbers;
        resultDisplay.textContent = "";
      } else {
        resultDisplay.textContent = evaluated;
      }
    }
  } catch (error) {
    resultDisplay.textContent = "Erorr";
  }
}
