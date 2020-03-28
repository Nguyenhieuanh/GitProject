function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += 20;
        console.log('ok: ' + this.left);
    };

    this.moveDown = function () {
        this.top += 20;
    };
    this.moveLeft = function () {
        this.left -= 20;
        console.log(this.left);
    };
    this.moveUP = function () {
        this.top -= 20;
    }

}

var hero = new Hero('doraemon.jpg', 20, 30, 150);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top == 0) {
        hero.moveRight();
    } else if (hero.top < window.innerHeight - hero.size && hero.left > window.innerHeight - hero.size) {
        hero.moveDown();
    } else if (hero.left > 0 && hero.top > window.innerHeight - hero.size) {
        hero.moveLeft();
    } else if (hero.top > 0) {
        hero.moveUP()
    };
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 30)
}

start();