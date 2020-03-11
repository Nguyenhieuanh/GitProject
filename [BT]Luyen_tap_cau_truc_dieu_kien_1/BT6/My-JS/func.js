/*Tính hoa hồng
 * Từ 0 đến 200.000 => 3%
 * Từ 200.000 đến 500.000 => 5%
 * Trên 500.000 => 10% -->
*/
function check() {
    let money = parseFloat(document.getElementById('receipt').value),
        commission = document.getElementById('commission');
    if (money > 500000) {
        commission.value = 0.1 * (money - 500000) + 0.05 * (500000 - 200000) + 0.03 * (200000);
    } else if (money <= 200000) {
        commission.value = 0.03 * money;
    } else
        commission.value = 0.05 * (money - 200000) + 0.03 * (200000);
}
