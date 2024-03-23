function circle1()
{
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var emptyview = document.getElementById("firstview");
    var imgview = document.getElementById("gameImg");
    var gameview = document.getElementById("instructionSection");

    emptyview.style.display = "none";
    imgview.style.display = "none";
    gameview.style.display = "none";
    myCanvas.style.display = "block";

    context.beginPath();
    context.strokeStyle="black";
    context.arc(250,250,200,0,Math.PI*2);
    context.stroke();
}
function review1()
{
    var imgview = document.getElementById("gameImg");
    var gameview = document.getElementById("instructionSection");
    var emptyview = document.getElementById("firstview");
    var canvas = document.getElementById("myCanvas");

    myCanvas.style.display = "none";
    emptyview.style.display = "none";
    gameview.style.display = "flex";
    imgview.style.display = "block";
}