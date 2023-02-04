// Remove duplicate array elements
function removeDuplicates(arr) {
    let newArr = [];
    for (var i in arr) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
        // arr.filter((i, index) => arr.indexOf(i) === index);
    }
    return console.log(newArr);    
    // return console.log(arr); 
}

arr = [1, 3, 3, 5, 6, 7, 9, 10, 11, 11, 10]
removeDuplicates(arr);