//Convert given arrays of Kilometers to array of miles
var kilometers = [20, 30, 40, 50, 60]
var miles  = [];
for (m in kilometers) {
    var mile = kilometers[m] / 1.6;
    miles.push(mile);
}
console.log(miles);