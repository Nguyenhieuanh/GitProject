let iscalculator = false;
let result = document.getElementById('result');

function clickbutton(obj) {
    if (iscalculator) {
        result.value = "";
        iscalculator = false;
    }
    result.value += obj;
}

function clearscreen(obj) {
    if (obj === 'C') result.value = '';
    if (obj === '<-') result.value = result.value.substr(0, result.value.length - 1);
    if (obj === 'root') result.value += "**(1/";
}

function output(obj) {
    iscalculator = true;
    if (obj === '=') result.value = eval((result.value));
    if (obj === 'squrt') result.value = Math.sqrt(result.value);
    if (obj === '%') result.value = eval((result.value)) / 100;
    if (obj === 'sin') result.value = Math.sin(result.value * Math.PI / 180);
    if (obj === 'cos') result.value = Math.cos(result.value * Math.PI / 180);
    if (obj === 'tan') result.value = Math.tan(result.value * Math.PI / 180);
}