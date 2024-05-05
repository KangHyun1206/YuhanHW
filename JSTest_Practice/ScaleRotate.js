var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");
var angle = 0;

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.scale(3,3);
    ctx.rotate(angle);
    ctx.fillRect(-50,-50,100,100);
    ctx.restore();
    angle += Math.PI/180;
    requestAnimationFrame(draw);
}
draw();