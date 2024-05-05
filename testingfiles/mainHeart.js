var canvas = document.getElementById("HeartBreaker");
var ctx = canvas.getContext("2d");

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var maxRadius = 100; // 하트의 크기를 조절할 수 있는 변수
var maxHearts = 100; // 최대 하트 개수
var colors = ["#C7C5FF", "black", "blue", "magenta", "pink", "cyan", "orange"];

var hearts = [];
class HeartObject
{
    constructor(colorIndex, radiusOrigin, positionX, positionY, moveSpeedX, moveSpeedY, rotateSpeed, moveDirection){
        this.color = colors[colorIndex];
        this.radiusOrigin = radiusOrigin;
        this.positionX = positionX;
        this.positionY = positionY;
        this.moveSpeedX = moveSpeedX;
        this.moveSpeedY = moveSpeedY;
        this.rotateSpeed = rotateSpeed;
        this.moveDirection = moveDirection;
    }
    draw()
    {
        ctx.save();
        ctx.beginPath();
        ctx.rotate(this.rotateSpeed);
        this.rotateSpeed += this.rotateSpeed;
        for (var theta = 0; theta <= Math.PI * 2; theta += 0.01) 
        {
            var radius = this.radiusOrigin; // 초기 반지름 값

            // 각도 범위에 따라 반지름 값 조정
            if (theta > 0 && theta < Math.PI / 2) 
            {
                radius -= (theta / (Math.PI / 2)) * this.radiusOrigin;
            } 
            else if (theta > Math.PI / 2 && theta < Math.PI) 
            {
                radius -= ((Math.PI - theta) / (Math.PI / 2)) * this.radiusOrigin;
            } 
            else if (theta > Math.PI && theta < Math.PI / 2 * 3) 
            {
                radius += ((theta - Math.PI) / (Math.PI / 2)) * this.radiusOrigin;
            }    
            else if (theta > Math.PI / 2 * 3 && theta < Math.PI * 2) 
            {
                radius += ((Math.PI * 2 - theta) / (Math.PI / 2)) * this.radiusOrigin;
            }

            var x = this.positionX + radius * Math.cos(theta);
            var y = this.positionY + radius * Math.sin(theta);
            ctx.lineTo(x, y);
        }
        ctx.fillStyle = this.color; // 선 색상 설정
        ctx.fill(); // 선 그리기
        ctx.closePath();
        ctx.restore();
    }
}
function getRandomSign()
{
    return Math.random() < 0.5 ? -1 : 1;
}




function render(event){
    var Heart = new HeartObject(Math.round(Math.random()*6), Math.random()*100, event.clientX, event.clientY,Math.random() *0.5+0.5, Math.random()*0.5+0.5, Math.random() * Math.PI / 100,getRandomSign());
    hearts.push(Heart); // 생성된 하트 배열에 추가

    // 화면 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 하트 그리기
    for (var i = 0; i < hearts.length; i++) {
        hearts[i].draw();

        // 하트 이동
        hearts[i].positionX += hearts[i].moveSpeedX * hearts[i].moveDirection;
        hearts[i].positionY += hearts[i].moveSpeedY * hearts[i].moveDirection;
    if (hearts.length > maxHearts) {
            hearts.shift(); // 배열에서 가장 오래된 하트 제거
    }
       
    // requestAnimationFrame(render);
    }
    setTimeout(function () {
        requestAnimationFrame(function () {
            render(event);
        });
    }, 3000); // 여기서 시간 간격을 조절 가능
    
}

canvas.addEventListener('mousemove',render);
