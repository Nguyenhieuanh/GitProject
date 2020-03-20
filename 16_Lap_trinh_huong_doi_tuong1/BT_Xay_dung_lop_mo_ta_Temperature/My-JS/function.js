let res = document.getElementById('result');

let temperature = function(celCius) {
    this.temP = celCius;

    this.conVertToF = function () {
        return (this.temP * 1.8 + 32);
    };

    this.conVertToK = function () {
        return (this.temP + 273);
    };
};

let temp1 = new temperature(25);
    res.innerHTML = `${temp1.temP} độ C = ${temp1.conVertToF()} độ F = ${temp1.conVertToK()} độ K`;