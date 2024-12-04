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

function playRound(computer, user) {
  const userChoice = String(user).toLocaleLowerCase();
  if (userChoice === "rock") {
    switch (computer) {
      case "rock":
        console.log("Tie!");
        break;
      case "paper":
        console.log("You lose! Paper beats Rock.");
        break;
      case "scissor":
        console.log("You win! Rock beats Scissor.");
    }
  } 
  else if (userChoice === "paper") {

  } 
  else if (userChoice === "scissor") {

  } 
  else {

  }
}