function conVert() {
    let input = parseFloat(document.getElementById('input').value);
    let output = document.getElementById('output');
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    if (select1 === select2) {
        output.value = input;
    } else if (select1 === 'ft' && select2 === 'm') {
        output.value = input / 3.2808;
    } else output.value = input * 3.2808;
}