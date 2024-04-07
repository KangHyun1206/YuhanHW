var canvas = document.getElementById("SolarSystem");
var ctx = canvas.getContext("2d");

var sunSelfAngle = 0;
var earthSelfAngle = 0;
var earthAngle = 0;
var moonSelfAngle = 0;
var moonAngle = 0;

function draw()
{   
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2); //태양 위치(가운데)
    ctx.rotate(sunSelfAngle);
    ctx.fillStyle = "orange";
    ctx.fillRect(-25,-25,50,50);
    ctx.restore();

    sunSelfAngle += Math.PI/100;

    earthAngle += Math.PI/200;
    earthSelfAngle += Math.PI/150;
    
    moonAngle += Math.PI/100;
    moonSelfAngle += Math.PI/80;

    ctx.save();
    ctx.translate(canvas.width/2+100*Math.cos(earthAngle),canvas.height/2+100*Math.sin(earthAngle));
    ctx.rotate(earthSelfAngle);
    ctx.fillStyle = "blue";
    ctx.fillRect(-10,-10,20,20);
    ctx.restore();

    ctx.save();
    ctx.translate(canvas.width/2+100*Math.cos(earthAngle)+30*Math.cos(moonAngle),canvas.height/2+100*Math.sin(earthAngle)+30*Math.sin(moonAngle));
    ctx.rotate(moonSelfAngle);
    ctx.fillStyle = "gray";
    ctx.fillRect(-5,-5,10,10);
    ctx.restore();
}
setInterval(draw,10);