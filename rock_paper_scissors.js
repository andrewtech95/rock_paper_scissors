let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0; 

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playRound));
const restartBtn = document.querySelector('#restart-btn');
restartBtn.addEventListener('click', resetGame);
restartBtn.classList.add('disappear');

const main = document.querySelector('main');
const scoreInfo = document.querySelector('.score-info');
const scoreMessage = document.querySelector('.score-message');
const playerScorePara = document.querySelector('.playerScore');
const computerScorePara = document.querySelector('.computerScore');
const endgameMsg = document.querySelector('.endgame-message');

function getComputerPlay() {
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
    
function playRound(e) {
  playerSelection = e.target.alt;
  computerSelection = getComputerPlay();
  
  if (playerSelection === 'Rock' && computerSelection === 'Scissors' 
  || playerSelection === 'Paper' && computerSelection === 'Rock'
  || playerSelection === 'Scissors' && computerSelection === 'Paper') {   
    
    keepScore("W");
    
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper'
  || playerSelection === 'Paper' && computerSelection === 'Scissors'
  || playerSelection === 'Scissors' && computerSelection === 'Rock') {
    
    keepScore("L");    
    
  } else keepScore("T");
  
  if (playerScore === 5 || computerScore === 5) {
    declareWinner(playerScore, computerScore);
    restartBtn.classList.remove('disappear');
    buttons.forEach(button => button.removeEventListener('click', playRound));
  }
}  

function keepScore(roundResult) {
  if (roundResult === "W") {
    scoreInfo.textContent = "You win!";
    scoreMessage.textContent = `${playerSelection} beats ${computerSelection}`;
    playerScore++;

  } else if (roundResult === "L") {
    scoreInfo.textContent = "You lose!";
    scoreMessage.textContent = `${computerSelection} beats ${playerSelection}`;
    computerScore++;

  } else {
    scoreInfo.textContent = "It's a tie!";
    scoreMessage.textContent = `You both chose ${playerSelection}`; 
  }

  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}
  
function declareWinner(playerScore, computerScore) {
  if (playerScore > computerScore) endgameMsg.textContent = "Congratulations! You won the game!";  
  else endgameMsg.textContent = "You lost the game!";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  scoreInfo.textContent = "Choose your weapon";
  scoreMessage.textContent = "First to score 5 points wins the game";
  endgameMsg.textContent = "";
  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;

  restartBtn.classList.add('disappear');
  buttons.forEach(button => button.addEventListener('click', playRound));
}
