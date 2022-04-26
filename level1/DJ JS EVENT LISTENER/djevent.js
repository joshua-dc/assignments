var square= document.getElementById("square")


square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue";
});
square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "red";
});
square.addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow";
});
square.addEventListener("dblclick", function() {
    square.style.backgroundColor = "green";
});
square.addEventListener("wheel", function() {
    square.style.backgroundColor = "orange";
});

window.addEventListener("keydown", keyPress);
window.addEventListener("wheel", function2);

function keyPress(e){
    if (e.keyCode === 66){
        square.style.background = "blue";

    }   else if (e.keyCode === 82) {
        square.style.background = "red";

    }   else if (e.keyCode === 89) {
        square.style.background = "yellow";

    }   else if (e.keyCode === 71) {
        square.style.background = "green";

    }   else if (e.keyCode === 79) {
        square.style.background = "orange";
    }
}
function function2(){
    square.style.backgroundColor = "orange"
}