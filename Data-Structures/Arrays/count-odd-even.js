const countOddEven = (arr) => {
    let evenCounter = 0, oddCounter = 0;
    for (var i in arr) {
        arr[i]%2 == 0 ? evenCounter += 1 : oddCounter += 1;
    }
    return console.log("Number of odd integers: "+oddCounter+ "\nNumber of even integers: "+evenCounter);
}

let arr = [1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 14];
countOddEven(arr);