const reverseString = (arr) => {
    let reverseArr = []
    for (var i=arr.length-1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return console.log(reverseArr)
}

arr = ["s","t","r","i","n","g"];
reverseString(arr);