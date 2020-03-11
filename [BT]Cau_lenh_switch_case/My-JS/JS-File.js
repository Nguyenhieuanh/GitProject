function calDays() {
    let month = parseInt(document.getElementById('month').value);
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('conclude').innerHTML = 'Tháng có 31 ngày';
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('conclude').innerHTML = 'Tháng có 30 ngày';
            break;
        case 2:
            document.getElementById('conclude').innerHTML = 'Tháng có 28 hoặc 29 ngày';
        default:
            document.getElementById('conclude').innerHTML = 'Tháng nhập không chính xác'
    }

}