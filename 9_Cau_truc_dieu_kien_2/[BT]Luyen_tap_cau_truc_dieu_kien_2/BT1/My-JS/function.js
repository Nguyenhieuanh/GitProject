function conVert() {
    let inPut = document.getElementById('input');
    let outPut = document.getElementById('output');
    let select_1 = document.getElementById('select1').value;
    let select_2 = document.getElementById('select2').value;
    let inPut1 = parseFloat(inPut.value);
    if (select_1 === select_2) {
        outPut.value = inPut1;
    } else if (select_1 === 'C' && select_2 === 'F') {
        outPut.value = inPut1 * 9 / 5 + 32;
    } else {
        outPut.value = (inPut1 - 32) * 5 / 9;
    }
    console.log(select_1);
    console.log(select_2);
}