const name = "john"
const age = 10

console.log(`My name is ${name} and I am ${age} years old`)


const person = { firstName: "john", lastName: "smith", age: 10}

let foods = ["pizza", "steak", "taco"]
function addFood(food){
    foods.unshift(food)
    foods.pop()
        return foods
    
}
console.log(addFood("chicken"))