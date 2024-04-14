var canvas = document.getElementById("HeartBreaker");
var ctx = canvas.getContext("2d");
var mouseX = canvas.width/2;
var mouseY = canvas.height/2;
var heartSizeRange = { min: 5, max: 20 };
var colors = ["red", "black", "blue", "magenta", "pink", "cyan", "orange"];

class HeartObject {
    constructor() {
        this.colors = colors[Math.floor(Math.random() * colors.length)];
        this.radius = Math.random() * (heartSizeRange.max - heartSizeRange.min) + heartSizeRange.min;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 2 + 1; // Speed range: 1 to 3
        this.angle = Math.random() * Math.PI * 2;
        this.rotateSpeed = Math.random() * 0.5; // Rotate speed range: -0.01 to 0.01
        this.moveDirection = Math.random() < 0.5 ? -1 : 1;
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

        this.angle += this.rotateSpeed;
        
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

var hearts = [];
function createHeart() {
    var heart = new HeartObject();
    hearts.push(heart);
    if (hearts.length > 100) {
        hearts.splice(0, hearts.length - 100);
    }
}

canvas.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

setInterval(createHeart, 200); // Creates a heart every 0.2 seconds

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < hearts.length; i++){
        hearts[i].update();
        hearts[i].draw();
    }
}
animate();