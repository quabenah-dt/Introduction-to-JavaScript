// functions 

// function function1 () {
//     console.log('hello')
//     console.log(2 + 2)
// }

// function1();

// parameters   

function calculateTax(cost, taxPercent = 0.1 ) {
    console.log(cost * taxPercent); 
}

calculateTax(2000, 0.2);
calculateTax(5000);