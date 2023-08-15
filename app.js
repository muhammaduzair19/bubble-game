var clutter = "";
let timer = 60;

function makeBubble() {
    for (let i = 1; i <= 126; i++) {
        let randomNum = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${randomNum}</div>`;
    }
    document.getElementById("panel-bottom").innerHTML = clutter
}

function hitChange() {
    let hitNo = Math.floor(Math.random() * 10);
    document.getElementById('hit').textContent = hitNo;
}


let score = 0;
function scoreIncreament(){
    score += 10;
    document.getElementById('score').textContent = score;
}


function timeInterval() {
    var interval = setInterval( function (){
        if(timer> 0){
            timer--;
            document.getElementById('timer').textContent = timer;
        }
        else{
            clearInterval(interval)
        }

    }, 1000)
}
    


timeInterval()
hitChange();
makeBubble();