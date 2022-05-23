let clickCnt = 0;
let timerCnt = 30;
let timer_started = false;

let clickStorage = localStorage.getItem("clickCnt");
let dltStorage = localStorage.removeItem("clickCnt")

if(clickStorage != null){
    clickCnt = parseInt(clickStorage);
}

document.getElementById("clickCnt").innerText = clickCnt;
document.getElementById("timerCnt").innerText = timerCnt;

document.getElementById("startBtn").addEventListener("click", function(){
    timer_started = true;
    let timer_id = setInterval(function(){
        if(timerCnt > 0 ){
            timerCnt--;
            document.getElementById("timerCnt").innerText = timerCnt;
        } else {
            timer_started = false;
            timerCnt = 30;
            clearInterval(timer_id);
            
        }
    }, 1000);
})

document.getElementById("clickCntBtn").addEventListener("click", function(){
    if(timer_started){
        clickCnt++;
        document.getElementById("clickCnt").innerText = clickCnt;
        localStorage.setItem("clickCnt", clickCnt);
        
    } 
})

document.getElementById("remButt").addEventListener("click", function(){
    if(clickCnt > 0){
        dltStorage;
        location.reload();
        
    }
})