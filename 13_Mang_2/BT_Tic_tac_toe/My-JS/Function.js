let caro = "<table>";
let arr = [];
let PLAYED = 0;
let cols = +prompt("Nhập số cột:");
let rows = +prompt("Nhập số dòng:");
let isGameOver = false;
let str1 = 'X';
let str2 = 'O';


function drawGameBoard() {
    for (let i = 0; i < rows; i++) {
        caro += '<tr>';
        arr[i] = [];
        for (let j = 0; j < cols; j++) {
            caro += '<td onclick="play(this,' + i + ',' + j + ')">' + '</td>';
        }
        caro += '</tr>';
    }
    document.write(caro);
}

function play(cell, x, y) {
    if (isGameOver) {
        return;
    }

    if (!cell.innerHTML) {
        switch (PLAYED) {
            case 1:
                cell.innerHTML = str1.fontcolor("blue");
                PLAYED = 2;
                arr[x][y] = str1.fontcolor("blue");
                break;
            case 2:
                cell.innerHTML = str2.fontcolor("red");
                PLAYED = 1;
                arr[x][y] = str2.fontcolor("red");
                break;
            default:
                cell.innerHTML = str1.fontcolor("blue");
                PLAYED = 2;
                arr[x][y] = str1.fontcolor("blue");
                break;
        }
    }
    checkwin(cell, x, y);
}

function checkwin(cell, x, y) {
    check_horizontal(cell, x, y);
    check_vertical(cell, x, y);
    check_diagonal1(cell, x, y);
    check_diagonal2(cell, x, y);
}

function check_horizontal(cell, x, y) {
    let i = 1;
    let count = 1;
    while ((y + i) < cols && arr[x][y + i] === cell.innerHTML) {
        i++;
        count++;
        console.log(count);
    }

    let j = 1;
    while (y - j >= 0 && arr[x][y - j] === cell.innerHTML) {
        j++;
        count++;
        console.log(count);
    }
    gameOver(count);
}

function check_vertical(cell, x, y) {
    let i = 1;
    let j = 1;
    let count = 1;
    while (x + i < rows && arr[x + i][y] === cell.innerHTML) {
        i++;
        count++;
        console.log(count);
    }
    while (x - j >= 0 && arr[x - j][y] === cell.innerHTML) {
        j++;
        count++;
        console.log(count);
    }

    gameOver(count);
}

function check_diagonal1(cell, x, y) {
    let i = 1;
    let j = 1;
    let count = 1;
    while ((x + i) < rows && (y + i) < cols && arr[x + i][y + i] === cell.innerHTML) {
        i++;
        count++;
        console.log(count);
    }

    while ((x - j) >= 0 && (y - j) >= 0 && arr[x - j][y - j] === cell.innerHTML) {
        j++;
        count++;
        console.log(count);
    }
    gameOver(count);
}

function check_diagonal2(cell, x, y) {
    let i = 1;
    let j = 1;
    let count = 1;
    while (x + i < rows && y - i >= 0 && arr[x + i][y - i] === cell.innerHTML) {
        i++;
        count++;
        console.log(count);
    }

    while (x - j >= 0 && y + j < cols && arr[x - j][y + j] === cell.innerHTML) {
        j++;
        count++;
        console.log(count);
    }
    gameOver(count);
}


function gameOver(count) {
    if (count > 4) {
        alert("Game over");
        isGameOver = true;
    }
}

drawGameBoard();
