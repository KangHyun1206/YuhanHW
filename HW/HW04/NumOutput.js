var canvas = document.getElementById("numOutput");
var ctx = canvas.getContext("2d");
var sn = [];
var CurX,CurY;
CurX = 10;
CurY = 10;
var num1 = "202027036";
var sn = num1;
// sn = [1,2,3,4,5,6,7,8,9,0,8,9];
Num(sn);

function Num(){
    for(var i=0; i<sn.length;i++)
    {
        if(sn[i]==0)
        {
            ctx.moveTo(CurX,CurY);
            ctx.rect(CurX,CurY,5,10);
            ctx.stroke();
        }
        if(sn[i]==1)
        {
            ctx.moveTo(CurX+5,CurY);
            ctx.lineTo(CurX+5,CurY+10);
            ctx.stroke();
        }
        if(sn[i]==2)
        {
            ctx.moveTo(CurX,CurY);
            ctx.lineTo(CurX+5,CurY);
            ctx.lineTo(CurX+5,CurY+5);
            ctx.lineTo(CurX,CurY+5);
            ctx.lineTo(CurX,CurY+10);
            ctx.lineTo(CurX+5,CurY+10);
            ctx.stroke();
        }
        if(sn[i]==3)
        {
            ctx.moveTo(CurX,CurY);
            ctx.lineTo(CurX+5,CurY);
            ctx.lineTo(CurX+5,CurY+5);
            ctx.lineTo(CurX,CurY+5);
            ctx.lineTo(CurX+5,CurY+5);
            ctx.lineTo(CurX+5,CurY+10);
            ctx.lineTo(CurX,CurY+10);
            ctx.stroke();
        }
        if(sn[i]==4)
        {
            ctx.moveTo(CurX,CurY);
            ctx.lineTo(CurX,CurY+5);
            ctx.lineTo(CurX+5,CurY+5);
            ctx.lineTo(CurX+5,CurY+10);
            ctx.lineTo(CurX+5,CurY);
            ctx.stroke();
        }
        if(sn[i]==5)
        {
            ctx.moveTo(CurX,CurY);
            ctx.lineTo(CurX+5,CurY);
            ctx.lineTo(CurX,CurY);
            ctx.lineTo(CurX,CurY+5);
            ctx.lineTo(CurX+5,CurY+5);
            ctx.lineTo(CurX+5,CurY+10);
            ctx.lineTo(CurX,CurY+10);
            ctx.stroke();
        }
        if(sn[i]==6)
        {
            ctx.moveTo(CurX,CurY);
            ctx.lineTo(CurX+5,CurY);
            ctx.lineTo(CurX,CurY);
            ctx.lineTo(CurX,CurY+10);
            ctx.lineTo(CurX+5,CurY+10);
            ctx.lineTo(CurX+5,CurY+5);
            ctx.lineTo(CurX,CurY+5);
            ctx.stroke();
        }
        if(sn[i]==7)
        {
            ctx.moveTo(CurX,CurY);
            ctx.lineTo(CurX+5,CurY);
            ctx.lineTo(CurX+5,CurY+10);
            ctx.stroke();
        }
        if(sn[i]==8)
        {
            ctx.moveTo(CurX,CurY);
            ctx.lineTo(CurX,CurY+10);
            ctx.lineTo(CurX+5,CurY+10);
            ctx.lineTo(CurX+5,CurY);
            ctx.lineTo(CurX,CurY);
            ctx.lineTo(CurX,CurY+5);
            ctx.lineTo(CurX+5,CurY+5);
            ctx.stroke();
        }
        if(sn[i]==9)
        {
            ctx.moveTo(CurX,CurY);
            ctx.lineTo(CurX,CurY+5);
            ctx.lineTo(CurX+5,CurY+5);
            ctx.lineTo(CurX+5,CurY);
            ctx.lineTo(CurX,CurY);
            ctx.lineTo(CurX+5,CurY);
            ctx.lineTo(CurX+5,CurY+10);
            ctx.lineTo(CurX,CurY+10);
            ctx.stroke();
        }
        CurX+=10;
    }
}