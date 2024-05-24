//캔버스 받기
var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");

//중앙 좌표(x,y)
var centerx = canvas.width/2;
var centery = canvas.height/2;
var buttonColor = 'red';
var hitNum = 0;
var sn = [];
var CurX,CurY;
CurX = canvas.width - 100; // 오른쪽 상단 위치
CurY = 10;
var num1 = hitNum.toString();
var sn = num1.split('').map(Number);

function drawNumber() {
    CurX = canvas.width - 50; // 오른쪽 상단 위치를 다시 설정
    CurY = 10;
    ctx.save();
    ctx.beginPath();
    for (var i = 0; i < sn.length; i++) {
        if (sn[i] == 0) {
            ctx.moveTo(CurX, CurY);
            ctx.rect(CurX, CurY, 5, 10);
            ctx.stroke();
        }
        if (sn[i] == 1) {
            ctx.moveTo(CurX + 5, CurY);
            ctx.lineTo(CurX + 5, CurY + 10);
            ctx.stroke();
        }
        if (sn[i] == 2) {
            ctx.moveTo(CurX, CurY);
            ctx.lineTo(CurX + 5, CurY);
            ctx.lineTo(CurX + 5, CurY + 5);
            ctx.lineTo(CurX, CurY + 5);
            ctx.lineTo(CurX, CurY + 10);
            ctx.lineTo(CurX + 5, CurY + 10);
            ctx.stroke();
        }
        if (sn[i] == 3) {
            ctx.moveTo(CurX, CurY);
            ctx.lineTo(CurX + 5, CurY);
            ctx.lineTo(CurX + 5, CurY + 5);
            ctx.lineTo(CurX, CurY + 5);
            ctx.lineTo(CurX + 5, CurY + 5);
            ctx.lineTo(CurX + 5, CurY + 10);
            ctx.lineTo(CurX, CurY + 10);
            ctx.stroke();
        }
        if (sn[i] == 4) {
            ctx.moveTo(CurX, CurY);
            ctx.lineTo(CurX, CurY + 5);
            ctx.lineTo(CurX + 5, CurY + 5);
            ctx.lineTo(CurX + 5, CurY + 10);
            ctx.lineTo(CurX + 5, CurY);
            ctx.stroke();
        }
        if (sn[i] == 5) {
            ctx.moveTo(CurX, CurY);
            ctx.lineTo(CurX + 5, CurY);
            ctx.lineTo(CurX, CurY);
            ctx.lineTo(CurX, CurY + 5);
            ctx.lineTo(CurX + 5, CurY + 5);
            ctx.lineTo(CurX + 5, CurY + 10);
            ctx.lineTo(CurX, CurY + 10);
            ctx.stroke();
        }
        if (sn[i] == 6) {
            ctx.moveTo(CurX, CurY);
            ctx.lineTo(CurX + 5, CurY);
            ctx.lineTo(CurX, CurY);
            ctx.lineTo(CurX, CurY + 10);
            ctx.lineTo(CurX + 5, CurY + 10);
            ctx.lineTo(CurX + 5, CurY + 5);
            ctx.lineTo(CurX, CurY + 5);
            ctx.stroke();
        }
        if (sn[i] == 7) {
            ctx.moveTo(CurX, CurY);
            ctx.lineTo(CurX + 5, CurY);
            ctx.lineTo(CurX + 5, CurY + 10);
            ctx.stroke();
        }
        if (sn[i] == 8) {
            ctx.moveTo(CurX, CurY);
            ctx.lineTo(CurX, CurY + 10);
            ctx.lineTo(CurX + 5, CurY + 10);
            ctx.lineTo(CurX + 5, CurY);
            ctx.lineTo(CurX, CurY);
            ctx.lineTo(CurX, CurY + 5);
            ctx.lineTo(CurX + 5, CurY + 5);
            ctx.stroke();
        }
        if (sn[i] == 9) {
            ctx.moveTo(CurX, CurY);
            ctx.lineTo(CurX, CurY + 5);
            ctx.lineTo(CurX + 5, CurY + 5);
            ctx.lineTo(CurX + 5, CurY);
            ctx.lineTo(CurX, CurY);
            ctx.lineTo(CurX + 5, CurY);
            ctx.lineTo(CurX + 5, CurY + 10);
            ctx.lineTo(CurX, CurY + 10);
            ctx.stroke();
        }
        CurX += 10;
    }
    ctx.restore();
}



var PlayerScale = 1;
var targetScale = 1;
var eRadius = 5;
var eSpeed = 0.5;
var colnum = 0;
var starRange = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 20
}
var heartRadius = 20;
var heartPosX = Math.floor(Math.random() * 480); // 0에서 479 사이의 값
var heartPosY = Math.floor(Math.random() * 800); // 0에서 799 사이의 값 
var heartSign = false;
var heartRange = {
    x : heartPosX,
    y : heartPosY,
    radius : heartRadius
}

var playerPosX = canvas.width/2;
var playerPosY = canvas.height/2;
var playerOffsetX = 0;
var playerOffsetY = 0;
var playerSpeed = 2;
var playerRotateSpeed = 0;

