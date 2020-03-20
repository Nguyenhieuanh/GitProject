let mobile = function (name) {
    this.name = name;
    this.battery = 100;
    this.status = true;
    this.msg = '';
    this.inbox = ["Inbox:"];
    this.sent = ["Sent:"];

    this.charge = function () {
        if (this.battery < 20) {
            alert("Low battery")
            this.battery += 2;
        }
    };

    this.decreaseBattery = function () {
        if (this.battery > 0) {
            this.battery--;
        }
    };

    this.getBatteryInfo = function () {
        return this.battery;
    };

    this.getStatus = function () {
        return this.status;
    };

    //soạn tin nhắn
    this.texting = function (value) {
        if (this.getStatus()) {
            this.decreaseBattery();
            this.getBatteryInfo();
            this.msg = value;
        } else
            alert(this.name + " Turn on your phone");
    }

//gửi tin nhắn
    this.sendMessage = function (mobile) {
        if (this.getStatus()) {
            this.sent.push(this.msg);
            alert(this.name + 'Sending massage');
            mobile.receiveMassage(this.name, this.msg);
            this.decreaseBattery();
            this.getBatteryInfo()
        } else
            alert(this.name + " Turn on your phone");

    };

    //nhận tin nhắn
    this.receiveMassage = function (name, msg) {
        if (this.getStatus()) {
            alert(this.name + "You have a massage from:" + name);
            this.inbox.push(msg);
            this.decreaseBattery();
            this.getBatteryInfo();
        } else
            alert(this.name + " Turn on your phone");
    };

    this.on_off = function () {
        this.status = !this.status;
    }
};

let mobile1 = new mobile('Iphone');
let mobile2 = new mobile('SamSung');

function sendMsg(m1, m2) {
    m1.sendMessage(m2);
    document.getElementById('Iphone-inbox').innerHTML = mobile1.inbox;
    document.getElementById('Iphone-sent').innerHTML = mobile1.sent;
    document.getElementById('SamSung-inbox').innerHTML = mobile2.inbox;
    document.getElementById('SamSung-sent').innerHTML = mobile2.sent;
    document.getElementById('Iphone-texting').value = "";
    document.getElementById('SamSung-texting').value = "";
    document.getElementById('Iphone-energy').innerHTML = mobile1.getBatteryInfo() + "%";
    document.getElementById('SamSung-energy').innerHTML = mobile2.getBatteryInfo() + "%";
}
