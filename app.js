let timer = 60;
var clutter = "";
let score = 0;
var hitNo = 0;


function makeBubble() {
    for (let i = 1; i <= 126; i++) {
        let randomNum = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${randomNum}</div>`;
    }
    document.getElementById("panel-bottom").innerHTML = clutter
}

function hitChange() {
    hitNo = Math.floor(Math.random() * 10);
    document.getElementById('hit').textContent = hitNo;
}


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
            let panel = document.getElementById('panel-bottom')
            panel.innerHTML = `<h1>Game Over</h1> <h3>Your score is ${score}</h3>`
            panel.style.backgroundColor = "#4F6371";
            panel.style.color = "white";
            panel.style.flexDirection = "column"
            hit = 0;
        }

    }, 1000)
}
    

document.getElementById("panel-bottom")
.addEventListener('click', (details) =>{
    console.log(details.target.innerHTML)
    if(Number(details.target.innerHTML) == hitNo){
        scoreIncreament();
        makeBubble();
        hitChange();
    }
})

makeBubble();
hitChange();
timeInterval();



