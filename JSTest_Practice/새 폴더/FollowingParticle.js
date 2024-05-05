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

        this.x = mouse.x;
        this.y = mouse.y;

        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw() {
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
new Particle();


canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;

    for(let i = 0; i < 10; i++){
        particleArray.push(new Particle());
    }
})
canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;

    for(let i = 0; i < 10; i++){
        particleArray.push(new Particle());
    }
})
function showParticles(){
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
        if(particleArray[i].size <=0.3) {
            particleArray.splice(i,1);
            i--;
        }
    }
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);

    showParticles();
}
animate();
