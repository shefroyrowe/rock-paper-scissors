const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const displayRound = document.getElementById('game-round');

const messageDisplay = document.getElementById('msg-display');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

let rounds = 0;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
 
  // Determine the winner and update the resultDisplay with the outcome
  if (humanChoice === computerChoice) {
      messageDisplay.textContent = 'It\'s a draw!';
  } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
      messageDisplay.textContent = 'You win!\n' + humanChoice + ' beats ' + computerChoice;
  } else {
      messageDisplay.textContent = 'Computer wins!\n' + computerChoice + ' beats ' + humanChoice;
  }
}

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
