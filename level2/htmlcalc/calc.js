let butt1 = document.getElementById("addButt");
let butt2 = document.getElementById("subButt");
let butt3 = document.getElementById("multiButt");

butt1.addEventListener("click", addMath);
butt2.addEventListener("click", subMath);
butt3.addEventListener("click", multiMath);

function addMath(){
let addInput1 = document.getElementById("add1").value;
let addInput2 = document.getElementById("add2").value;
let resultAdd = ((addInput1*1) + (addInput2*1))
    const h2 = document.createElement("h2")
    h2.textContent = resultAdd
    document.getElementsByName("addForm")[0].append(h2)
}
function subMath(){
    let subInput1 = document.getElementById("sub1").value;
    let subInput2 = document.getElementById("sub2").value;
    let resultSub = ((subInput1*1) - (subInput2*1))
        const h3 = document.createElement("h3")
        h3.textContent = resultSub
        document.getElementsByName("subForm")[0].append(h3)
}
function multiMath(){
    let multiInput1 = document.getElementById("multi1").value;
    let multiInput2 = document.getElementById("multi2").value;
    let resultMult = ((multiInput1*1) * (multiInput2*1))
        const h4 = document.createElement("h4")
        h4.textContent = resultMult
        document.getElementsByName("multiForm")[0].append(h4)
}