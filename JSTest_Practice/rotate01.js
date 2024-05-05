var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");

var midX = canvas.width/2;
var midY = canvas.height/2;

var SunR = 0;
var EarthR = 0;
var EarthT = 0;
var MoonR = 0;
var MoonT = 0;

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(midX,midY);
    ctx.rotate(SunR);
    ctx.fillStyle = 'orange';
    ctx.fillRect(-50,-50,100,100);

    ctx.translate(100,100);
    ctx.rotate(EarthR);
    ctx.fillStyle = 'blue';
    ctx.fillRect(-10,-10,20,20);
    ctx.restore();
    
    SunR += Math.PI/100;
    EarthR += Math.PI/150;
}


function animate() {
    requestAnimationFrame(animate);
    draw();
}
animate();