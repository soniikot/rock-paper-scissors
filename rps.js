let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;
let round = 1;

const roundText = document.querySelector('#round');
const playerText = document.querySelector('#playerChoice');
const computerText = document.querySelector('#computerChoice');
const resultText = document.querySelector('#result');
const buttons = document.querySelectorAll('.buttons');
const container = document.querySelector('#container');
const computerScoreText = document.createElement('p');
const playerScoreText = document.createElement('p');
const finalText = document.createElement('p');
const restartBtn = document.createElement('button');

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
   stopGame();
   
  }
    ))
  restartBtn.addEventListener('click', () => {
    round=1;
    playerScore=0;
    computerScore=0;
 playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    playerScoreText.textContent = `Your score: ${playerScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
  
  })


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
  if (playerScore==5){
     finalText.textContent = 'You won the machine 5 times';
  }
  else if (computerScore==5){
        finalText.textContent = 'Computer won! You get lucky next time';
      } 
     
    }

    function stopGame(){
      if (playerScore==5||computerScore==5){
        document.querySelectorAll(".buttons").forEach(e => e.disabled = true)
        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Start over';
        container.appendChild(restartBtn);

      }
    }


function stopGame(){
  if (playerScore==5||computerScore==5){
    document.querySelectorAll(".buttons").forEach(e => e.disabled = true)
    
    restartBtn.textContent = 'Start over';
    container.appendChild(restartBtn);

  }}