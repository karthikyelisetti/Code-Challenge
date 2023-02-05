const thirdLargest = (arr) => {
    let num1 = arr[0], num2 = 0, num3 = 0;
    for (var i in arr) {
        if (arr[i] > num1) {
            num3 = num2;
            num2 = num1;
            num1 = arr[i];
        } else if (arr[i] > num2) {
            num3 = num2;
            num2 = arr[i];
        } else if (arr [i] > num3) {
            num3 = arr[i];
        }
    }
    return console.log("The third largest element is: "+num3);
}

let arr = [21, 4, 5, 12, 45, 65, 23]
thirdLargest(arr);