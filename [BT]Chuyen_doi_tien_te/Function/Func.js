const A = 23787
function conVert() {
    let a = document.getElementById('money'),
        b = document.getElementById('s1').value,
        b1 = document.getElementById('vn1').value,
        c = document.getElementById('s2').value;
    a = parseFloat(a.value)
    if (b == c) {
        document.getElementById('kq').value = a;
    } else {
        if (b == b1) {
            document.getElementById('kq').value = a / A;
        } else {
            document.getElementById('kq').value = a * A;
        }
    }
}
