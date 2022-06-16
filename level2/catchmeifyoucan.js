const num1 = 8
const num2 = "what is this?"
function sum(x, y){
    try{
        if(x !== Number(num1) || y !== Number(num2)){
            throw "Error, incorrect value detected"
        }
        console.log("WoW")
    }
    catch(err){
        console.log(err)
    }
    return x + y;
}
sum(num1, num2)



var user = {username: "sam", password: "123abc"};
function login(username, password){
    try{
        if(username !== "sam" || password !== "123abc"){
            throw "invalid login"
        }
        console.log("Welcome" + user.username)
    }
    catch(err){
        console.log(err)
    }
}
login(user.username, user.password)



var user = {username: "sam", password: "supercalifragilisticexpialidocious"};
function login(username, password){
    try{
        if(username !== "sam" || password !== "123abc"){
            throw "this device will self detonate in 5 seconds"
        }
        console.log("Welcome Sam")
    }
    catch(err){
        console.log(err)
    }
}
login(user.username, user.password)