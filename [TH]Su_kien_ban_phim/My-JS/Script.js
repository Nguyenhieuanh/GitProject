function upArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}

function downArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}

function leftArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}

function rightArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';

}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case "Down":
            downArrowPressed()
        case "s":
            downArrowPressed()
            break;
        case "Up":
            upArrowPressed()
        case "w":
            upArrowPressed()
            break;
        case "Left":
            leftArrowPressed()
        case "a":
            leftArrowPressed()
            break;
        case "Right":
            rightArrowPressed()
        case "d":
            rightArrowPressed()
            break;
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);


function docReady() {
    window.addEventListener('keydown', moveSelection);
}
