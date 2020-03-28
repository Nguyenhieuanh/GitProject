let rat = function (name, weight, speed) {
  this.name = name;
  this.weight = weight;
  this.speed = speed;
  this.status = true;

  this.squeak = function (squeak) {
      console.log(squeak);
  };
};

let cat = function (name, weight, maxSpeed) {
    this.name = name;
    this.weight = weight;
    this.maxSpeed = maxSpeed;

    this.miaow = function (miaow) {
        console.log(miaow);
    };

    this.catch = function (mouse) {
        if (mouse.speed < this.maxSpeed) {
            console.log(this.name + "catched" + mouse.name);
        } else
            console.log(this.name + " can't catch " + mouse.name);
    };

    this.eat = function (mouse) {
        if (mouse.status) {
            this.weight += mouse.weight;
            console.log(this.weight);
            mouse.weight = 0;
            mouse.status = false;
        }
    }
};

let mouse_1 = new rat('Jerry', 10, 10);
let mouse_2 = new rat('Mickey', 20, 30);
let cat1 = new cat('Tom', 20, 30);

cat1.catch(mouse_1);
mouse_1.squeak('sqeak!!!');
mouse_2.squeak('Hello!')
cat1.miaow('miaow');
cat1.eat(mouse_1);
cat1.catch(mouse_2);