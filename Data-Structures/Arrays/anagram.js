const anagram = (str1, str2) => {
    let s1 = str1.split("").sort().join("");
    let s2 = str2.split("").sort().join("");

    return (s1 == s2 ? console.log("The strings are Anagram !") : console.log("Not an Anagram !!!"));
}

let str1 = "silen";
let str2 = "listen";
anagram(str1, str2);
