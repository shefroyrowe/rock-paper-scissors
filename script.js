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
        rounds++;
        displayRound.textContent = `${rounds} 0f 5`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        messageDisplay.textContent = 'You win!\n' + humanChoice + ' beats ' + computerChoice;
        humanScore++;
        rounds++;
        displayRound.textContent = `${rounds} 0f 5`;
    } else {
        messageDisplay.textContent = 'Computer wins!\n' + computerChoice + ' beats ' + humanChoice;
        computerScore++;
        rounds++;
        displayRound.textContent = `${rounds} 0f 5`;
    }

    // Update the score display
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if (rounds === 5) {
        if (humanScore === computerScore) return messageDisplay.textContent = 'Game is a tie! [Press any key to continue]';
        messageDisplay.textContent = `${humanScore > computerScore
            ? 'Player wins all! [Press any key to continue]'
            : 'Computer takes the game! [Press any key to continue]'}`;

        // reset
        rounds = 0;
        humanScore = 0
        computerScore = 0;
    }
}

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
