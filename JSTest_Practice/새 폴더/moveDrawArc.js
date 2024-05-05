var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");
let drawing;

function downDraw() {
    drawing = true;
}

function upDraw() {
    drawing = false;
}

function moveDraw(event) {
    if(!drawing) return;

    const dx = event.clientX - ctx.canvas.offsetLeft;
    const dy = event.clientY - ctx.canvas.offsetTop;

    console.log(event);
    ctx.beginPath();
    ctx.arc(dx,dy,10,0,Math.PI*2, false);
    ctx.fill();
    
}
canvas.addEventListener('mousedown', downDraw);
canvas.addEventListener('mouseup',upDraw);
canvas.addEventListener('mousemove',moveDraw);

