let input = document.getElementById('input');
let meter;
let feet;

function footToMeter() {
meter = 0.305 * parseInt(input.value);
document.getElementById('result').innerHTML = "Resutl: " + meter + " m";
}

function meterToFoot() {
    feet = 3.279 * parseInt(input.value);
    document.getElementById('result').innerHTML = "Resutl: " + feet + " ft";
}