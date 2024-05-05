var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'white';
ctx.fillRect(10,20,150,50);

window.addEventListener('resize',function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
    ctx.fillRect(10,20,150,50);
})

ctx.fillStyle = 'green';
ctx.lineWidth = 5;
ctx.setLineDash([10]);
ctx.beginPath();
ctx.arc(100,150,50,0,Math.PI*2);
ctx.fill();

const mouse = {
    x:undefined, y:undefined,
}

function drawCircle() {
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y,50,0,Math.PI*2);
    ctx.fill();
}
// canvas.addEventListener('click',function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;

//     console.log(event);
//     drawCircle();
// })
canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;

    console.log(event);
    drawCircle();
})

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
    drawCircle();
}
animate();
