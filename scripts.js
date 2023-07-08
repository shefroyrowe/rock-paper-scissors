 function game(){
 function playRound(playerSelection, getComputerChoice){

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

    let rounds = 0;
    let compScore = 0;
    let playerScore = 0;
    while (rounds < 5) {
        
       // playerSelection = prompt('Rock Paper or Scissors?')
        playerOp = playerSelection.toLowerCase();

        let compOp = getComputerChoice();

        //if both players pick the same value
        if (compOp === playerOp) {
            alert('It\'s a draw!');
            //computer win logic
        } else if (compOp == 'rock' && playerOp == 'scissors' ||
            compOp == 'paper' && playerOp == 'rock' ||
            compOp == 'scissors' && playerOp == 'paper') {
            alert(`You lost, ${compOp} beats ${playerOp}`);
            compScore++;
            //player win logic
        } else if (playerOp == 'rock' && compOp == 'scissors' ||
            playerOp == 'paper' && compOp == 'rock' ||
            playerOp == 'scissors' && compOp == 'paper') {
            alert(`You've won!, ${playerOp} beats ${compOp}`);
            playerScore++;
        } else {
            alert(`"${playerOp}" is invalid, reload to try again`);
        }
        //increment roundsplayed til 5
        rounds++;
     }
     if(compScore > playerScore){
        alert(`You scored ${playerScore}, computer wins`);
     }else {
        alert(`Computer scored ${compScore}, player wins!`);
     }
  }

playRound();
 }

game();

