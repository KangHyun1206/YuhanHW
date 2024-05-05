var canvas = document.getElementById("HeartBreaker");
var ctx = canvas.getContext("2d");

var mx = canvas.width/2;
var my = canvas.height/2;

var radius = 10;

ctx.beginPath();
for(var i=0; i<Math.PI*2; i+=0.01)
{   
    if(i>=Math.PI*0 && i<Math.PI/2)
    {
        for(var j=0; j<Math.PI/2; j+=0.01)
        {
            radius-= 10*0.01/Math.PI/2;
        }
    }
    if(i>=Math.PI/2 && i<Math.PI)
    {
        for(var j=Math.PI/2; j<Math.PI; j+=0.01)
        {
            radius += 10*0.01/Math.PI/2;
        }
    }
    if(i>=Math.PI && i<Math.PI/4*5)
    {
        for(var j=Math.PI; j<Math.PI/4*5; j+=0.01)
        {
            radius += 10*0.01/Math.PI/2;
        }
    }
    if(i>=Math.PI/4*5 && i<Math.PI/2*3)
    {
        for(var j=Math.PI/4*5; j<Math.PI/2*3; j+=0.01)
        {
            radius -= 10*0.01/Math.PI/2;
        }
    }
    if(i>=Math.PI/2*3 && i<Math.PI/4*7)
    {
        for(var j =Math.PI/2*3; j<Math.PI/4*7; j+=0.01)
        {
            radius += 10*0.01/Math.PI/2;
        }
    }
    if(i>=Math.PI/4*7 && i<=Math.PI*2)
    {
        for(var j = Math.PI/4*7; j<=2*Math.PI; j+=0.01)
        {
            radius -= 10*0.01/Math.PI/2;
        }
    }
    var x = mx + radius * Math.cos(i);
    var y = my + radius * Math.sin(i);
    ctx.lineTo(x,y);
}

// for(var i=Math.PI/2;i<=Math.PI;i+=Math.PI/200)
// {
//     for(var j=100;j>=0;j--)
//     {
//         ctx.lineTo(mx+Math.cos(i)*100-Math.cos(i)*j,my+Math.sin(i)*100+Math.sin(i)*j);
//     }
    
// }
// for(var i=Math.PI/2;i<=Math.PI/2*3/2;i+=Math.PI/200)
// {
//     for(var j=100;j>=50;j--)
//     {
//         ctx.lineTo(mx+Math.cos(i)*100-Math.cos(i)*j,my+Math.sin(i)*100-Math.sin(i)*j);
//     }
    
// }
ctx.stroke();
ctx.closePath();