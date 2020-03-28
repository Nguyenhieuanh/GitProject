
function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.dx = Math.floor(Math.random() * 10);
    this.dy = Math.floor(Math.random() * 14);
    this.radius = radius;
    this.update = function () {
        if (this.x + this.radius >= document.getElementById('myCanvas').offsetWidth) {
            this.dx = -this.dx;
        }
        if (this.x - this.radius <= 0) {
            this.dx = - this.dx;
        }
        if (this.y + this.radius >= document.getElementById('myCanvas').offsetHeight) {
            this.dy = -this.dy;
        }
        if (this.y - this.radius <= 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function createCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle = new Circle(x, y, radius);
    setInterval(circle.update,100);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultipleCircle() {
    for (var i = 0; i < 30; i++) {
        createCircle();
    }
    requestAnimationFrame(createCircle);
}

createMultipleCircle();