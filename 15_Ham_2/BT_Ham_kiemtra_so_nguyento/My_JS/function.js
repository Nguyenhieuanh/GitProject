function checkPrime(n) {
    let isPrime = true;
    if (n < 2) {
        isPrime = false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
        }
    } return isPrime;
}

let number = +prompt("Nhập số nguyên bất kỳ:");
alert(checkPrime(number));