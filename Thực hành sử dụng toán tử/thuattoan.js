function Mul_ti() {
    let InputWidth = document.getElementById('chieu_rong').value,
        InputHeight = document.getElementById('chieu_dai').value,
        wid_th = parseFloat(InputWidth),
        hei_ght = parseFloat(InputHeight);
    document.getElementById('dien_tich').value = wid_th * hei_ght;
}