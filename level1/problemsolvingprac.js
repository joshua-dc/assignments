function largestNumber(num1, num2, ...num){

    return Math.max(num1, num2, ...num)
}
    console.log(largestNumber(3, 5, 2, 8, 1))


let myArr = ["#3", "$$$", "C%4!", "Hey!"]
function letterWithStrings(array, char){
    let newArr = [];
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            if(array[i][j] === char){
                newArr.push(array[i]);
                break;
            }
        }
    }
        
    return newArr;
}
letterWithStrings(myArr, "!");
console.log(letterWithStrings(myArr, "!"));


function isDivisible(num1, num2){
    if(num1 % num2 === 0){
        console.log("true")
    }else {
        console.log("false")
    }
}

console.log(isDivisible(4, 2))
console.log(isDivisible(9, 3))
console.log(isDivisible(15, 4))
