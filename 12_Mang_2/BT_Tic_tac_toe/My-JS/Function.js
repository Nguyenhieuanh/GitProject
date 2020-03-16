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
            arr[i][j] = '*';
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
                cell.innerHTML = str2.fontcolor("red") ;
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
    let i = 1;
    let j = 1;
    let count = 1;
    while ((y + i) < cols && arr[x][y + i] === cell.innerHTML) {
        i++;
        count++;
    }

    while (y - j >= 0 && arr[x][y - j] === cell.innerHTML) {
        j++;
        count++;
    }

    gameOver(count);

    while (x + i < rows && arr[x + i][y] === cell.innerHTML) {
        i++;
        count++;
    }

    while (x - j >= 0 && arr[x - j][y] === cell.innerHTML) {
        j++;
        count++;
    }

    gameOver(count);

    while (x + i < rows && y + j < cols && arr[x + i][y + j] === cell.innerHTML) {
        i++;
        j++;
        count++;
    }

    gameOver(count);

    while (x - i >= 0 && y - j >= 0 && arr[x - i][y - j] === cell.innerHTML) {
        i++;
        j++;
        count++;
    }

    gameOver(count);

    while (x + i < rows && y - j >= 0 && arr[x + i][y - j] === cell.innerHTML) {
        i++;
        j++;
        count++;
    }

    gameOver(count);

    while (x - i >= 0 && y + j < cols && arr[x - i][y + j] === cell.innerHTML) {
        i++;
        j++;
        count++;
    }
    gameOver(count);

    return true;
}

function gameOver(count) {
    if (count === 5) {
        alert("Game over");
        isGameOver = true;
    }
}

drawGameBoard();