var canvas = document.getElementById('TestingCanvas');
    var ctx = canvas.getContext('2d');

    // 객체 위치 및 크기
    var object = {
        x: 50,
        y: 50,
        width: 50,
        height: 50,
        speed: 0.1 // 움직이는 속도
    };

    // 캔버스 위의 마우스 이벤트 감지
    canvas.addEventListener('mousemove', function(event) {
        // 마우스 커서의 위치 가져오기
        var mouseX = event.clientX - canvas.getBoundingClientRect().left;
        var mouseY = event.clientY - canvas.getBoundingClientRect().top;

        // 객체 위치 업데이트
        object.x = mouseX - object.width / 2;
        object.y = mouseY - object.height / 2;
    });

    // 애니메이션 프레임 요청
    function animate() {
        requestAnimationFrame(animate);

        // 화면 지우기
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 객체의 위치 약간씩 변경
        object.x += Math.cos(performance.now() * object.speed) * 2;
        object.y += Math.sin(performance.now() * object.speed) * 2;

        // 객체 그리기
        ctx.fillRect(object.x, object.y, object.width, object.height);
    }

    // 애니메이션 시작
    animate();