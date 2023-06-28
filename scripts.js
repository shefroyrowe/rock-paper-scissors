//cocmputer response function

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//play game function

function game() {
    //while function to loop five rounds of play
    let rounds = 0;
    while (rounds < 5) {
        //getting player response
        let playerOp = prompt('Rock Paper or Scissors?')
        playerOp = playerOp.toLowerCase();
        //getting computers respons
        let compOp = getComputerChoice();
        //if both players pick the same value
        if (compOp === playerOp) {
            alert('It\'s a draw!');
            //computer win logic
        } else if (compOp == 'rock' && playerOp == 'scissors' ||
            compOp == 'paper' && playerOp == 'rock' ||
            compOp == 'scissors' && playerOp == 'paper') {
            alert(`You lost, ${compOp} beats ${playerOp}`);
            //player win logic
        } else if (playerOp == 'rock' && compOp == 'scissors' ||
            playerOp == 'paper' && compOp == 'rock' ||
            playerOp == 'scissors' && compOp == 'paper') {
            alert(`You've won!, ${playerOp} beats ${compOp}`);
        } else {
            alert(`${playerOp} invalid input, reload to try again`);
        }
        //increment roundsplayed til 5
        i++;
    }
}

game(); //function call
