function cal() {
    let money = parseFloat(document.getElementById('input').value);
    let tax = document.getElementById('output');
    if (money <= 5000) {
        tax.value = money * 0.05;
    } else if (money <= 10000) {
        tax.value = money * 0.1 - 0.75;

    } else if (money <= 18000) {
        tax.value = money * 0.15 - 0.25;

    } else if (money <= 32000) {
        tax.value = money * 0.2 - 1.65;

    } else if (money <= 52000) {
        tax.value = money * 0.25 - 3.25;

    } else if (money <= 80000) {
        tax.value = money * 0.3 - 5.85;
    } else
        tax.value = money * 0.35 - 9.85;
}