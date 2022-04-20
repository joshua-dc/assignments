//Data Types - Create variable for each data type below using the example provided for a string 


//String - denoted/represented by " " ' ' - they are great for words,language
let firstName = "Joshua"
console.log(firstName)

////////


//Number - anything of numerical value - just a number
let age = 31
console.log(age)

////////

//Boolean - true or false 
let isAlive = true
console.log(isAlive)

/////////



//Array - are denoted/represented by [] - are great for holding multple pieces of data
//use bracket notation [] here with the array you created use 
const hobbies = ["drawing", "pokemon", "gaming", "motorcycles"]
console.log(hobbies.length)
/////////

/////////


//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//////////
const motorcycles = {
    color: "black",
    brand: "suzuki",
    size: "750cc"
}
console.log(motorcycles.size)


//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement

//Using below example below to create your own conditional statement.
let color = "blurple"

if (color === "red") {
    console.log("I am blue!")
} else if (color === 'blue') {
    console.log("I am red!")
} else {
    console.log(" i am something else!")
}



let pokemon = 'zapdos'

if (pokemon === 'pikachu') {
    console.log("Electric but not quite the same")
} else if (pokemon === 'Charizard') {
    console.log("ummm lets put that one back in the pokeball")
} else {
    console.log("Seems that I have misplaced my zapdos")
}

// /////////



//For Loops - At their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i

//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 

//i = i + 1 same i++


//Create 1 for loop

for (var i = 0; i < 10; i++) {
    console.log(i)
}

const favMovies = ["matrix", "fast and furious", "anger management", "liar liar"]
for (var i = 0; i < favMovies.length; i++) {
    console.log(favMovies[i])
}





function greeting() {
    alert("'I see now that the circumstances of one's birth are irrelevant; it is what you do with the gift of life that determines who you are.' -Mewtwo")
}


var button = document.getElementById("button-one")
button.addEventListener("click", greeting)


//////////////////
//level 0 curriculm last 5 videos cover this material "DOM"

//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method




