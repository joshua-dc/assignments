let greeting = "HelLo"
let uppercasedGreeting = greeting.toUpperCase()
let lowercasedGreeting = greeting.toLowerCase()
let newGreeting = uppercasedGreeting + lowercasedGreeting
console.log(newGreeting)

findMiddleIndex("Hello")
function findMiddleIndex(platypus){
    let result = Math.floor(platypus.length / 2)
console.log(result)
}


returnFirstHalf("Hello") // => "He"