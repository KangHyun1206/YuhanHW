var canvas = document.getElementById("HeartBreaker");
var ctx = canvas.getContext("2d");

var mx = canvas.width/2;
var my = canvas.height/2;

var radius = 10;
var sx = mx -10;
var sy = my + radius * Math.sin(0);
ctx.lineTo(sx,sy);
ctx.beginPath();
                                                                                                                                                                                               
for(var i=0; i<Math.PI*2; i+=0.01)
{   
    if(i==0)
    {
        radius = 10;
    }
    if(i>0 && i<Math.PI/2)
    {
        for(var j=0.01; j<Math.PI/2; j+=0.01)
        {
            radius-= 0.01;
        }
    }
    if(i==Math.PI/2)
    {
        radius = 10;
    }
    if(i>Math.PI/2 && i<Math.PI)
    {
        for(var j=Math.PI/2+0.01; j<Math.PI; j+=0.01)
        {
            radius+= 0.005;
        }
    }
    if(i==Math.PI)
    {
        radius = 10;
    }
    if(i>Math.PI && i<Math.PI/4*5)
    {
        for(var j=Math.PI+0.01; j<Math.PI/4*5; j+=0.01)
        { 
            radius+= 0.01; 
        }
    }
    if(i>=Math.PI/4*5 && i<Math.PI/2*3)
    {
        for(var j=Math.PI/4*5; j<Math.PI/2*3; j+=0.01)
        {
            radius+= 0.01;
        }
    }
    if(i==Math.PI/2*3)
    {
        radius = 10;
    }
    if(i>Math.PI/2*3 && i<Math.PI/4*7)
    {
        for(var j =Math.PI/2*3+0.01; j<Math.PI/4*7; j+=0.01)
        {
            radius-= 0.01;
        }
    }
    if(i>=Math.PI/4*7 && i<Math.PI*2)
    {
        for(var j = Math.PI/4*7; j<=2*Math.PI; j+=0.01)
        {
            radius-= 0.01;
        }
    }
    if(i==Math.PI*2)
    {
        radius = 10;
    }
    
    
    
    
    
    
    var x = mx + radius * Math.cos(i);
    var y = my + radius * Math.sin(i);
    ctx.lineTo(x,y);
}

ctx.stroke();
ctx.closePath();