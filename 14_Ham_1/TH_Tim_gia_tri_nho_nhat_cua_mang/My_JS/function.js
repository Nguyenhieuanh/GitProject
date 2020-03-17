function minArray(arr) {
    if (arr.length === 0) {
        alert(-1);
    } else {
        let imin = 0;
        let min = arr[imin];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
                imin = i;
            }
        }
        alert(min + " phần tử thứ: " + imin);
    }
}

let arr1 = [3, 5, 1, 8, -3, 7, 8];
minArray(arr1);


let arr2 = [7, 12, 6, 9, 20, 56, 89];
minArray(arr2);


let arr3 = [];
minArray(arr3);


let arr4 = [0, 0, 0, 0, 0, 0];
minArray(arr4);
