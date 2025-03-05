let scoreScreen = document.getElementById("score-screen")

// let homePlusOne = document.getElementById("home-plus-one")
// let homePlusTwo = document.getElementById("home-plus-two")
// let homePlusThree = document.getElementById("home-plus-two")



let score = 0

function homePlusOne() {
    score += 1
    // console.log(score)
    scoreScreen.innerText = score
}

function homePlusTwo() {
    score += 2
    // console.log(score)
    scoreScreen.innerText = score
}

function homePlusThree() {
    score += 3
    // console.log(score)
    scoreScreen.innerText = score
}

function resetScore() {
    score = 0
    scoreScreen.innerText = score
}