var enemySign = false;
var hp = 3;
var gameRunning = false;


var attacking = false;
var attackValue = 3;

function heartCollision(starRange,heartRange) {
    var dx = starRange.x - heartRange.x;
    var dy = starRange.y - heartRange.y;
    var SumRadius = starRange.radius + heartRange.radius;
    var distance = Math.sqrt(dx*dx+dy*dy);
    if(distance<=SumRadius){ //충돌문
        console.log("heart collision");
        heartSign = true;
        attackValue += 1;
        heartPosX = Math.floor(Math.random() * 480);
        heartPosY = Math.floor(Math.random() * 800);
        heartRange.x = heartPosX;
        heartRange.y = heartPosY;
    }
}

function circleCollision(starRange,circle2) {
    var dx = starRange.x - circle2.x;
    var dy = starRange.y - circle2.y;
    var SumRadius = starRange.radius + circle2.radius;
    var distance = Math.sqrt(dx*dx+dy*dy);
    if(distance<SumRadius){ //충돌문
        console.log("circle collision");
        enemySign = true;
    }
}
function attackCollision(starRange, circle2) {
    var dx = starRange.x - circle2.x;
    var dy = starRange.y - circle2.y;
    var SumRadius = starRange.radius * PlayerScale + circle2.radius;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < SumRadius) { // 충돌문
        console.log("attack collision");
        hitNum += 1;
        num1 = hitNum.toString(); // num1 업데이트
        sn = num1.split('').map(Number); // sn 업데이트
        return true;
    }
    return false;
}

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
function endScreen() {
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = '#FFF';
    ctx.font = '48px Arial';
    ctx.fillText('게임 오버!!!', canvas.width/2 - 150, canvas.height/2 -150);

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

        initializeGame();
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        gameRunning = true;
        startEnemySpawn();
        requestAnimationFrame(animate); 
    }
}
function toggleAttack() {
    if (!attacking) {
        targetScale = 3;
        attacking = true;
        attackValue -= 1;
        setTimeout(originalState, 3000); // 공격 상태 복귀 타이머를 이곳으로 이동
    } 
}
function originalState(){
    if(attacking) {
        targetScale = 1;
        attacking = false;
    }
}
function updatePlayerScale() {
    if (PlayerScale < targetScale) {
        PlayerScale += 0.05;
        if (PlayerScale > targetScale) PlayerScale = targetScale;
    } else if (PlayerScale > targetScale) {
        PlayerScale -= 0.05;
        if (PlayerScale < targetScale) PlayerScale = targetScale;
    }
}
function initializeGame() {
    hp = 3;
    playerOffsetX = 0;
    playerOffsetY = 0;
    attackValue = 3;
    starRange.x = canvas.width / 2;
    starRange.y = canvas.height / 2;
    hitNum = 0;
    num1 = hitNum.toString(); // num1 업데이트
    sn = num1.split('').map(Number); // sn 업데이트
    keys = {};
    enemys = [];
    enemySave = [];
    for (let i = 0; i < enemySize; i++) {
        enemySave.push(new Enemy(-20, Math.random() * 800)); // Left
        enemySave.push(new Enemy(500, Math.random() * 800)); // Right
        enemySave.push(new Enemy(Math.random() * canvas.width, -20)); // Top
        enemySave.push(new Enemy(Math.random() * canvas.width, canvas.height + 20)); // Bottom
    }
}
function gameOver() {
    gameRunning = false;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
    enemys = [];
    enemySave = [];
    endScreen();
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
    
    // 별의 외부 반지름
    var outerRadius = 50 * PlayerScale;
    // 별의 내부 반지름
    var innerRadius = 20 * PlayerScale;

    function starPoint(x, y, radius, angle) {
    return {
        x: x + radius * Math.cos(angle - Math.PI / 2), // 각도를 조정하여 정방향으로 그리기
        y: y + radius * Math.sin(angle - Math.PI / 2) // 각도를 조정하여 정방향으로 그리기
    };
    }
    ctx.save();
    ctx.translate(centerx,centery);
    ctx.beginPath();
    ctx.rotate(playerRotateSpeed);
    for (var i = 0; i < numPoints * 2; i++) {
        // 짝수 인덱스일 때 외부 꼭짓점, 홀수 인덱스일 때 내부 꼭짓점 계산
        var radius = i % 2 === 0 ? outerRadius : innerRadius;
        // 현재 각도
        var angle = (Math.PI / numPoints) * i;
        // 현재 꼭짓점의 좌표
        var point = starPoint(0, 0, radius, angle);
    
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
    ctx.restore();
}
function drawHeart() { //gameScreen에 적용
    // 하트 크기 계산 (캔버스 크기의 1/10)
    var size = Math.min(canvas.width, canvas.height) / 10;
    var radius = heartRadius; // 하트 반지름
    var color = "red"; // 하트 색상
  
    // 하트 중심 좌표 계산 (캔버스 경계에서 일정 거리 유지)
    
    var x = heartPosX - playerOffsetX;
    var y = heartPosY - playerOffsetY;
  
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
class Enemy {
    constructor(ex, ey) {
        this.ex = ex;
        this.ey = ey;
        this.radius = eRadius;
        this.color = 'black';
        this.speed = eSpeed;
        this.distanceTraveled = 0; // 이동한 거리
        this.angle = Math.atan2(centery + playerOffsetY - this.ey, centerx + playerOffsetX - this.ex); // 초기 각도 계산
    }
    draw(offsetX, offsetY) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.ex - playerOffsetX, this.ey - playerOffsetY, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.ex += this.speed * Math.cos(this.angle);
        this.ey += this.speed * Math.sin(this.angle);
        this.distanceTraveled += this.speed;
        return this.distanceTraveled > 1500; // 이동 거리가 1500을 넘으면 true 반환
    }
    reset(){
        let position = Math.floor(Math.random() * 4);
        switch (position) {
            case 0: 
                this.ex = -20; 
                this.ey = Math.random() * canvas.height; 
                break;
            case 1: 
                this.ex = canvas.width + 20; 
                this.ey = Math.random() * canvas.height; 
                break;
            case 2: 
                this.ex = Math.random() * canvas.width; 
                this.ey = -20; 
                break;
            case 3: 
                this.ex = Math.random() * canvas.width; 
                this.ey = canvas.height + 20; 
                break;        
        }
        this.angle = Math.atan2(centery + playerOffsetY - this.ey, centerx + playerOffsetX - this.ex); // 초기 각도 재계산
        this.distanceTraveled = 0; // 이동 거리 초기화
    }
}
var enemySize = 100;
var enemys = [];
var enemySave = [];



function getEnemy() {
    if (enemySave.length > 0) {
        let enemy = enemySave.pop();
        enemy.reset();
        return enemy;
    } else {
        let position = Math.floor(Math.random() * 4);
        switch (position) {
            case 0: return new Enemy(-20, Math.random() * canvas.height); // Left
            case 1: return new Enemy(canvas.width + 20, Math.random() * canvas.height); // Right
            case 2: return new Enemy(Math.random() * canvas.width, -20); // Top
            case 3: return new Enemy(Math.random() * canvas.width, canvas.height + 20); // Bottom
        }
    }
}

function returnEnemy(enemy) {
    enemySave.push(enemy);
}

function startEnemySpawn() {
    setInterval(() => {
        if (gameRunning) {
            let numberOfEnemies = Math.floor(Math.random() * 11) + 5; // 5에서 15 사이의 랜덤 개수
            for (let i = 0; i < numberOfEnemies; i++) {
                let enemy = getEnemy();
                enemys.push(enemy);
            }
        }
    }, 1000); // 1초마다 적을 소환
}
var keys = {};
function handleKeyDown(event){
    keys[event.key] = true;
    if (event.key === 'Enter' && gameRunning && attackValue >= 1) {
        toggleAttack();
    }
}
function handleKeyUp(event){
    keys[event.key] = false;
}

function updatePlayerPosition() {
    playerRotateSpeed += 0.001*Math.PI;
    if (keys['ArrowUp']) playerOffsetY -= playerSpeed;
    if (keys['ArrowDown']) playerOffsetY += playerSpeed;
    if (keys['ArrowLeft']) playerOffsetX -= playerSpeed;
    if (keys['ArrowRight']) playerOffsetX += playerSpeed;

    
    // 충돌 범위의 중심 좌표를 업데이트
    starRange.x = playerPosX + playerOffsetX;
    starRange.y = playerPosY + playerOffsetY;

    // 하트 범위의 중심 좌표를 업데이트
    heartRange.x = heartPosX;
    heartRange.y = heartPosY;
}
function animate() {
    if(!gameRunning) return;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    updatePlayerPosition();
    updatePlayerScale();
    gameScreen();
    drawNumber(); // 매 프레임마다 숫자를 그립니다
    
    // 적 업데이트 및 그리기
    for (let i = enemys.length - 1; i >= 0; i--) {
        let enemy = enemys[i];

        if (!enemy) continue;
        
        let adjustedEnemyX = enemy.ex;
        let adjustedEnemyY = enemy.ey;
        enemy.draw(adjustedEnemyX, adjustedEnemyY);

        if (attacking && attackCollision(starRange, { x: enemy.ex, y: enemy.ey, radius: enemy.radius })) {
            returnEnemy(enemy);
            enemys.splice(i, 1);
            continue;
        }

        circleCollision(starRange, { x: enemy.ex, y: enemy.ey, radius: enemy.radius }); // 매핑
        heartCollision(starRange, heartRange);
        if(enemySign) {
            returnEnemy(enemy);
            enemys.splice(i,1);
            hp -= 1;
            if(hp == 0) {
                // alert("다시해");
                gameOver();
            }
            enemySign = false;
        }
        if (enemy.update()) {
            returnEnemy(enemy);
            enemys.splice(i,1);
            enemys.push(getEnemy());
        }
    }
    if(hp > 0) {
        requestAnimationFrame(animate);
    }
}
