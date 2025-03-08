
let cards = []
let sum = 0

let inGame = true
let blackJack = false

let message = ""

let messageEl = document.getElementById("message-el")
let cardNumber = document.getElementById("card-number")

function randomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    console.log(randomNumber)
    return randomNumber
}

function startGame() {

    let firstCard = randomCard()
    let secondCard = randomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    console.log(sum)

    renderGame()
}

function renderGame() {

    cardNumber.textContent = "cards : "

    for (let i = 0; i < cards.length; i++) {
        cardNumber.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message =  "You're out of the game! 😭"
        inGame = false
    }

    messageEl.innerText = message
}

function newCard() {

    let thirdCard = randomCard()
    cards.push(thirdCard)

    sum = sum + thirdCard

    // console.log(sum)

    renderGame()
}
