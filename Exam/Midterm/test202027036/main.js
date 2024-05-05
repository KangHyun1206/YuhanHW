var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");
var centerx = canvas.width/2;
var centery = canvas.height/2;

ctx.translate(centerx,centery);

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
function drawHeart(ctx) {
    // 하트 크기 계산 (캔버스 크기의 1/10)
    var size = Math.min(canvas.width, canvas.height) / 10;
    var radius = size; // 하트 반지름
    var color = "red"; // 하트 색상
  
    // 하트 중심 좌표 계산 (캔버스 경계에서 일정 거리 유지)
    
    var x = Math.floor(Math.random() * (241 + 240)) - 240;
    var y = Math.floor(Math.random() * (401 + 400)) - 400;
  
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

  drawHeart(ctx);
  