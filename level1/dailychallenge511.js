// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
// Examples
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1



function countDigit(n){
    let count = 0;
    while (n != 0){
        n = Math.floor(n / 10);
        ++count;
    }
    return count;
}

let n = (130598103156387);
console.log("Number of Digits: " + countDigit(n))