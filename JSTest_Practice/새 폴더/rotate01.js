var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = 'blue';
ctx.rotate(20*Math.PI/180); //20도 회전
ctx.fillRect(50,20,100,50);