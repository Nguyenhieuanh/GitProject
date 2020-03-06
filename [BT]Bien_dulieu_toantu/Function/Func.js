let a, b, c; // giá trị 3 điểm lý hoá sinh
a = document.getElementById('Phys');
b = document.getElementById('Chem');
c = document.getElementById('Biol');

function Sum() {
    document.getElementById('sum').value = parseFloat(a.value) + parseFloat(b.value) + parseFloat(c.value);
} // tổng điểm 3 môn

function Average() {
    document.getElementById('avg').value = (parseFloat(a.value) + parseFloat(b.value) + parseFloat(c.value)) / 3
} // điểm TB 3 môn

let doC = document.getElementById('c1');

function Convert() {
    document.getElementById('f1').value = parseFloat(doC.value)*9/5 + 32;
} // chuyển độ C sang độ F

const PI=3.14159
let r = document.getElementById('bk');

function chuVi() {
    document.getElementById('cv').value = parseFloat(r.value)*2*PI;
} // chu vi hình tròn

function dienTich() {
    document.getElementById('dt').value = parseFloat(r.value)**2*PI;
} // diện tích hình tròn