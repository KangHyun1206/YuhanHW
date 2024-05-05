var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");
var cx = canvas.width/2;
var cy = canvas.height/2;
var angle = 0;

let curve =false;

function start(e) {
    curve = true;
    draw(e);
}

function finish(e){
    curve = false;
    ctx.beginPath();
}
function draw(e) {
    if(!curve) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'red';
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(e.clientX,e.clientY);
}

canvas.addEventListener('mousedown',start);
canvas.addEventListener('mouseup',finish);
canvas.addEventListener('mousemove',draw);