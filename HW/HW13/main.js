var canvas = document.getElementById("TriangleCanvas");
var ctx = canvas.getContext("2d");

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

var sideLength = 6; // 삼각형의 변의 길이
var height = Math.sqrt(3) / 2 * sideLength;

var x1 = 0;
var y1 = -height / 2;
var x2 = -sideLength / 2;
var y2 = height / 2;
var x3 = sideLength / 2;
var y3 = height / 2;

var rotateSpeed = 0;
var startColor = "Blue";


function spawnTriangle(){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.beginPath();
    ctx.translate(centerX, centerY); // 중심점으로 이동
    ctx.rotate(rotateSpeed);
    ctx.scale(50,50);
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.fillStyle = startColor;
    ctx.closePath();
    ctx.fill();
    rotateSpeed += 0.01/Math.PI;
    ctx.restore();
}


function animate(){
    spawnTriangle();
    requestAnimationFrame(animate);
}
animate();

function InOrOut(event){
    var rect = canvas.getBoundingClientRect();
    var x = (event.clientX - rect.left) / 50 - centerX/50;
    var y = (event.clientY - rect.top) / 50 - centerY/50;
    
    var sin = Math.sin(-rotateSpeed);
    var cos = Math.cos(-rotateSpeed);

    var translatedX = x * cos - y * sin;
    var translatedY = x * sin + y * cos;

    // 외적 계산
    var a = (x2 - x1) * (translatedY - y1) - (y2 - y1) * (translatedX - x1);
    var b = (x3 - x2) * (translatedY - y2) - (y3 - y2) * (translatedX - x2);
    var c = (x1 - x3) * (translatedY - y3) - (y1 - y3) * (translatedX - x3);

    var isInTriangle = (a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0);

    console.log(isInTriangle ? "Inside" : "Outside"); // 결과 출력

    startColor = isInTriangle ? "Red" : "Blue";

    return isInTriangle;
}
addEventListener("mousedown",(e) => InOrOut(e));