const vowelConsonents = (arr) => {
    let vowels = 0, consonents = 0;
    let vowelsArr = ["a","e","i","o","u"];
    for (var i in arr) {
        if (vowelsArr.includes(arr[i])) {
            vowels += 1;
        } else {
            consonents += 1;
        }
    }
    return console.log("Vowels count: "+vowels +" \nConsonents count: "+consonents);
}

arr = ["a","b","c","d","e","h","i"];
vowelConsonents(arr);