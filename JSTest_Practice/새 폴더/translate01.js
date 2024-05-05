var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = 'blue';
ctx.fillRect(10,10,100,50);
ctx.translate(70, 70);
ctx.fillStyle = 'pink';
ctx.fillRect(10,10,100,50);