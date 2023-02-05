const rotateArray = (arr, val) => {
    let  rotateArr = [], counter = 0;
    for (var i = val; i < arr.length; i++) {
        rotateArr.push(arr[i]);
    }
    while (counter < val) {
        rotateArr.push(arr[counter]);
        counter += 1;
    }

    return console.log(rotateArr);
}

let arr = [1, 2, 3, 4, 5, 6];
let val = 2;
rotateArray(arr, val);