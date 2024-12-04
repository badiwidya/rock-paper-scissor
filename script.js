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
    switch (computer) {
      case "rock":
        console.log("You win! Paper beats Rock");
        break;
      case "paper":
        console.log("Tie!");
        break;
      case "scissor":
        console.log("You lose! Scissor beats Paper.");
    }
  } 
  else if (userChoice === "scissor") {
    switch (computer) {
      case "rock":
        console.log("You lose! Rock beats Scissor");
        break;
      case "paper":
        console.log("You win! Scissor beats Paper.");
        break;
      case "scissor":
        console.log("Tie!");
    }
  } 
  else {
    console.log("Your choice is only paper, rock, or scissor!");
  }
}