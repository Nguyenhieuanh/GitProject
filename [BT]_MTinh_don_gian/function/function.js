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
}
function toTal(obj) {
    iscalculator = true;
    if (obj === '=') result.value = eval((result.value));
}