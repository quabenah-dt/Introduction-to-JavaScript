let scoreScreen = document.getElementById("score-screen")

let homePlusOne = document.getElementById("home-plus-one")
let homePlusTwo = document.getElementById("home-plus-two")
let homePlusThree = document.getElementById("home-plus-two")


let score = 0

function PlusOne() {
    score += 1
    // console.log(score)
    scoreScreen.innerText = score
}

function PlusTwo() {
    score += 2
    // console.log(score)
    scoreScreen.innerText = score
}

function PlusThree() {
    score += 3
    // console.log(score)
    scoreScreen.innerText = score
}
