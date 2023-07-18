function getPlayerChoice() {
  
  let lowercase = prompt('Choose Rock, Paper or Scissors').toLowerCase();

  let firstLetterCap =  lowercase.charAt(0).toUpperCase() + lowercase.slice(1);

  return firstLetterCap; 
}

function getComputerChoice() {

  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return 'Rock';
    case 2:   
      return 'Paper';
    case 3:
      return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == 'Rock' && computerSelection == 'Scissors' 
    || playerSelection == 'Paper' && computerSelection == 'Rock'
    || playerSelection == 'Scissors' && computerSelection == 'Paper') {   

    return "W";

  } else if (playerSelection == 'Rock' && computerSelection == 'Paper'
    || playerSelection == 'Paper' && computerSelection == 'Scissors'
    || playerSelection == 'Scissors' && computerSelection == 'Rock') {

    return "L";    
   
  } else if (playerSelection == computerSelection) {
    
    return "T";

  } else {
    return "Invalid choice. Please choose Rock, Paper or Scissors";
  }
}  

function game() {

  let playerScore = 0;
  let computerScore = 0; 
  i = 0;

  while (playerScore < 5 && computerScore < 5) {

    let playerSelection = getPlayerChoice();

    let computerSelection = getComputerChoice();
      
    console.log(`Round: ${ ++i }`);
    
    if (playRound(playerSelection, computerSelection) == "W") {

      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      playerScore = playerScore + 1;

    } else if (playRound(playerSelection, computerSelection) == "L") {
      
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      computerScore = computerScore + 1;

    } else if (playRound(playerSelection, computerSelection) == "T") {
 
      console.log(`It's a tie! You both chose ${playerSelection}`);

    } else {
      console.log("Invalid choice. Please choose Rock, Paper or Scissors");
      i = i - 1;
    } 

   console.log(`Your score is: ${playerScore}`);
   console.log(`Computer score is: ${computerScore}`);
  }

  if (playerScore > computerScore) {

    console.log("Congratulations! You won the game!");

  } else {

    console.log("You lost the game!");

  }
}

game();