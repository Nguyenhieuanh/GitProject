function clkbtn() {
    let height = parseFloat(document.getElementById('inputHeight').value),
        weight = parseFloat(document.getElementById('inputWeight').value),
        bmi = document.getElementById('BMI');
    bmi.value = weight / (height ** 2)
    if (bmi.value < 18.5) {
        document.getElementById('conclude').innerHTML = "Underweight";
        document.getElementById('conclude').style.display = "block";
    } else if (18.5 <= bmi.value && bmi.value < 25) {
        document.getElementById('conclude').innerHTML = "Normal";
        document.getElementById('conclude').style.display = "block";
    } else if (25 <= bmi.value && bmi.value < 30) {
        document.getElementById('conclude').innerHTML = "Overweight";
        document.getElementById('conclude').style.display = "block";
    } else if (30 < bmi.value) {
        document.getElementById('conclude').innerHTML = "Obese";
        document.getElementById('conclude').style.display = "block";
    }
}