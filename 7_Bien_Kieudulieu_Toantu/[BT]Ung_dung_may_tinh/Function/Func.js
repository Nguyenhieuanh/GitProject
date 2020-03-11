function Calculator(op) {
    let a = document.getElementById('no1');
    a = parseFloat(a.value);
    let b = document.getElementById('no2');
    b = parseFloat(b.value);
    if (op == 'cong') {
        document.getElementById('rs').value = a + b;
    } else {
        if (op == 'tru') {
            document.getElementById('rs').value = a - b;
        } else {
            if (op == 'nhan') {
                document.getElementById('rs').value = a * b;
            } else {
                document.getElementById('rs').value = a / b;
            }
        }
    }
}