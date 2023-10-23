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
let playerChoice = prompt("Rock, Paper, Scissors?");
  playerChoice=playerChoice.toLowerCase();
  return playerChoice;
}


function playRound(computerSelection, playerSelection) {
  
  
 if (playerSelection == computerSelection) {
        return "Draw";
 }
  
 
else if(computerSelection == "rock" && playerSelection =="paper" ||
computerSelection == "paper" && playerSelection =="scissors" ||
computerSelection == "scissors" && playerSelection =="rock"){
   playerScore ++;
    return  "You Win!";
}
  
   else if (playerSelection!=("rock" || "paper" || "scissors")){
    return "Check you selection";
  }
    else {
        computerScore++;
        return "You Lose";
       }
       }

    function game(){
     for (let round = 1; round <= 5; round++) {
       let playerSelection = getPlayerChoice();
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

