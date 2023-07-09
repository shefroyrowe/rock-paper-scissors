//button control logic
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
     button.onclick = game;
 });

 //game body
function game(){ 
    //get user choice
    let playerOp = this.id;
    console.log(`player: "${playerOp}"`); //log response

    //get computer choice
    let computerOp  = Math.floor(Math.random() * 3);
        if (computerOp === 0) {
            computerOp = 'rock';
        } else if (computerOp === 1) {
            computerOp = 'paper';
        } else {
            computerOp = 'scissors';
        };
        console.log(`computer: "${computerOp}"`);//log computer choice

        console.log(playRound(playerOp, computerOp));//show winner

function playRound(playerOp, computerOp){
        //if both players pick the same value
        if (computerOp === playerOp) {
            alert('It\'s a draw!');
            //computer win logic
        } else if (computerOp == 'rock' && playerOp == 'scissors' ||
            computerOp == 'paper' && playerOp == 'rock' ||
            computerOp == 'scissors' && playerOp == 'paper') {
            alert(`You lost, ${computerOp} beats ${playerOp}`);
            //compScore++;
            //player win logic
        } else if (playerOp == 'rock' && computerOp == 'scissors' ||
            playerOp == 'paper' && computerOp == 'rock' ||
            playerOp == 'scissors' && computerOp == 'paper') {
            alert(`You've won!, ${playerOp} beats ${computerOp}`);
            //playerScore++;
        }
    }
 }

 
/*
 let rounds = 0;
    let compScore = 0;
    let playerScore = 0;
    while (rounds < 5) {}

 if(compScore > playerScore){
    alert(`You scored ${playerScore}, computer wins`);
 }else {
    alert(`Computer scored ${compScore}, player wins!`);
 }
*/