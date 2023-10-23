let playerSelection = getPlayerChoice();
let computerSelection =getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
let choice = ['rock', 'paper','scissors'];
choice = choice[Math.floor(Math.random() * 3)];
return choice;
}


function getPlayerChoice(){
const playerChoice = prompt("Rock, Paper, Scissors?");
  return playerChoice;
}


function playRound() {
 if (playerSelection == computerSelection) {
        return "Draw";
 }
else if(computerSelection == "rock" && playerSelection =="paper" ||
computerSelection == "paper" && playerSelection =="scissors" ||
computerSelection == "scissors" && playerSelection =="rock"){
   playerScore ++;
    return  "You Win!";
}
    else {
        computerScore=computerScore+1;
        return "You Lose";
       }
       }

    function game(){
     for (let round = 1; round <= 5; round++) {
       let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = getComputerChoice();

        let roundResult = playRound(computerSelection, playerSelection);
        console.log('You chooses: ' + playerSelection);
        console.log('Computer chooses: ' + computerSelection);
        console.log('Round ' + round + ': ' + roundResult);
    }

    if (playerScore > computerScore) {
        console.log('You win! Your Score: ' + playerScore + ' Computer Score: ' + computerScore);
    } else if (playerScore < computerScore) {
        console.log('You lose! Your Score: ' + playerScore + ' Computer Score: ' + computerScore);
    } else {
        console.log('Draw! Your Score: ' + playerScore + ' Computer Score: ' + computerScore);
    }

}

game()


