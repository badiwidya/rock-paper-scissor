function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const number = Math.floor(Math.random() * 3);
  return choice[number];
}

function getUserChoice(e) {
  return e.target.id;
}

let userScore = 0;
let computerScore = 0;

// Select p and span element to display message and score
const userScoreDisplay = document.querySelector("#score-1>span");
const computerScoreDisplay = document.querySelector("#score-2>span");
const msg = document.querySelector("message");

function playGame(e) {
  let userChoice = getUserChoice(e);
  let computerChoice = getComputerChoice();
  switch (userChoice) {
    case "paper":
      switch (computerChoice) {
        case "rock":
          break;
        case "scissors":
          break;
        case "paper":
          break;
      }
      break;
    case "rock":
      switch (computerChoice) {
        case "rock":
          break;
        case "scissors":
          break;
        case "paper":
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          break;
        case "scissors":
          break;
        case "paper":
          break;
      }
      break;
  }
}
