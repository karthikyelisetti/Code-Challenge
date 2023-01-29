// Remove duplicate array elements
function removeDuplicates() {
    let valArr = document.getElementById("input-txt").value;
    let regex = /\(|\)|\[|\]|\{|\}/g; // regular expression to replace any brackets in the input.
    let arrString = valArr.replace(regex, "");
    let arr = arrString.split(",").map(Number); // spltting the string and mapping it to collection of elements.
    let newArr = [];
    for (var i in arr) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return document.getElementById("output-txt").value = "[ "+newArr+" ]" +" Freuency: "+counter;
}

// arr.filter((i, index) => arr.indexOf(i) === index)

// Counting prime elements in a array
function arrayPrime() {
    let valArr = document.getElementById("input-txt").value;
    let regex = /\(|\)|\[|\]|\{|\}/g; // regular expression to replace any brackets in the input.
    let arrString = valArr.replace(regex, "");
    let arr = arrString.split(",").map(Number); // spltting the string and mapping it to collection of elements.
    let counter = 0;
    for (var i in arr) {
        if (!arr[i]%2 == 0) {
            counter += 1;
        }
    }
    return document.getElementById("output-txt").value = counter;
}

arr.forEach((element) => {
    if (max < element) { max = element};
    if (min > element) { min = element};
});