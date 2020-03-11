function doc1So(n)//Đọc số có 1 chữ
{
    switch (n) {
        case 0 :
            return "Không";
        case 1 :
            return "Một";
        case 2 :
            return "Hai";
        case 3 :
            return "Ba";
        case 4 :
            return "Bốn";
        case 5 :
            return "Năm";
        case 6 :
            return "Sáu";
        case 7 :
            return "Bảy";
        case 8 :
            return "Tám";
        case 9 :
            return "Chín";
        default:
            return " không biết";
    }
}

function doc9So(n) {
    let tram_trieu = Math.floor(n / 100000000);
    let chuc_trieu = (Math.floor(n / 10000000))%10;
    let trieu = (Math.floor(n / 1000000))%10;
    let tram_nghin = (Math.floor(n / 100000))%10;
    let chuc_nghin = (Math.floor(n / 10000))%10;
    let nghin = (Math.floor(n / 1000))%10;
    let tram = (Math.floor(n / 100))%10;
    let chuc = (Math.floor(n / 10)) % 10;
    let donVi = n % 10;
    let str = "";
    str += doc1So(tram_trieu) + " trăm";
    if (n % 100000000 == 0) {
        return str + " triệu";
    }
    if (chuc_trieu == 0) {
        str += "lẻ";
        str += doc1So(trieu) + " triệu";
        str += doc1So(tram_nghin) + " trăm ";
        str += doc1So(chuc_nghin) + " chục ";
        str += doc1So(nghin) + " nghìn";
        str += doc1So(tram) + " trăm";
        str += doc1So(chuc) + " mươi ";
        str += doc1So(donVi);
        return str;
    } else if (trieu == 0) {
        str += doc1So(chuc_trieu) + " mươi triệu";
        str += "";
        str += doc1So(tram_nghin) + " trăm ";
        str += doc1So(chuc_nghin) + " mươi ";
        str += doc1So(nghin) + " nghìn";
        str += doc1So(tram) + " trăm";
        str += doc1So(chuc) + " mươi ";
        str += doc1So(donVi);
        return str;
    } else if (tram_nghin == 0) {
        str += doc1So(chuc_trieu) + " mươi";
        str += doc1So(trieu) + " triệu";
        str += doc1So(tram_nghin) + "trăm";
        str += doc1So(chuc_nghin) + " mươi";
        str += doc1So(nghin) + " nghìn";
        str += doc1So(tram) + " trăm";
        str += doc1So(chuc) + " mươi ";
        str += doc1So(donVi);
        return str;
    } else if (chuc_nghin == 0) {
        str += doc1So(chuc_trieu) + " mươi ";
        str += doc1So(trieu) + " triệu";
        str += doc1So(tram_nghin) + " trăm";
        str += "lẻ";
        str += doc1So(nghin) + " nghìn";
        str += doc1So(tram) + " trăm";
        str += doc1So(chuc) + " mươi ";
        str += doc1So(donVi);
        return str;
    } else if (nghin == 0) {
        str += doc1So(chuc_trieu) + " mươi ";
        str += doc1So(trieu) + " triệu ";
        str += doc1So(tram_nghin) + " trăm ";
        str += doc1So(chuc_nghin) + " mươi ";
        str += " nghìn ";
        str += doc1So(tram) + " trăm ";
        str += doc1So(chuc) + " mươi ";
        str += doc1So(donVi);
        return str;
    } else if (tram == 0) {
        str += doc1So(chuc_trieu) + " mươi ";
        str += doc1So(trieu) + " triệu ";
        str += doc1So(tram_nghin) + " trăm ";
        str += doc1So(chuc_nghin) + " mươi ";
        str += doc1So(nghin) + " nghìn";
        str += doc1So(tram) + " trăm ";
        str += doc1So(chuc) + " mươi ";
        str += doc1So(donVi);
        return str;
    } else if (chuc == 0) {
        str += doc1So(chuc_trieu) + " mươi ";
        str += doc1So(trieu) + " triệu ";
        str += doc1So(tram_nghin) + " trăm ";
        str += doc1So(chuc_nghin) + " mươi ";
        str += doc1So(nghin) + " nghìn ";
        str += doc1So(tram) + " trăm ";
        str += " lẻ";
        str += doc1So(donVi);
        return str;
    } else if (donVi == 0) {
        str += doc1So(chuc_trieu) + " mươi";
        str += doc1So(trieu) + " triệu";
        str += doc1So(tram_nghin) + " trăm ";
        str += doc1So(chuc_nghin) + " mươi ";
        str += doc1So(nghin) + " nghìn";
        str += doc1So(tram) + " trăm";
        str += doc1So(chuc) + " mươi ";
        return str;
    } else {
        str += doc1So(chuc_trieu) + " mươi ";
        str += doc1So(trieu) + " triệu";
        str += doc1So(tram_nghin) + " trăm ";
        str += doc1So(chuc_nghin) + " mươi ";
        str += doc1So(nghin) + " nghìn ";
        str += doc1So(tram) + " trăm ";
        str += doc1So(chuc) + " mươi ";
        str += doc1So(donVi);
        return str;
    }
}

function docSo() {
    let n;
    n = prompt("Nhập một số có 9 chữ số");
    n = parseInt(n);
    alert(doc9So(n));
}