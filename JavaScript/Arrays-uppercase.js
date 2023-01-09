//Create an array where all these elements are stored in uppercase
let strings = ["avengers", "captain america", "ironman", "black panther"];        
var string = [];
for (s in strings) {
    var str = strings[s].toUpperCase();
    string.push(str);
}
console.log(string);