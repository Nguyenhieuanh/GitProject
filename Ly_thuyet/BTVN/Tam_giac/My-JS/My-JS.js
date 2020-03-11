function Tinh() {
    let dienTich = document.getElementById('dientich'),
        chuVi = document.getElementById('chuvi'),
        a = document.getElementById('canh1').value,
        b = document.getElementById('canh2').value,
        c = document.getElementById('canh3').value;
    a = parseFloat(a)
    b = parseFloat(b)
    c = parseFloat(c)
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        if ((a == b) && (b == c)) {
            alert('Tam giác đều')
        } else if ((a == b) || (b == c) || (c == a)) {
            alert('Tam giác cân')
        } else if ((a ** 2 + b ** 2 == c ** 2) || (b ** 2 + c ** 2 == a ** 2) || (c ** 2 + a ** 2 == b ** 2)) {
            alert('Tam giác vuông')
        } else {
            (alert('Là tam giác'))
        }
        chuVi.value = a + b + c
        dienTich.value = (Math.sqrt(((a ** 2 + b ** 2 + c ** 2)) ** 2 - 2 * (a ** 4 + b ** 4 + c ** 4))) / 4
    } else {
        alert('đây không phải tam giác')
    }
}