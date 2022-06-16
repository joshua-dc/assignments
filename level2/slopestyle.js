// use the REST operator to help this function return an array of animals, no matter how many 
// animals are passed to it:


function collectAnimals(...animals) {
    return [animals]
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// Write a function that returns a food object with the array names as properties.
//  You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both 
//  the name and value of properties in your object:

const combineFruit = (fruit, sweets, vegetables) => {
    return `fruit: ${fruit}  sweets: ${sweets} vegetables: ${vegetables}`
}

console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]));
// => {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }
        

// Use destructuring to use the property names as variables. Destructure the object in the parameter:
const parseSentence=(location, duration) =>{
    return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence("Burly Idaho", "2 Weeks"));
// parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
// });

// Use array destructuring to make this code ES6:

// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem 
// }

const returnFirst = (items) => {
    return items[0]
}

// Write destructuring code to assign variables that will help us return the expected string. 
// Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites({firstFav, secondFav, thirdFav}){
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites({firstFav: "snowboarding", secondFav: "eating", thirdFav: "philanthropy"}));


// Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
// You will need to change how the arrays are passed in.
// You may write it assuming you will always recieve three arrays if you would like to.

const combineAnimals=() => {
    return [...realAnimals,...magicalAnimals, ...mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// const product= (a, b, c, d, e) => {
//     var numbers = [a,b,c,d,e];

//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
// }

const numbers = [68, 71, 419, 421, 1776];
const product = (narr) => {return narr.reduce((total, num) => {return total * num}, 1)};
console.log(product(numbers));

const populatePeople = (names) => {return names.map((name) => {name = name.split(" ");
        return `firstName: ${name[0]}, lastName: ${name[1]}`})}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));