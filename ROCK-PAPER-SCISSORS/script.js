// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlElement.setAttribute("data-theme", newTheme);
});

// 1 : ROCK 2 : PAPER 3 : SICSSORS
const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");

// MANAGNG THE SCORE BOARD
let playerScore = Number(document.getElementById("PlayerScore").textContent);
const PlayerScore = document.getElementById("PlayerScore");
let computerScore = Number(document.getElementById("CompScore").textContent);
const ComputerScore = document.getElementById("CompScore");

// FUNCTION TO RELOAD THE GAME AT 15 POINTS
function CheckWinner() {
  if (playerScore >= 15) {
    setTimeout(() => {
      alert("Game is over PLAYER WON!");
      console.log("PLAYER WON and GAME OVER");
      location.reload();
    }, 1000);
  }
  if (computerScore >= 15) {
    setTimeout(() => {
      alert("Game is Over COMPUTER WON!");
      console.log("COMPUTER WON and GAME OVER");
      location.reload();
    }, 1000);
  }
}

// FUNCTION TO CHANGE THE COMPUTER CHOICE IMAGE
function ChangeComputerChoiceImage(compChoice) {
  const ImageName = "photo" + compChoice + ".png";
  const CompOption = document.getElementById("CompChoice");
  CompOption.src = ImageName;
}

// FUNCTION TO CHANGE THE COMPUTER CHOICE NAME
function ChangeComputerChoiceName(CompChoice) {
  const CompName = document.getElementById("CompChoiceName");
  if (CompChoice == 1) {
    CompName.textContent = "ROCK";
  } else if (CompChoice == 2) {
    CompName.textContent = "PAPER";
  } else if (CompChoice == 3) {
    CompName.textContent = "SCISSORS";
  }
}

// IF THE PLAYER PLAYS ROCK
Rock.addEventListener("click", function PlayRock() {
  const PlayerChoice = document.getElementById("PlayerChoice");
  PlayerChoice.src = "photo1.png";
  const PlayerChoiceName = document.getElementById("PlayerChoiceName");
  PlayerChoiceName.textContent = "ROCK";

  // GENERATING COMPUTER CHOICE
  const CompChoice = Math.floor(Math.random() * 3 + 1);
  ChangeComputerChoiceName(CompChoice);
  ChangeComputerChoiceImage(CompChoice);

  // ROCK VS ROCK
  if (CompChoice == 1) {
    const WhoWins = document.getElementById("WhoWins");
    WhoWins.textContent = "Its a DRAW!";
    const Beats = document.getElementById("Beats");
    Beats.textContent = "Nobody beats Nobody.";
  }
  // ROCK VS PAPER
  else if (CompChoice == 2) {
    const WhoWins = document.getElementById("WhoWins");
    WhoWins.textContent = "COMPUTER WINS!";
    const Beats = document.getElementById("Beats");
    Beats.textContent = "PAPER beats ROCK.";

    computerScore++;
    ComputerScore.textContent = computerScore;

    CheckWinner();
  }
  // ROCK VS SCISSORS
  else if (CompChoice == 3) {
    const WhoWins = document.getElementById("WhoWins");
    WhoWins.textContent = "PLAYER WINS!";
    const Beats = document.getElementById("Beats");
    Beats.textContent = "ROCK beats SCISSORS.";

    playerScore++;
    PlayerScore.textContent = playerScore;

    CheckWinner();
  }
});

// IF THE PLAYER CHOSES PAPER
Paper.addEventListener("click", function PlayPaper() {
  const PlayerChoice = document.getElementById("PlayerChoice");
  PlayerChoice.src = "photo2.png";
  const PlayerChoiceName = document.getElementById("PlayerChoiceName");
  PlayerChoiceName.textContent = "PAPER";

  // GENERATING COMPUTER CHOICE
  const CompChoice = Math.floor(Math.random() * 3 + 1);
  ChangeComputerChoiceName(CompChoice);
  ChangeComputerChoiceImage(CompChoice);

  // PAPER VS ROCK
  if (CompChoice == 1) {
    const WhoWins = document.getElementById("WhoWins");
    WhoWins.textContent = "PLAYER WINS!";
    const Beats = document.getElementById("Beats");
    Beats.textContent = "PAPER Beats ROCK.";

    playerScore++;
    PlayerScore.textContent = playerScore;

    CheckWinner();
  }
  // PAPER VS PAPER
  else if (CompChoice == 2) {
    const WhoWins = document.getElementById("WhoWins");
    WhoWins.textContent = "Its a DRAW!";
    const Beats = document.getElementById("Beats");
    Beats.textContent = "Nobody beats Nobody.";
  }
  // PAPER VS SCISSORS
  else {
    const WhoWins = document.getElementById("WhoWins");
    WhoWins.textContent = "COMPUTER WINS!";
    const Beats = document.getElementById("Beats");
    Beats.textContent = "SCISSORS beats PAPER.";

    computerScore++;
    ComputerScore.textContent = computerScore;

    CheckWinner();
  }
});

// IF THE PLAYER CHOSES SCISSORS
Scissors.addEventListener("click", function PlayScissors() {
  const PlayerChoice = document.getElementById("PlayerChoice");
  PlayerChoice.src = "photo3.png";
  const PlayerChoiceName = document.getElementById("PlayerChoiceName");
  PlayerChoiceName.textContent = "SCISSORS";

  // GENERATING COMPUTER CHOICE
  const CompChoice = Math.floor(Math.random() * 3 + 1);
  ChangeComputerChoiceName(CompChoice);
  ChangeComputerChoiceImage(CompChoice);

  // SCISSORS VS ROCK
  if (CompChoice == 1) {
    const WhoWins = document.getElementById("WhoWins");
    WhoWins.textContent = "COMPUTER WINS!";
    const Beats = document.getElementById("Beats");
    Beats.textContent = "ROCK beats SCISSORS";

    computerScore++;
    ComputerScore.textContent = computerScore;

    CheckWinner();
  }
  // SCISSORS VS PAPER
  else if (CompChoice == 2) {
    const WhoWins = document.getElementById("WhoWins");
    WhoWins.textContent = "PLAYER WINS!";
    const Beats = document.getElementById("Beats");
    Beats.textContent = "SCISSORS beats PAPER.";

    playerScore++;
    PlayerScore.textContent = playerScore;

    CheckWinner();
  }
  // SCISSORS VS SCISSORS
  else if (CompChoice == 3) {
    const WhoWins = document.getElementById("WhoWins");
    WhoWins.textContent = "Its a DRAW!";
    const Beats = document.getElementById("Beats");
    Beats.textContent = "Nobody beats Nobody.";
  }
});
