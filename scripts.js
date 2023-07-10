//counters
let draws = 0;
let computerScore = 0;
let playerScore = 0;
//reference html display area for results
let display = document.querySelector('.display');
let intro = "Get ready! five rounds! -ROCK- -PAPER- -SCISSORS- Lets go!!!"
alert(intro)

 //user button controls
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
    button.onclick = game;
    });

//game logic container
function game(){ 
   
    let playerOp = this.id;//get user response
    alert(`player: "${playerOp}"`); //alert user response
    
    let computerOp = Math.floor(Math.random() * 3);//get computer response
    if (computerOp === 0) {
        computerOp = 'rock';
    } else if (computerOp === 1) {
        computerOp = 'paper';
    } else {
        computerOp = 'scissors';
    }
    alert(`computer: "${computerOp}"`);//alert computer response
   
        //game logic
        if (computerOp === playerOp) { //if both players pick the same value
            draws++;
            display.textContent = 'It\'s a draw!';

        } else if (computerOp == 'rock' && playerOp == 'scissors' || //computer win logic
            computerOp == 'paper' && playerOp == 'rock' ||
            computerOp == 'scissors' && playerOp == 'paper') {
            computerScore++;
            display.textContent = `${computerOp} beats ${playerOp}, computer: ${computerScore} points`;//update display

        } else if (playerOp == 'rock' && computerOp == 'scissors' || //player win logic
            playerOp == 'paper' && computerOp == 'rock' ||
            playerOp == 'scissors' && computerOp == 'paper') {
            playerScore++;
            display.textContent = `${playerOp} beats ${computerOp}, player: ${playerScore} points`;//update display
        }
        if((draws + computerScore + playerScore) == 5){
            display.textContent = `You've won ${playerScore} times, drawn ${draws} times and lost ${computerScore} times.`

            playerScore = 0;
            computerScore = 0;
            draws = 0;
        }
    }

    /*
      add rock, paper and scissor images respectively
      switch info from alerts over to tooltip div

      add computer wins or players wins to tooltip dive after five rounds
    */
    


   
