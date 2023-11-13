let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;
let round = 1;

const roundText = document.createElement('h1');
const playerText = document.querySelector('#playerChoice');
const computerText = document.querySelector('#computerChoice');
const resultText = document.querySelector('#result');
const buttons = document.querySelectorAll('.buttons');
const container = document.querySelector('#container');
const computerScoreText = document.createElement('p');
const playerScoreText = document.createElement('p');
const finalText = document.createElement('p');

container.appendChild(roundText);
container.appendChild(computerScoreText);
container.appendChild(playerScoreText);
container.appendChild(finalText);



  buttons.forEach(button => button.addEventListener('click', () => {

    roundText.textContent = `Round ${round}`;
    playerSelection = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;

    resultText.textContent = playRound();
    
  round++;
  
    
   checkWinner();
   
  }
    

  
  
  ))


function getComputerChoice() {
  let choice = ['rock', 'paper', 'scissors'];
  computerSelection = choice[Math.floor(Math.random() * 3)];
  return computerSelection;
}


function playRound() {
  {


    if (playerSelection == computerSelection) {
      return "Draw";
    }


    else if (computerSelection == "rock" && playerSelection == "paper" ||
      computerSelection == "paper" && playerSelection == "scissors" ||
      computerSelection == "scissors" && playerSelection == "rock") {
      playerScore = playerScore + 1;
      playerScoreText.textContent = `Your score: ${playerScore}`;

      return "You Win!";
    }


    else {
      computerScore = computerScore + 1;
      computerScoreText.textContent = `Computer score: ${computerScore}`;
      return "You Lose";
    }
  }
}


function checkWinner() {
  {
    if (playerScore > computerScore) {
      finalText.textContent = 'You are the best!';
    } else if (playerScore < computerScore) {
      finalText.textContent = 'You win next time';
    } else {
      finalText.textContent = 'You and computer are both good!';
    }
  }

}