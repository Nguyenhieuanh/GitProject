function calTritangle() {
    let edge1 = parseFloat(document.getElementById('edge1').value);
    let edge2 = parseFloat(document.getElementById('edge2').value);
    let result = document.getElementById('result');

    if (edge1 < 0 || edge2 < 0 || isNaN(edge1) || isNaN(edge2)) {
        result.innerHTML = "Số đo không hợp lệ"
    } else result.innerHTML = "Diện tích hình tam giác = " + ((edge1 * edge2)/2);
}