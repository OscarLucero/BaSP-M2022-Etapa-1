var w = ["Pelota", "Copa", "Estadio", "Liga", "Libertadores"]
for (let i = 0; i < w.length; i++) {
    console.log("ex05-for-A: " + w[i])
}

var w = ["Pelota", "Copa", "Estadio", "Liga", "Libertadores"]
for (let i = 0; i < w.length; i++) {
    console.log("ex05-for-B: " + w[i].substring(0,1).toUpperCase() + w[i].substring(1).toLowerCase())
}

var w = ["Pelota", "Copa", "Estadio", "Liga", "Libertadores"];
var sentence = "";
for (let i = 0; i < 5; i++) {
    sentence = sentence + w[i] + " ";
}
console.log("ex05-for-C: " + sentence);

var w = [];
for (let i = 0; i < 10; i++) {
    w[i] = i;
}
console.log("ex05-for-D: " + w)