var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");

var circle1 = {
    x : 100,
    y : 200,
    radius : 50,
    color : 'blue'
}
var circle2 = {
    x : 150,
    y : 200,
    radius : 50,
    color : 'red'
}
var mouseX = 0;
var mouseY = 0;
function circleCollision(circle1,circle2) {
    var dx = circle1.x - circle2.x;
    var dy = circle1.y - circle2.y;
    var SumRadius = circle1.radius + circle2.radius;
    var distance = Math.sqrt(dx*dx+dy*dy);
    if(distance<SumRadius){ //충돌문
        alert("원끼리 충돌했습니다");
    }
}
function draw() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(circle1.x,circle1.y,circle1.radius,0,Math.PI*2);
    ctx.arc(circle2.x,circle2.y,circle2.radius,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
}
draw();
circleCollision(circle1,circle2);
function circleMove(event) {
    mouseX = event.x - circle1.x;
    mouseY = event.y - circle1.y;

    circle1.x = mouseX;
    circle1.y = mouseY;
}
canvas.addEventListener("click",circleMove(circle1));

