const canvas = document.getElementById('TestingCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 마우스 위치를 저장할 변수
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// 마우스 이동 이벤트 처리
canvas.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// 하트 객체를 정의
class Heart {
    constructor() {
        this.x = Math.random()*canvas.width/2;
        this.y = Math.random()*canvas.height/2;;
        this.size = Math.random() * 20 + 10;
        this.speed = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.05 - 0.025; // 회전 속도
    }

    update() {
        // 마우스 위치를 향해 이동
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let speed = this.speed;
        if (distance < 100) {
            speed = this.speed * (distance / 100);
        }
        this.x += dx / distance * speed;
        this.y += dy / distance * speed;
        // 회전 각도 업데이트
        this.angle += this.rotationSpeed;
        // 캔버스를 벗어나면 다시 화면 안으로 이동
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(0, 0 - this.size);
        ctx.lineTo(0 + this.size, 0 + this.size * 2);
        ctx.lineTo(0 - this.size, 0 + this.size * 2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        setInterval(draw,200);
    }
}

// 하트 배열 생성 및 초기화
let hearts = [];
for (let i = 0; i < 100; i++) {
    let heart = new Heart();
    hearts.push(heart);
}

// 애니메이션 프레임 반복
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].update();
        hearts[i].draw();
    }
}

animate();