let switchButton = function (lamp) {
    this.status = true;
    this.connectstatus = false;
    this.lamp = lamp;

    this.connectToLamp = function (obj) {
        this.lamp = obj;
        this.connectstatus = true;
    };

    this.switchOn = function (lamp) {
        if (this.status && this.connectstatus)
            lamp.turnOn();
    };

    this.switchOff = function (lamp) {
        if (this.status && this.connectstatus)
            lamp.turnOff();
    };
};

let lamp = function () {
    this.turnOn = function () {
        console.log('light');
    };

    this.turnOff = function () {
        console.log('no light');
    }
};

let switcher = new switchButton("electricLamp");
let lamp1 = new lamp("electricLamp");

switcher.connectToLamp(lamp1);
switcher.switchOn(lamp1);
switcher.switchOff(lamp1);
switcher.switchOn(lamp1);
switcher.switchOff(lamp1);
switcher.switchOn(lamp1);
switcher.switchOff(lamp1);
switcher.switchOn(lamp1);
switcher.switchOff(lamp1);
switcher.switchOn(lamp1);
switcher.switchOff(lamp1);
switcher.switchOn(lamp1);
switcher.switchOff(lamp1);
switcher.switchOn(lamp1);
switcher.switchOff(lamp1);
switcher.switchOn(lamp1);
switcher.switchOff(lamp1);
switcher.switchOn(lamp1);
switcher.switchOff(lamp1);





