const canvas = document.getElementById('TestCanvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.scale(2,2);
ctx.moveTo(10,20);
ctx.arc(20,20,10,Math.PI,0,false);
ctx.arc(40,20,10,Math.PI,0,false);
ctx.arc(60,20,10,Math.PI,0,false);
ctx.lineTo(70,50);
ctx.lineTo(10,50);
ctx.lineTo(10,20);
ctx.fillStyle = 'brown';
ctx.stroke();
ctx.fill();