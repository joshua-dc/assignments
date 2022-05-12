var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

let orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

fruit.push(orangeIndex)
console.log(fruit)

var vegLength = vegetables.length
console.log(vegLength)

vegetables.push(vegLength)
console.log(vegetables)

var food = fruit.concat(vegetables)
console.log(food)

food.splice(4, 2)
console.log(food)

food.reverse()
console.log(food)

let string = food.toString()
console.log(string)
