let count = 0;

function checkbtn(value) {
    count++;
    let strID = "cfg_" + value;
    if(count > 2) {
        document.getElementById(strID).checked = false;
        count--;
    }
}