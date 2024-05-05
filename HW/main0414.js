var canvas = document.getElementById("HeartBreaker");
var ctx = canvas.getContext("2d");

var colors = ["red", "black", "blue", "magenta", "pink", "cyan", "orange"];
var hearts = []; //하트 객체를 담을 그릇
class HeartObject //하트 오브젝트 클래스
{
    constructor(colorIndex, radiusOrigin, positionX, positionY, moveSpeedX, moveSpeedY, rotateSpeed, moveDirection){ //생성자
        this.color = colors[colorIndex]; //컬러
        this.radiusOrigin = radiusOrigin; //반지름. 즉, 크기
        this.positionX = positionX; //x좌표
        this.positionY = positionY; //y좌표
        this.moveSpeedX = moveSpeedX; //X방향 이동속도
        this.moveSpeedY = moveSpeedY; //y방향 이동속도
        this.rotateSpeed = rotateSpeed; //회전 속도
        this.moveDirection = moveDirection; //이동방향
        this.RotationNow = 0; //현재 회전속도
    }
    draw(){
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.positionX,this.positionY); //X,Y 좌표설정
        ctx.rotate(this.RotationNow); //현재 회전속도로 회전 넣기
        ctx.scale(this.radiusOrigin,this.radiusOrigin); //크기 넣기
        for (var theta = 0; theta <= Math.PI * 2; theta += 0.01)  //하트 만들기 : 각도마다 반지름 길이 다르게!
        {
            var radius = this.radiusOrigin; //반지름 값 초기화

            
            if (theta > 0 && theta < Math.PI / 2) // 0~90도
            {
                radius += (theta / (Math.PI / 2)) * this.radiusOrigin; //각 각도마다 지름값 다르게 설정
            } 
            else if (theta > Math.PI / 2 && theta < Math.PI)  //90~180도
            {
                radius += ((Math.PI - theta) / (Math.PI / 2)) * this.radiusOrigin;
            } 
            else if (theta > Math.PI && theta < Math.PI / 2 * 3) //180~270도
            {
                radius -= ((theta - Math.PI) / (Math.PI / 2)) * this.radiusOrigin;
            }    
            else if (theta > Math.PI / 2 * 3 && theta < Math.PI * 2) //270~360도
            {
                radius -= ((Math.PI * 2 - theta) / (Math.PI / 2)) * this.radiusOrigin;
            }

            var x = this.positionX + radius * Math.cos(theta); //반지름에 따라 설정된 좌표X
            var y = this.positionY + radius * Math.sin(theta); //반지름에 따라 설정된 좌표Y
            ctx.lineTo(x, y); //X,Y 좌표 설정
        }
        ctx.fillStyle = this.color; //색상 설정
        ctx.fill(); 
        ctx.closePath();
        ctx.restore();

        this.RotationNow += this.rotateSpeed*this.moveDirection; //회전 속도 변경
    }
}
function getRandomSign() //+,-방향 설계
{
    return Math.random() < 0.5 ? -1 : 1; //랜덤값이 0.5보다 작으면 -1, 그 외는 +1
}

function render(mouseX, mouseY) { //마우스 위치로 랜더링
    var Heart = new HeartObject(Math.round(Math.random()*6), Math.random()*10, mouseX, mouseY, Math.random(),Math.random(),Math.random()*0.1/Math.PI,getRandomSign()); //하트 객체 생성
    hearts.push(Heart); //하트 객체 추가(hearts 배열에)
    
    // 배열의 길이가 100 초과 시 가장 오래된 값 삭제
    if (hearts.length > 100) {
        hearts.splice(0, hearts.length - 100);
    }
    
}
    canvas.addEventListener('mousemove', function chaseMouse(event) { //마우스 이동 이벤트 받아오기
        // 마우스 커서의 위치 가져오기
        var mouseX = event.clientX - canvas.getBoundingClientRect().left; //마우스 커서 우측 위치로 설정
        var mouseY = event.clientY - canvas.getBoundingClientRect().top; //마우스 커서 하단 위치로 설정
        setInterval(render(mouseX,mouseY),200);
        // for(var i =0; i<100; i++)
        // {
        //     render(mouseX, mouseY); //설정 위치로 랜더링
        // }
        // 객체 위치 업데이트
        hearts.positionX = mouseX; //하트 위치 업데이트
        hearts.positionY = mouseY; 
        
    });
function mousePointer() { //마우스 포인터 위치 받아오기
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); //캔버스 판 초기화
    
    for(var i = 0; i < hearts.length; i++) { //객체 위치 이동 반복문
        var heart = hearts[i];
        heart.draw();
        heart.positionX += Math.cos(heart.moveSpeedX) * 2 *heart.moveDirection; 
        heart.positionY += Math.sin(heart.moveSpeedY) * 2 *heart.moveDirection;
        
    }
    
}
setInterval(mousePointer,200);