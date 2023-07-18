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

    return `You Win! ${playerSelection} beats ${computerSelection}`;

  } else if (playerSelection == 'Rock' && computerSelection == 'Paper'
    || playerSelection == 'Paper' && computerSelection == 'Scissors'
    || playerSelection == 'Scissors' && computerSelection == 'Rock') {

    return `You Lose! ${computerSelection} beats ${playerSelection}`;    
   
  } else if (playerSelection == computerSelection) {
    
    return `It's a tie! You both chose ${playerSelection}`;

  } else {
    return "Invalid choice. Please choose Rock, Paper or Scissors";
  }
}  

function game() {

  let playerScore = 0;
  let computerScore = 0;

  for (let i=0; i < 5; i++) {
    playerSelection = prompt('Choose Rock, Paper or Scissors').toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());

    computerSelection = getComputerChoice();

    console.log(`Round: ${ i + 1 }`);
    
    if (playRound(playerSelection, computerSelection) == `You Win! ${playerSelection} beats ${computerSelection}`) {

      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      playerScore = playerScore + 1;

    } else if (playRound(playerSelection, computerSelection) == `You Lose! ${computerSelection} beats ${playerSelection}`) {
      
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      computerScore = computerScore + 1;

    } else if (playRound(playerSelection, computerSelection) == `It's a tie! You both chose ${playerSelection}`) {
 
      console.log(`It's a tie! You both chose ${playerSelection}`);

    } else {
      console.log("Invalid choice. Please choose Rock, Paper or Scissors");
      i = i - 1 ;
    } 

   console.log(`Your score is: ${playerScore}`);
   console.log(`Computer score is: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("It's a tie!");
  }
}

game();