function clickbutton(obj) {
    let result = document.getElementById('result');
    result.value += obj;
}
function clearscreen(obj) {
    let result = document.getElementById('result');
    if (obj === 'C') result.value = '';
}
function back_space(obj) {
    let result = document.getElementById('result');
    if (obj === '<-') result.value = result.value.substr(0, result.value.length - 1);
}
function toTal(obj) {
    let result = document.getElementById('result');
    if (obj === '=') result.value = eval((result.value));
}