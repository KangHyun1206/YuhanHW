var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = 'blue';
ctx.strokeRect(5,5,25,15);
ctx.scale(3,3);
ctx.strokeRect(5,5,25,15);