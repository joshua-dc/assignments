// for(var i = 0; i <=9; i++){
//     console.log(i)
// }
// for(var i = 9; i >= 0; i--){
//     console.log(i)
// }
// const fruit = ["banana", "orange", "apple", "kiwi"]
//     for(var i = 0; i < fruit.length; i ++){
//         console.log(fruit[i])
//     }
// var numbArr = [];
//     for(var i = 0; i <= 9; i ++){
//     numbArr.push(i);
//     }
//     console.log(numbArr)
// var numArr = [];
//     for(var i = 0; i <= 100; i += 2){
//         numArr.push(i)
//     }
// console.log(numArr)

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var everyOtherFruit= []


// for(var i= 0; i <= fruit.length; i += 2){
//     everyOtherFruit.push(fruit[i])
// }
// console.log(everyOtherFruit)

const peopleArray = [
    {
    name: "Harrison Ford",
    occupation: "Actor"
    },
    {
    name: "Justin Bieber",
    occupation: "Singer"
    },
    {
    name: "Vladimir Putin",
    occupation: "Politician"
    },
    {
    name: "Oprah",
    occupation: "Entertainer"
    }
]

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

// for(var i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
// }
// var nameArr = [];
// for(var i = 0; i < peopleArray.length; i ++){
//     nameArr.push(peopleArray[i].name)
// }
// console.log(nameArr);

// var occArr = [];
// for(var i = 0; i < peopleArray.length; i ++){
//     occArr.push(peopleArray[i].occupation)
// }
// console.log(occArr);

var eoName = [];
var eoOcc = [];
function silver(arr){
    for(var i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            eoName.push(arr[i].name)
        }   else{
            eoOcc.push(arr[i].occupation)
        }

    }

}



silver(peopleArray)
console.log(eoName)
console.log(eoOcc)