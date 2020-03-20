let res = document.getElementById('result');

let rectAngle = function (width, height) {
    this.width = width;
    this.height = height;

    this.setWidth = function () {
        this.width = width;
    };

    this.setHeight = function () {
        this.height = height;
    }
    this.getWidth = function () {
        return this.width;
    };

    this.getHeight = function () {
        return this.height;
    };

    this.getPerimeter = function () {
        return (this.height + this.width) * 2;
    };

    this.getArea = function () {
        return this.height * this.width;
    };

    this.draw = function () {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(50, 100, this.width, this.height);
    }
};

let rectangle = new rectAngle(200, 100);
let width_ = rectangle.getWidth();
let height_ = rectangle.getHeight();
let perimeter_ = rectangle.getPerimeter();
let area_ = rectangle.getArea();
res.innerHTML = (" Chu vi là: " + perimeter_ + ' Diện tích là: ' + area_);
rectangle.draw();
