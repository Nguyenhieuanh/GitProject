let switchButton = function (lamp) {
    this.status = true;
    this.connectstatus = false;
    this.lamp = lamp;

    this.button = function () {
        return this.status === !this.status;
    };

    this.connectToLamp = function (obj) {
        this.lamp = obj;
        this.connectstatus = true;
    };

    this.switchOn = function (lamp) {
        if (!this.status && this.connectstatus)
            lamp.turnOn();
    };

    this.switchOff = function (lamp) {
        if (this.status && this.connectstatus)
            lamp.turnOff();
    };
}

let lamp = function (type) {
    this.status = true;
    this.type = type;

    this.turnOn = function () {
            console.log('light');
            this.status = true;
    };

    this.turnOff = function () {
        this.status = false;
        console.log('no light');
    }
};

let switcher = new switchButton("ElectricLamp");
let lamp1 = new lamp("ElectricLamp");

switcher.connectToLamp("ElectricLamp");
switcher.switchOn();
alert(lamp1.status);
switcher.switchOff();
alert(lamp1.status);