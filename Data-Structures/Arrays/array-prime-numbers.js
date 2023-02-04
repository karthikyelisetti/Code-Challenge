// Counting prime elements in a array
function arrayPrime(arr) {
    let counter = 0;
    for (var i in arr) {
        if (arr[i]%2 == 1 && arr[i] != 1) {
            counter += 1;
        }
    }
    return console.log(counter);
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 20]
arrayPrime(arr);