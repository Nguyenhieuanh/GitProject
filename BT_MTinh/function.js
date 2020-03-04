function
clickbutton(obj) {
    if (obj === '1') {
        document.getElementById('result').value += 1;
    } else if (obj === '2') {
        document.getElementById('result').value += 2;
    } else if (obj === '3') {
        document.getElementById('result').value += 3;
    } else if (obj === '4') {
        document.getElementById('result').value += 4;
    } else if (obj === '5') {
        document.getElementById('result').value += 5;
    } else if (obj === '6') {
        document.getElementById('result').value += 6;
    } else if (obj === '7') {
        document.getElementById('result').value += 7;
    } else if (obj === '8') {
        document.getElementById('result').value += 8;
    } else if (obj === '9') {
        document.getElementById('result').value += 9;
    } else if (obj === '0') {
        document.getElementById('result').value += 0;
    } else if (obj === '+') {
        document.getElementById('result').value += '+';
    } else if (obj === '-') {
        document.getElementById('result').value += '-';
    } else if (obj === '*') {
        document.getElementById('result').value += '*';
    } else if (obj === '/') {
        document.getElementById('result').value += '/';
    } else if (obj === 'C') {
        document.getElementById('result').value = '';
    } else if (obj === '<-') {
        document.getElementById('result').value = document.getElementById('result').value.substr(0, document.getElementById('result').value.length - 1);
    } else {
        document.getElementById('result').value = eval((document.getElementById('result').value))
    }
}
