let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let roundResultText = document.querySelector("#result");
let score = document.querySelector(".score");
let humanScoreContainer = document.querySelector("#humanScore");
let computerScoreContainer = document.querySelector("#computerScore");

let computerScore = 0;
let humannScore = 0;

rock.addEventListener("click", () => {
  playRound(getComputerChoice(), getHumanChoice("rock"));
  declareWinner();
});
paper.addEventListener("click", () => {
  playRound(getComputerChoice(), getHumanChoice("paper"));
  declareWinner();
});
scissors.addEventListener("click", () => {
  playRound(getComputerChoice(), getHumanChoice("scissors"));
  declareWinner();
});

function getComputerChoice() {
  //Get a random number between 1 and 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  //return rock or paper or scissors for 1 2 3 respectiively
  switch (randomNumber) {
    case 1: {
      return "rock";
      break;
    }
    case 2: {
      return "paper";
      break;
    }
    case 3: {
      return "scissors";
      break;
    }
    default: {
      return "randomNumber error";
    }
  }
}

function getHumanChoice(humanChoice) {
  console.log(humanChoice);
  switch (humanChoice) {
    case "rock": {
      return "rock";
      break;
    }
    case "paper": {
      return "paper";
      break;
    }
    case "scissors": {
      return "scissors";
      break;
    }
    default: {
      return "Invalid input";
    }
  }
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice == "rock" && humanChoice == "paper") {
    humannScore += 1;
    roundResultText.textContent = "You win! Paper beats Rock";
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    computerScore += 1;
    roundResultText.textContent = "Computer wins! Paper beats Rock";
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    humannScore += 1;
    roundResultText.textContent = "You win! Rock beats Scissors";
  } else if (computerChoice == "rock" && humanChoice == "scissors") {
    computerScore += 1;
    roundResultText.textContent = "Computer wins! Rock beats Scissors";
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    humannScore += 1;
    roundResultText.textContent = "You Win! Scissors beats Paper";
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    computerScore += 1;
    roundResultText.textContent = "Computer wins! Scissors beats Paper";
  } else {
    roundResultText.textContent = "No winner!";
  }
  displayScore();
}

function resetScore() {
  computerScore = 0;
  humannScore = 0;
}

function displayScore() {
  humanScoreContainer.textContent = "Player: " + humannScore;
  computerScoreContainer.textContent = "Computer: " + computerScore;
}

function declareWinner() {
  if (computerScore == 5) {
    roundResultText.textContent = "Computer claims victory!";
    resetScore();
  } else if (humannScore == 5) {
    roundResultText.textContent = "You are the victor!";
    resetScore();
  }
}
