//캔버스 받기
var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");

//중앙 좌표(x,y)
var centerx = canvas.width/2;
var centery = canvas.height/2;
var buttonColor = 'red';

var eRadius = 5;
var eSpeed = 2;

var heartPosX = Math.floor(Math.random() * 480); // 0에서 479 사이의 값
var heartPosY = Math.floor(Math.random() * 800); // 0에서 799 사이의 값 
// 마우스 이벤트 캔버스 상대 좌표 계산
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function startScreen() {
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = '#FFF';
    ctx.font = '48px Arial';
    ctx.fillText('내가 만든 게임', canvas.width/2 - 150, canvas.height/2 -150);

    ctx.fillStyle = buttonColor;
    ctx.fillRect(canvas.width / 2 - 60, canvas.height / 2 - 50, 120, 50);
    ctx.fillStyle = '#FFF';
    ctx.font = '20px Arial';
    ctx.fillText('시작', canvas.width/2 -25, canvas.height/2-10);
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
}
function handleMouseMove(event) {
    var pos = getMousePos(canvas, event);
    if (pos.x >= centerx - 60 && pos.x <= centerx + 60 &&
        pos.y >= centery - 50 && pos.y <= centery) {
        buttonColor = '#00F';
    } else {
        buttonColor = 'red';
    }
    ctx.fillStyle = buttonColor;
    ctx.fillRect(canvas.width / 2 - 60, canvas.height / 2 - 50, 120, 50);
    ctx.fillStyle = '#FFF';
    ctx.font = '20px Arial';
    ctx.fillText('시작', canvas.width/2 -25, canvas.height/2-10);
}

function handleClick(event) {
    var pos = getMousePos(canvas, event);
    if (pos.x >= centerx - 60 && pos.x <= centerx + 60 &&
        pos.y >= centery - 50 && pos.y <= centery) {
        canvas.removeEventListener('mousemove', handleMouseMove); // 이벤트 리스너 제거
        canvas.removeEventListener('click', handleClick); // 이벤트 리스너 제거
        scheduleNextEnemy();
        requestAnimationFrame(animate); 
    }
}

