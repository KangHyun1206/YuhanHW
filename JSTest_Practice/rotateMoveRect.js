var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");
var angle = 0;
var rectX = canvas.width/2;
var rectY = canvas.height/2;
var isMouseDown = false; // 마우스 클릭 여부를 나타내는 플래그
function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.save();
    ctx.translate(rectX,rectY);
    ctx.rotate(angle);
    ctx.fillStyle = 'red';
    ctx.fillRect(-50,-50,100,100);
    ctx.restore();

    angle += Math.PI/180;
    requestAnimationFrame(draw);
}
draw();
function moveMent(e){
    if(e.key == 'ArrowRight') {
        rectX += 5;
    }
    else if(e.key == 'ArrowLeft') {
        rectX -= 5;
    }
    else if(e.key == 'ArrowUp') {
        rectY -= 5;
    }
    else if(e.key == 'ArrowDown') {
        rectY += 5;
    }
    if(e.key == 0){
        rectX += 5;
    }
    else if(e.key == 1) {
        rectX -= 5;
    }
}
document.addEventListener('keydown',moveMent);
// 마우스 클릭 이벤트 리스너
canvas.addEventListener('mousedown', function(event) {
    isMouseDown = true; // 마우스가 클릭됨을 나타내는 플래그를 true로 설정
    rectX = event.clientX - canvas.getBoundingClientRect().left; // 클릭한 위치로 사각형의 X 좌표 설정
    rectY = event.clientY - canvas.getBoundingClientRect().top; // 클릭한 위치로 사각형의 Y 좌표 설정
});

// 마우스 이동 이벤트 리스너
canvas.addEventListener('mousemove', function(event) {
    if (isMouseDown) { // 마우스가 클릭된 상태일 때만 실행
        rectX = event.clientX - canvas.getBoundingClientRect().left; // 마우스 이동에 따라 사각형의 X 좌표 업데이트
        rectY = event.clientY - canvas.getBoundingClientRect().top; // 마우스 이동에 따라 사각형의 Y 좌표 업데이트
    }
});

// 마우스 클릭 해제 이벤트 리스너
canvas.addEventListener('mouseup', function() {
    isMouseDown = false; // 마우스 클릭 해제됨을 나타내는 플래그를 false로 설정
});