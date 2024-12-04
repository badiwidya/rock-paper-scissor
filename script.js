// Computer choice function

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const number = Math.floor(Math.random() * 3)
  return choice[number];
  
}

// Get user choice function

function getUserChoice() {
  return prompt("Rock Paper Scissor: ");
}

let userScore = 0;
let computerScore = 0;

function playRound(computer, user) {
  const userChoice = String(user).toLocaleLowerCase();
  if (userChoice === "rock") {
    switch (computer) {
      case "rock":
        console.log("Tie!");
        break;
      case "paper":
        console.log("You lose! Paper beats Rock.");
        computerScore += 1;
        break;
      case "scissor":
        console.log("You win! Rock beats Scissor.");
        userScore += 1;
    }
  } else if (userChoice === "paper") {
    switch (computer) {
      case "rock":
        console.log("You win! Paper beats Rock");
        userScore += 1;
        break;
      case "paper":
        console.log("Tie!");
        break;
      case "scissor":
        console.log("You lose! Scissor beats Paper.");
        computerScore += 1;
    }
  } else if (userChoice === "scissor") {
    switch (computer) {
      case "rock":
        console.log("You lose! Rock beats Scissor");
        computerScore += 1;
        break;
      case "paper":
        console.log("You win! Scissor beats Paper.");
        userScore += 1;
        break;
      case "scissor":
        console.log("Tie!");
    }
  } else {
    console.log("Your choice is only paper, rock, or scissor!");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
    playRound(computerChoice, userChoice);
  }
  if (computerScore > userScore) {
    console.log(`Computer is the winner! Score: ${computerScore}`);
    console.log(`You lose! Score: ${userScore}`);
  } else if (userScore > computerScore) {
    console.log(`You are the winner! Score: ${computerScore}`);
    console.log(`Computer lose! Score: ${userScore}`);
  } else {
    console.log(`Tie! Score ${userScore}`);
  }
}

playGame();
