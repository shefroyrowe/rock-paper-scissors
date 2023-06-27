/*
    Your game is going to play against the computer, 
    so begin with a function called getComputerChoice 
    that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
    We’ll use this function in the game to make the computer’s play. 
    Tip: use the console to make sure this is returning the expected 
    output before moving to the next step!
*/

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if(random === 0){
        return 'rock';
    } else if(random === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

/*
    Write a function that plays a single round of Rock Paper Scissors. 
    The function should take two parameters - the playerSelection and the
    computerSelection - 
    
    then return a string that declares the winner 
    of the round like so: "You Lose! Paper beats Rock"

    Make your function’s playerSelection parameter case-insensitive 
    (so users can input rock, ROCK, RocK or any other variation).
*/
const playerSelection = prompt('Rock Paper Scissors?');
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    let playerOp = playerSelection.toLowerCase();
    let compOp = computerSelection;

    if(compOp === playerOp){
        alert('Aye! We have a draw y\'all!');
    } else if(compOp == 'rock' && playerOp == 'scissors' || 
                compOp == 'paper' && playerOp == 'rock'    || 
                compOp == 'paper' && playerOp == 'rock'    ||
                compOp == 'scissors' && playerOp == 'paper'){
        alert(`You lost, ${compOp} beats ${playerOp}`);
    } else if(playerOp == 'rock' && compOp == 'scissors' || 
    playerOp == 'paper' && compOp == 'rock'    || 
    playerOp == 'paper' && compOp == 'rock'    ||
    playerOp == 'scissors' && compOp == 'paper'){
        alert(`You've won!, ${playerOp} beats ${compOp}`);
    } else {
        alert(`${playerOp} invalid input, try again`);
    }
}

//tester console log
console.log(playRound(playerSelection, computerSelection));

