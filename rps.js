const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

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
else if(computerSelection == "rock"){
    return (playerSelection =="paper") ? "You Win!" : "You Lose"
}
    else if (computerSelection == "paper"){
        return (playerSelection =="scissors") ? "You Win!" : "You Lose"
       }
       else if (computerSelection == "scissors"){
        return (playerSelection =="rock") ? "You Win!" : "You Lose"
       }
}
 
console.log(playRound(playerSelection, computerSelection)); 

