function solve() {
    let no1 = parseFloat(document.getElementById('inputa').value);
    let no2 = parseFloat(document.getElementById('inputb').value);
    let no3 = parseFloat(document.getElementById('inputc').value);
    let result = document.getElementById('Result');

    if (no1 === 0 && no2 === 0 && no3 === 0) {
        result.innerHTML = "PT vô số nghiệm";
    }

    if (no1 === 0 && no2 === 0 && no3 !== 0) {
        result.innerHTML = "PT vô nghiệm";
    }

    if (no1 === 0 && no2 !== 0) {
        result.innerText = "PT có nghiệm x = " + (-no3 / no2);
    }

    if (no1 !== 0) {
        let delta = no2 ** 2 - 4 * no1 * no3;
        let sqrtdelta = Math.sqrt(delta);
        if (delta < 0) {
            result.innerHTML = 'PT vô nghiệm';
        } else
            result.innerHTML = `PT có nghiệm x<sub>1</sub> = ` + ((-no2 + sqrtdelta) / 2 * no1) + " và " + `x<sub>2</sub> = ` + ((-no2 - sqrtdelta) / 2 * no1);
    }
}