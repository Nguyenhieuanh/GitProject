function cal() {
    let number = parseFloat(document.getElementById('input').value);
    let result = document.getElementById('result');
    if (number <= 50) {
        result.innerHTML = "Tổng tiển: " + number * 1678;
    } else if (number <= 100) {
        result.innerHTML = "Tổng tiển: " + (50 * 1678 + (number - 50) * 1734);
    } else if (number <= 200) {
        result.innerHTML = "Tổng tiển: " + (50 * 1678 + 50 * 1734 + (number - 100) * 2014);
    } else if (number <= 300) {
        result.innerHTML = "Tổng tiển: " + (50 * 1678 + 50 * 1734 + 100 * 2014 + (number - 200) * 2536);
    } else if (number <= 400) {
        result.innerHTML = "Tổng tiển: " + (50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (number - 300) * 2834);
    } else
        result.innerHTML = "Tổng tiển: " + (50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (number - 400) * 2927);
}