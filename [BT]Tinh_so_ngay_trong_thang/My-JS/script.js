function daysOfmonth(){
    let month = prompt("Nhập tháng:");
    month = Number.parseInt(month);
    let nam = prompt("Nhập năm:")
    nam = Number.parseInt(nam);

    alert("Tháng " + thang + "/" + nam + " có " + tinhNgay(thang, nam) + " ngày.");
}

function tinhNgay(thang, nam){
    switch(thang){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: return 31;
        case 4:
        case 6:
        case 9:
        case 11: return 30;
        case 2: if(checkyear(nam))
            return 29;
        else
            return 28;
        default: return "Không phải là tháng hơp lệ";
    }


}
function checkyear(nam)
{
    return (nam % 400 == 0) || (nam % 4 == 0  && nam % 100 != 0);
}


