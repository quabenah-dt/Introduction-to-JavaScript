// document.getElementById("count").innerText = 5



// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")

let count  = 0;

function increament() {
    count += 1
    countEl.innerHTML = count
}

// create a function, save(), which logs out the count when its called

function save( ) {
    let entry = count + " - "
    console.log(entry)
    saveEl.innerHTML +=  entry
}
