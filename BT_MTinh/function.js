function
clickbutton(obj) { 
    let output = document.getElementById('result');
    if (obj === '1') {
        output.value += 1;
    } else if (obj === '2') {
        output.value += 2;
    } else if (obj === '3') {
        output.value += 3;
    } else if (obj === '4') {
        output.value += 4;
    } else if (obj === '5') {
        output.value += 5;
    } else if (obj === '6') {
        output.value += 6;
    } else if (obj === '7') {
        output.value += 7;
    } else if (obj === '8') {
        output.value += 8;
    } else if (obj === '9') {
        output.value += 9;
    } else if (obj === '0') {
        output.value += 0;
    } else if (obj === '+') {
        output.value += '+';
    } else if (obj === '-') {
        output.value += '-';
    } else if (obj === '*') {
        output.value += '*';
    } else if (obj === '/') {
        output.value += '/';
    } else if (obj === 'C') {
        output.value = '';
    } else if (obj === '<-') {
        output.value = output.value.substr(0, output.value.length - 1);
    } else {
        output.value = eval((output.value))
    }
}
