var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");

ctx.fillRect(100,100,180,180);
ctx.save();
ctx.fillStyle = '#0080FF';
ctx.fillRect(120,120,140,140);
ctx.save();
ctx.fillStyle = '#99CCFF';
ctx.fillRect(140,140,100,100);
ctx.restore();
// ctx.fillStyle = '#0080FF';
ctx.fillRect(160,160,60,60);
ctx.restore();
ctx.fillRect(180,180,20,20);