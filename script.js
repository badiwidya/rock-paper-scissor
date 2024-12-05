function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);
  return choice[number];
}

function getUserChoice(e) {
  return e.target.id;
}

// logic for the game
let userScore = 0;
let computerScore = 0;

const gameArea = document.querySelector("#gamearea");
gameArea.addEventListener("click", playGame);

function playGame(e) {
  if (userScore === 5 || computerScore === 5) {
    window.location.reload();
  }
  let userChoice = getUserChoice(e);
  let computerChoice = getComputerChoice();

  // Select p and span element to display message and score
  const userScoreDisplay = document.querySelector("#score-1>span");
  const computerScoreDisplay = document.querySelector("#score-2>span");
  const msg = document.querySelector("#message");

  let message;
  switch (userChoice) {
    case "paper":
      switch (computerChoice) {
        case "rock":
          userScore++;
          message = "You win! paper beats rock";
          break;
        case "scissors":
          computerScore++;
          message = "You lose! scissors beat paper";
          break;
        case "paper":
          message = "Tie! paper";
          break;
      }
      break;
    case "rock":
      switch (computerChoice) {
        case "rock":
          message = "Tie rock!";
          break;
        case "scissors":
          userScore++;
          message = "You win! rock beats scissors";
          break;
        case "paper":
          computerScore++;
          message = "You lose! paper beats rock";
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          computerScore++;
          message = "You lose! rock beats scissors";
          break;
        case "scissors":
          message = "Tie scissors!";
          break;
        case "paper":
          userScore++;
          message = "You win! scissors beat paper";
          break;
      }
      break;
  }
  msg.textContent = message;
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
  if (computerScore === 5 || userScore === 5) {
    msg.textContent = (userScore > computerScore) ? 
                      "You win the game!" : 
                      "You lose the game!"
    const reset = document.createElement("button");
    reset.style.marginTop = "36px";
    reset.style.padding = "10px 20px"
    reset.textContent = "Reset";
    reset.addEventListener('click', () => window.location.reload());
    document.body.appendChild(reset);
  }
}
