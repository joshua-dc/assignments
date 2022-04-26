var header = document.getElementById("header")
    header.innerHTML += "Javascript Made This!!!";
    header.innerHTML += "<span class='fName'>Joshua</span> wrote this Javascript";

var messages = document.getElementsByClassName("message");
messages[0].textContent = "Have you battled all the Gym Leaders Yet?";
messages[1].textcontent = "No, but I fought Giovanni.";
messages[2].textContent = "Did you get his Moltres!?";
messages[3].textContent = "Nope, he had Latias. He was weaker than I anticipated.";

var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clearTxt)
var msgBox = document.getElementsByClassName("messages")

function clearTxt(){
    while(msgBox.length > 0){
        msgBox[0].remove()
    }
}



