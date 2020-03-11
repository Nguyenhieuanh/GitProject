function clkbtn() {
    alert('<3');
}

function pstRandom() {
    let x = (Math.random()) * 400;
    let y = (Math.random()) * 500;
    document.getElementById('no').style.left = x + 'px';
    document.getElementById('no').style.top = y + 'px';
    console.log('no');
}