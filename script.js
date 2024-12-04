// Computer choice function

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  return choice[Math.floor(Math.random() * 3 + 1)];
}

// Get user choice function

function getUserChoice() {
  return prompt("Rock Paper Scissor: ");
}

let computerChoice = getComputerChoice();
let userChoice = getUserChoice();