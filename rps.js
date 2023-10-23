const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
const array = ['rock', 'paper','scissors'];
const computerSelection = array[Math.floor(Math.random() * array.length)];
return computerSelection;
}
console.log(computerSelection);

function getPlayerChoice(){
const playerSelection = prompt("Rock, Paper, Scissors?");
  return playerSelection;
}
console.log(playerSelection);

function playRound() {
 if (playerSelection == computerSelection) {
        return "Draw";
 }
else if(computerSelection == "rock" && playerSelection =="paper" ||
computerSelection == "paper" && playerSelection =="scissors" ||
computerSelection == "scissors" && playerSelection =="rock"){
    playerScore = playerScore+1;
    return  "You Win!";
}
    else {
        computerScore=computerScore+1;
        return "You Lose";
       }
       }

  



function game(){
    playRound(playerSelection,computerSelection);
    console.log(playRound(playerSelection,computerSelection))
console.log(playerScore);
    console.log(computerScore);
}
/*let i=0;

for(i=0; i<5; i++) {
        game()
    }

   
