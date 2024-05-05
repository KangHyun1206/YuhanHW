var canvas = document.getElementById("TestCanvas");
var ctx = canvas.getContext("2d");
const particleArray = [];

const mouse = {
    x:undefined, y:undefined,
}
class Particle {
    constructor(){
        // this.x = mouse.x;
        // this.y = mouse.y;

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
        ctx.fill();
    }
}
new Particle();


function init() {
    for(let i = 0; i < 100; i++){
        particleArray.push(new Particle());
    }
}
init();
function showParticles(){
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
    }
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);

    showParticles();
}
animate();
