const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    const buttons = document.querySelectorAll('.game-btn');
    buttons.forEach(btn => btn.addEventListener('click', (e) => {
        return btn.id;
    }));
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('it\'s a draw');
    } else if (humanChoice === 'rock'
        && computerChoice === 'scissors'
        || humanChoice === 'paper'
        && computerChoice === 'rock'
        || humanChoice === 'scissors'
        && computerChoice === 'paper') {
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
    } else {
        console.log(`Computer wins ${computerChoice} beats ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

