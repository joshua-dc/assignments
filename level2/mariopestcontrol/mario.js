const pestCountForm = document["pestCount"]

pestCountForm.addEventListener("submit", function(e){
    e.preventDefault();
    const goombas = pestCountForm.goomba.value;
    const bobombs = pestCountForm.bobomb.value;
    const cheepcheeps = pestCountForm.cheepcheep.value;
    let baddieCount = parseInt(goombas) + parseInt(bobombs) + parseInt(cheepcheeps);
    let totalCost = (parseInt(goombas) * 5) + (parseInt(bobombs) * 7) + (parseInt(cheepcheeps) * 11);
    calculateTotals(baddieCount, totalCost)
    return baddieCount, totalCost;
})

function calculateTotals(baddieCount, totalCost) {
    document.getElementById("totalCount").append(baddieCount) 
    document.getElementById("totalCost").append(totalCost)
}   