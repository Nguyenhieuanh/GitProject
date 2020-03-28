function cal() {
    let money = parseFloat(document.getElementById('money').value);
    let percent = parseFloat(document.getElementById('interest_rate').value) / 100;
    let month = parseFloat(document.getElementById('months').value);
    let total = document.getElementById('total_interest');
    total.value = ((money * ((percent + 1) ** month)) - money).toFixed(2);
}