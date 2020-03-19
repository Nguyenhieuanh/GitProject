let isMale = true;

let apple = function () {
    this.weight = 10;

    this.isEmpty = function () {
        if (this.weight === 0)
            return true;
    };

    this.decrease = function () {
        if (this.weight > 0)
            this.weight--;
    };

    this.getWeight = function () {
        return this.weight;
    }
};

let human = function (name, weight, gender) {
    this.name = name;
    this.weight = weight;
    this.gender = gender;

    this.isMale = function () {
        if (this.gender !== "male") {
            return false;
        } else {
            return true;
        }
    };

    this.setGender = function () {
        return this.gender;
    };

    this.checkApple = function (apple) {
        if (apple.weight > 0)
            return true;
    };

    this.eat = function (apple) {
        if (this.checkApple(apple)) {
            this.weight++;
            apple.decrease();
            apple.getWeight();
            console.log(apple.weight);
        }
    };

    this.say = function (speak) {
        return speak;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.setWeight = function (weight) {
        this.weight = weight;
    };

    this.getName = function (human) {
        return human.name;
    };

    this.getWeight = function (human) {
        return human.weight;
    };
};

let anApple = new apple();

let adam = new human("Adam", 70)
let eva = new human("Eva", 45);
adam.isMale();
eva.setGender("Female");
let said = document.getElementById('adamsaid');
function eatApple() {
    eva.eat(anApple);
    if (eva.weight > 50)
        said.innerHTML += adam.say('Adam said: Mày ăn hơn tao rồi đấy') + '<br>';
    if (anApple.isEmpty()) {
        alert("hết táo");
        said.innerHTML += adam.say('Adam said: Mày ăn tham thế');
    }
}

function story() {
    said.innerHTML += "Adam thought: Con đó tên là " + adam.getName(eva) + " nặng " + adam.getWeight(eva) + " kg" + "<br>";
    said.innerHTML += "Eva thought: Thằng đó tên là " + eva.getName(adam) + " nặng " + eva.getWeight(adam) + " kg" + "<br>";
}
story();



