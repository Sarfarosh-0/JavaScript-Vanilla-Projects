// Generate random number between 1 and 100
const compGuess = Math.floor(Math.random() * 100) + 1;
console.log("Answer is:", compGuess);

const submitButton = document.getElementById("CheckAnswer");
submitButton.addEventListener("click", checkAnswer);
document.getElementById("guessNum").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

let attemptsLeft = 5;

function checkAnswer() {
  const inputElement = document.getElementById("guessNumber");
  const hintElement = document.getElementById("hintMessage");
  const attemptElement = document.getElementById("attemptLeft");

  const userGuess = parseInt(inputElement.value, 10);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    hintElement.textContent = "Sorry Invalid Number";
    inputElement.value = "";
    return;
  }

  attemptsLeft--;

  if (userGuess === compGuess) {
    hintElement.innerText = "Congratulations! You guessed it!";
    endGame(inputElement, submitButton);
    return;
  }

  if (userGuess < compGuess) {
    hintElement.innerText = "Too low! Try a bigger number.";
  } else {
    hintElement.innerText = "Too high! Try a smaller number.";
  }

  if (attemptsLeft > 0) {
    attemptElement.innerText = attemptsLeft;
  } else {
    attemptElement.innerText = "0";
    hintElement.innerText = `Game Over! Correct Guess is ${compGuess}`;
    endGame(inputElement, submitButton);
  }
  
  inputElement.value = "";
}

function endGame(input, button) {
  input.disabled = true;
  button.disabled = true;
  button.style.opacity = "0.5";
  button.style.cursor = "not-allowed";

  setTimeout(() => {
    location.reload();
  }, 3000);
}
