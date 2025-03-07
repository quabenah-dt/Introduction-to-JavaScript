let firstCard = 10
let secondCard = 10
let thirdCard = 3
let cards = [firstCard, secondCard, thirdCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let cardNumber = document.getElementById("card-number")
let sumNumber = document.getElementById("sum-number")


// 1. Store the message-el paragraph in a variable called messageEl

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.innerText = message
    cardNumber.innerText = `Cards: ${cards[0]} ${cards[1]}`
    sumNumber.innerText = `Sum: ${sum}`


}



// function newCARD() {
//     // let sum = firstCard + secondCard + thirdCard
//     if ( sum <=20) {
//         sum = sum + thirdCard
//     }

//     renderGame();

//     cardNumber.innerText += ` ${thirdCard}`
// }

function newCARD() {
    // let card = 6
    sum += thirdCard
    renderGame()
    cardNumber.innerText += ` ${cards[2]}`
}
