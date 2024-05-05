var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");

function clickPointer(event) {

    const dx = event.clientX - ctx.canvas.offsetLeft;
    const dy = event.clientY - ctx.canvas.offsetTop;

    console.log(event);
    ctx.beginPath();
    ctx.arc(dx, dy, 10, 0, Math.PI*2, false);
    ctx.fill();
}

canvas.addEventListener('click', clickPointer);