let arr = [];

function makeString(length) {
    let txt = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        txt += char.charAt(Math.floor(Math.random() * char.length))
    }
    return txt;
}

function init() {
    let numberOfelement = +prompt("Nhập vào số phần tử của mảng:");
    for (let j = 1; j <= numberOfelement; j++) {
        arr.push(makeString(1));
    }
    document.write('<div>' + arr + '</div>');
}

function check() {
    let characterCheck = prompt("Nhập vào ký tự cần đếm:");
    let count = 0;
    let index = arr.indexOf(characterCheck);
    if (index !== -1) {
        for (let i = 0; i < arr.length; i++) {
            if (characterCheck === arr[i]) {
                count++;
            }
        }
    } else
        alert(-1);
    alert("Số lần xuất hiện của ký tự " + characterCheck + " là " + count);
}

init();