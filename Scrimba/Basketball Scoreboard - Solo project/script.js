let homeScoreScreen = document.getElementById("home-score-screen")

let awayScoreScreen = document.getElementById("away-score-screen")

// let homePlusOne = document.getElementById("home-plus-one")
// let homePlusTwo = document.getElementById("home-plus-two")
// let homePlusThree = document.getElementById("home-plus-two")



let score = 0
let score2 = 0

function homePlusOne() {
    score += 1
    // console.log(score)
    homeScoreScreen.innerText = score
}

function homePlusTwo() {
    score += 2
    // console.log(score)
    homeScoreScreen.innerText = score
}

function homePlusThree() {
    score += 3
    // console.log(score)
    homeScoreScreen.innerText = score
}



function awayPlusOne() {
    score2 += 1
    // console.log(score)
    awayScoreScreen.innerText = score2
}

function awayPlusTwo() {
    score2 += 2
    // console.log(score)
    awayScoreScreen.innerText = score2
}

function awayPlusThree() {
    score2 += 3
    // console.log(score)
    awayScoreScreen.innerText = score2
}

function resetScore() {
    score = 0
    score2 = 0
    homeScoreScreen.innerText = score
    awayScoreScreen.innerText = score2
}
