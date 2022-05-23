// function leastToGreatest(arr) {
//     return arr.sort((a, b) => a - b)
// }

//   console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]


// function greatestToLeast(arr) {
//     return arr.sort((a, b) => b - a)
// }

//   console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]


// function lengthSort(arr) {
//     return arr.sort((a, b) => a.length - b.length)
// }

//   console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

// function alphabetical(arr){
//     return arr.sort((a, b) => {
//         if(a < b ){
//             return -1
//         }else if (a > b ){
//             return 1
//         }else {
//             return 0
//         }
//     })
// }
// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

// ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR


// function alphabetical(arr) {
//     return arr.sort((a, b) => a < b ? -1 : 1)
// }

// console.log(alphabetical(["friend", "dog", "wolf", "by", "family", "eaten"]));








function byAge(arr){
    return arr.sort((a, b) => a.age < b.age ? -1 : 1)
}

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
//   // => [ { name: 'Misunderstood Observer', age: 2 },
//   //  { name: 'Quiet Samurai', age: 22 },
//   //  { name: 'Unlucky Swami', age: 77 },
//   //  { name: 'Arrogant Ambassador', age: 100 } ]