function gameScreen() {
    // canvas.removeEventListener('mousemove', handleMouseMove); // 이벤트 리스너 제거
    // canvas.removeEventListener('click', handleClick); // 이벤트 리스너 제거
    ctx.clearRect(0,0,canvas.width,canvas.height);
    playerStar();
    drawHeart();
}
function playerStar() { //gameScreen에 적용
    // 별의 꼭짓점 개수
    var numPoints = 5;
    // 별의 크기 조정을 위한 상수
    var scale = Math.min(canvas.width, canvas.height) / 800; // 캔버스 크기 대비 비율 조정
    // 별의 외부 반지름
    var outerRadius = 100 * scale;
    // 별의 내부 반지름
    var innerRadius = 40 * scale;

    function starPoint(x, y, radius, angle) {
    return {
        x: x + radius * Math.cos(angle - Math.PI / 2), // 각도를 조정하여 정방향으로 그리기
        y: y + radius * Math.sin(angle - Math.PI / 2) // 각도를 조정하여 정방향으로 그리기
    };
    }

    ctx.beginPath();
    for (var i = 0; i < numPoints * 2; i++) {
        // 짝수 인덱스일 때 외부 꼭짓점, 홀수 인덱스일 때 내부 꼭짓점 계산
        var radius = i % 2 === 0 ? outerRadius : innerRadius;
        // 현재 각도
        var angle = (Math.PI / numPoints) * i;
        // 현재 꼭짓점의 좌표
        var point = starPoint(canvas.width/2, canvas.height/2, radius, angle);
    
        if (i === 0) {
            ctx.moveTo(point.x, point.y);
        } else {
            ctx.lineTo(point.x, point.y);
        }
    }
    ctx.closePath();
    ctx.fillStyle = "rgb(255,201,14)";
    ctx.strokeStyle = 'black';
    ctx.fill();
    ctx.stroke();
}
function drawHeart() { //gameScreen에 적용
    // 하트 크기 계산 (캔버스 크기의 1/10)
    var size = Math.min(canvas.width, canvas.height) / 10;
    var radius = size; // 하트 반지름
    var color = "red"; // 하트 색상
  
    // 하트 중심 좌표 계산 (캔버스 경계에서 일정 거리 유지)
    
    var x = heartPosX;
    var y = heartPosY;
  
    ctx.beginPath();

    for (var theta = 0; theta <= Math.PI * 2; theta += 0.01) {
      var currentRadius = radius;
  
      // 하트 모양 조절
      if (theta > 0 && theta < Math.PI / 2) {
        currentRadius += (theta / (Math.PI / 2)) * radius;
      } else if (theta > Math.PI / 2 && theta < Math.PI) {
        currentRadius += ((Math.PI - theta) / (Math.PI / 2)) * radius;
      } else if (theta > Math.PI && theta < Math.PI / 2 * 3) {
        currentRadius -= ((theta - Math.PI) / (Math.PI / 2)) * radius;
      } else if (theta > Math.PI / 2 * 3 && theta < Math.PI * 2) {
        currentRadius -= ((Math.PI * 2 - theta) / (Math.PI / 2)) * radius;
      }
  
      var heartX = x + currentRadius * Math.cos(theta);
      var heartY = y + currentRadius * Math.sin(theta);
      ctx.lineTo(heartX, heartY);
    }
  
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  startScreen();

class EnemyL { //좌측 영역 적 소환
    constructor() {
        this.ex = -20;
        this.ey = Math.random() * 800;
        this.radius = eRadius;
        this.color = 'black';
        this.speed = eSpeed;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.ex,this.ey,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        let dx = centerx - this.ex;
        let dy = centery - this.ey;
        let distance = Math.sqrt(dx * dx + dy * dy); // 중앙점까지의 거리 계산

        if (distance > 5) { // 아직 중앙점에 충분히 가깝지 않다면
            let angle = Math.atan2(dy, dx);
            this.ex += this.speed * Math.cos(angle);
            this.ey += this.speed * Math.sin(angle);
            return false; // 원이 아직 사라지지 않음
        }
        return true; // 원이 중앙점에 도달하여 사라져야 함
    }
}
class EnemyR { //우측 영역 적 소환
    constructor() {
        this.ex = 500;
        this.ey = Math.random() * 800;
        this.radius = eRadius;
        this.color = 'black';
        this.speed = eSpeed;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.ex,this.ey,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        let dx = centerx - this.ex;
        let dy = centery - this.ey;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 5) {
            let angle = Math.atan2(dy, dx);
            this.ex += this.speed * Math.cos(angle);
            this.ey += this.speed * Math.sin(angle);
            return false;
        }
        return true;
    }
}
class EnemyT { //위측 영역 적 소환
    constructor() {
        this.ex = Math.random() * canvas.width;
        this.ey = -20;
        this.radius = eRadius;
        this.color = 'black';
        this.speed = eSpeed;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.ex,this.ey,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        let dx = centerx - this.ex;
        let dy = centery - this.ey;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 5) {
            let angle = Math.atan2(dy, dx);
            this.ex += this.speed * Math.cos(angle);
            this.ey += this.speed * Math.sin(angle);
            return false;
        }
        return true;
    }
}
class EnemyB { //아래쪽 영역 적 소환
    constructor() {
        this.ex = Math.random() * canvas.width;
        this.ey = canvas.height + 20;
        this.radius = eRadius;
        this.color = 'black';
        this.speed = eSpeed;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.ex,this.ey,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        let dx = centerx - this.ex;
        let dy = centery - this.ey;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 5) {
            let angle = Math.atan2(dy, dx);
            this.ex += this.speed * Math.cos(angle);
            this.ey += this.speed * Math.sin(angle);
            return false;
        }
        return true;
    }
}

var enemys = [];
function createEnemyL() {
     var enemy = new EnemyL();
     enemys.push(enemy);
     
}
function createEnemyR() {
    var enemy = new EnemyR();
    enemys.push(enemy);
}

function createEnemyT() {
    var enemy = new EnemyT();
    enemys.push(enemy);
}

function createEnemyB() {
    var enemy = new EnemyB();
    enemys.push(enemy);
}

// 적 생성 스케줄링을 위한 함수
function scheduleNextEnemy() {
    setTimeout(scheduleNextEnemy, 1000); // 매 1초마다 적 생성 스케줄을 반복

    createEnemiesForSide(createEnemyL); // 왼쪽 영역에 적 생성
    createEnemiesForSide(createEnemyR); // 오른쪽 영역에 적 생성
    createEnemiesForSide(createEnemyT); // 상단 영역에 적 생성
    createEnemiesForSide(createEnemyB); // 하단 영역에 적 생성
}
// 각 영역에 대해 지정된 수의 적을 생성하는 함수
function createEnemiesForSide(createEnemyFunction) {
    const numberOfEnemies = Math.floor(Math.random() * 11 + 5); // 5에서 15 사이의 무작위 수
    
    for (let i = 0; i < numberOfEnemies; i++) {
        createEnemyFunction(); // 해당 영역의 적 생성 함수 호출
    }
}
function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    gameScreen();


    // 적 업데이트 및 그리기
    for (let i = enemys.length - 1; i >= 0; i--) {
        enemys[i].draw();
        if (enemys[i].update()) {
            enemys.splice(i, 1); // 중앙에 도달한 적 제거
        }
    }

    requestAnimationFrame(animate);
}
