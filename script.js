// Computer choice function

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  return choice[Math.floor(Math.random() * 3 + 1)]
}

