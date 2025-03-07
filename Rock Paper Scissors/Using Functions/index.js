//STEPS
// 1. When we click the button
// - computer randomly selects a move
// - compare computers move and players move to get the result
//  display the result in a pop-up

//=================================================================

// Logic behind Rck Ppaper Scissors
// - if between 0 and 1/2 => rock
// - if between 1/3 and 2/3 => paper
// - if between 2/3 and 1 => scissors



const randomNumber = Math.random();
let computerMove = "";

function playGame() {
    if (randomNumber >= 0 &&  randomNumber <  1/2) {
        console.log("Paper");
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        console.log("Rock");
    } else if  (randomNumber >= 2/3 && randomNumber < 1 ) {
        console.log("Scissors");
    }
}
