function solve() {
    let a = parseFloat(document.getElementById('inputa').value);
    let b = parseFloat(document.getElementById('inputb').value);
    let result = document.getElementById('Result');
    if (a === 0 && b === 0) {
        result.innerHTML = "PT vô số nghiệm";
    } else if (a === 0 && b !== 0) {
        result.innerHTML= "PT vô nghiệm";
    } else result.innerHTML = "PT có nghiệm x = " + (-b / a);
}