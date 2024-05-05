var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");

// 초기 위치 및 크기 설정
var rect1 = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    color: "#FF0000"
};
var rect2 = {
    x: 200,
    y: 200,
    width: 50,
    height: 50,
    color: "#0000FF"
};

// 마우스 클릭 이벤트 핸들러
canvas.addEventListener("click", function(event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    // 클릭한 위치에 따라 rect1 또는 rect2 이동
    if (checkCollisionPointRect({x: mouseX, y: mouseY}, rect1)) {
        rect1.x = mouseX - rect1.width / 2;
        rect1.y = mouseY - rect1.height / 2;
    } else if (checkCollisionPointRect({x: mouseX, y: mouseY}, rect2)) {
        rect2.x = mouseX - rect2.width / 2;
        rect2.y = mouseY - rect2.height / 2;
    }

    // 화면 갱신
    draw();
});

// 사각형 그리기
function drawRect(rect) {
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}

// 화면 갱신 함수
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect(rect1);
    drawRect(rect2);

    // 충돌 여부 확인 후 메시지 표시
    if (checkCollision(rect1, rect2)) {
        ctx.fillStyle = "#000000";
        ctx.font = "20px Arial";
        ctx.fillText("Collision Detected!", 150, 30);
    }
}

// 사각형과 점 사이의 충돌 여부 확인 함수
function checkCollisionPointRect(point, rect) {
    return point.x >= rect.x && point.x <= rect.x + rect.width &&
           point.y >= rect.y && point.y <= rect.y + rect.height;
}

// 사각형 간 충돌 여부 확인 함수
function checkCollision(rect1, rect2) { //충돌 여부 확인
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

// 프로그램 시작 시 초기 화면 그리기
draw();
