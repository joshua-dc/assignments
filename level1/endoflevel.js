// function getNumberOfVowels(str) { 
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for( let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count
// }
//  console.log(getNumberOfVowels("hello world")) // 3
//  console.log(getNumberOfVowels("fishing")) // 2


/*

if(str[i]==='a' || str[i]] === 'e' )
    count++

*/

let names = [ "Jerry", "Adam" ]
const person = { 
   firstName: "Robert",
   lastName: "Jones", 
   age: 37 
}
names.push(person.firstName)
console.log(names)