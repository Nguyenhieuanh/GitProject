function calAcreage() {
    let edge = parseFloat(document.getElementById('input').value);
    let result = document.getElementById('output');
    if (edge < 0) {
        result.innerHTML = `Số đo không hợp lệ, xin mời nhập lại!<br/>(Số đo cạnh cần lớn hơn 0)`;
    } else if (isNaN(edge)) {
        result.innerHTML = `Số đo không hợp lệ, xin mời nhập lại!<br/>(Số đo cạnh cần lớn hơn 0)`;
    } else result.innerHTML = "Diện tích hình vuông cạnh " + edge + " là " + (edge * edge) + `m<sup>2`;
}