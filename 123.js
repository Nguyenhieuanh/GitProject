let a = prompt("nhập giá trị a"),
    b = prompt("nhập giá trị b"),
    c = prompt("nhập giá trị c")
if (a > b && b > c) {
    alert(a + 'max')
} else if (b > a && b > c) {
    alert(b + 'max')
} else alert(c + 'max')