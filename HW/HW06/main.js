var canvas = document.getElementById("HeartBreaker");
var ctx = canvas.getContext("2d");
var mouseX = canvas.width/2;
var mouseY = canvas.height/2;
var heartSizeRange = { min: 5, max: 20 };
var colors = ["red", "black", "blue", "magenta", "pink", "cyan", "orange"];

class HeartObject { //하트 오브젝트 클래스
    constructor() {
        this.colors = colors[Math.floor(Math.random() * colors.length)]; //컬러
        this.radius = Math.random() * (heartSizeRange.max - heartSizeRange.min) + heartSizeRange.min; //하트 크기
        this.x = Math.random() * canvas.width; //x좌표
        this.y = Math.random() * canvas.height; //y좌표
        this.speed = Math.random() * 2 + 1; //속도
        this.angle = Math.random() * Math.PI * 2; //객체 앵글
        this.rotateSpeed = Math.random() * 0.5; //회전 속도
        this.moveDirection = Math.random() < 0.5 ? -1 : 1; //이동 방향
    }

    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x, this.y);
        
        for (var theta = 0; theta <= Math.PI * 2; theta += 0.01)  //하트 만들기 : 각도마다 반지름 길이 다르게!
        {
            var radius = this.radius; //반지름 값 초기화

            
            if (theta > 0 && theta < Math.PI / 2) // 0~90도
            {
                radius += (theta / (Math.PI / 2)) * this.radius; //각 각도마다 지름값 다르게 설정
            } 
            else if (theta > Math.PI / 2 && theta < Math.PI)  //90~180도
            {
                radius += ((Math.PI - theta) / (Math.PI / 2)) * this.radius;
            } 
            else if (theta > Math.PI && theta < Math.PI / 2 * 3) //180~270도
            {
                radius -= ((theta - Math.PI) / (Math.PI / 2)) * this.radius;
            }    
            else if (theta > Math.PI / 2 * 3 && theta < Math.PI * 2) //270~360도
            {
                radius -= ((Math.PI * 2 - theta) / (Math.PI / 2)) * this.radius;
            }

            var x = this.x + radius * Math.cos(theta); //반지름에 따라 설정된 좌표X
            var y = this.y + radius * Math.sin(theta); //반지름에 따라 설정된 좌표Y
            ctx.lineTo(x, y); //X,Y 좌표 설정
        }
        ctx.rotate(this.angle);
        ctx.closePath();
        ctx.fillStyle = this.colors;
        ctx.fill();
        ctx.restore();
    }

    update() {
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let speed = this.speed;
        if (distance < 50) {
            speed = this.speed * (distance / 50);
        }
        this.x += dx * (speed / distance);
        this.y += dy * (speed / distance);

        this.angle += this.rotateSpeed; //회전 넣기
        
        if (this.x > canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = canvas.height;
        }
    }
}

var hearts = []; //객체 배열 선언
function createHeart() { //하트 객체 생성(100개 넘으면 오래된 순 삭제)
    var heart = new HeartObject();
    hearts.push(heart);
    if (hearts.length > 100) {
        hearts.splice(0, hearts.length - 100);
    }
}

canvas.addEventListener("mousemove", function(event) { //마우스 이동 이벤트
    mouseX = event.clientX;
    mouseY = event.clientY;
});

setInterval(createHeart, 200); //0.2초마다 하트 생성

function animate() { //애니메이션 출력
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < hearts.length; i++){
        hearts[i].update();
        hearts[i].draw();
        hearts[i].angle += hearts[i].rotateSpeed;
    }
}
animate(); //재생