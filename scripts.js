//counters
let draws = 0;
let computerScore = 0;
let playerScore = 0;

//reference html display area for results
let display = document.querySelector('.display');
//reference html tooltip text area for responses
let tooltip = document.querySelector('.tooltip');
//reference html win-lose announcement element
let announcement = document.querySelector('.win-lose');

//introduction 

let intro = "GET READY! 5 ROUNDS! -ROCK- -PAPER- -SCISSORS- LETS GO!!!";
alert(intro);


 //user button controls
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
    button.onclick = game;
    });

//game logic container
function game(){ 
        //get user response
    let playerOp = this.id;
     
    //get computer response
    let computerOp = Math.floor(Math.random() * 3);
    if (computerOp === 0) {
        computerOp = 'rock';
    } else if (computerOp === 1) {
        computerOp = 'paper';
    } else {
        computerOp = 'scissors';
    }
    
    //display player and computer response
    tooltip.textContent = `PLAYER: "${playerOp}"\n\nCOMPUTER: "${computerOp}"`;
    //reset announcement css visibility value to hidden
    announcement.style.cssText = 'display: none';
   
        //gameplay logic
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

        //Winner anouncement and stats
        if((draws + computerScore + playerScore) == 5 && playerScore > computerScore){
            display.textContent = `Wins ${playerScore}, draws ${draws}, losses ${computerScore}`;
            //set announcement text content and css visibily value for win
            announcement.textContent = 'WINNER!!';
            announcement.style.cssText = 'display: unset';

            playerScore = 0;
            computerScore = 0;
            draws = 0;
            return; //break and restart if...else

        }else if((draws + computerScore + playerScore) == 5 && playerScore < computerScore){
            display.textContent = `You Won ${playerScore}, had ${draws} draws, and ${computerScore} losses`;
            //set announcement text content and css value visibily for loss
            announcement.textContent = 'YOU LOSE';
            announcement.style.cssText = 'display: unset';

            playerScore = 0;
            computerScore = 0;
            draws = 0;
            return; //break and restart if...else
        }
    }
   


   
