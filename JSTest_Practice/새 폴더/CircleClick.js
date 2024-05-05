var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");
let xPos = 10;
let timer;
function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(xPos, 150, 10, 0, Math.PI*2,false);
    ctx.fill();
    xPos += 2;

    timer = requestAnimationFrame(draw);
}
draw();

function cancelFrame() {
    cancelAnimationFrame(timer);
}

canvas.addEventListener('click', cancelFrame);