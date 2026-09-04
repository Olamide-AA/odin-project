let computerScore = 0;
let humannScore = 0;

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

function getHumanChoice() {
  let humanChoice = prompt("Enter either 'rock', 'paper' or 'scissors'");
  humanChoice = humanChoice.toLowerCase();
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
    console.log("You win! Paper beats Rock");
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    computerScore += 1;
    console.log("Computer wins! Paper beats Rock");
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    humannScore += 1;
    console.log("You win! Rock beats Scissors");
  } else if (computerChoice == "rock" && humanChoice == "scissors") {
    computerScore += 1;
    console.log("Computer wins! Rock beats Scissors");
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    humannScore += 1;
    console.log("You Win! Scissors beats Paper");
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    computerScore += 1;
    console.log("Computer wins! Scissors beats Paper");
  } else {
    console.log("No winner!");
  }
}

function playGame() {
  for (let i = 1; i < 6; i++) {
    playRound(getComputerChoice(), getHumanChoice());
    console.log("Computer: score " + computerScore);

    console.log("You: score " + humannScore);
  }
}

playGame();
