var w;
w = "monumental"

var result = w.toUpperCase();
console.log("ex02-strigns-A: " + result)

var w;
w = "Monumental";

var result = w.substring(0,5);
console.log("ex02-strigns-B: " + result);

var word;
word = "Monumental";

var result = w.substring(7, 10)
console.log("ex02-strigns-C: " + result);

var w;
w = "Monumental";

result = w.substring(0,1).toUpperCase() + word.substring(1,10).toLowerCase();
console.log("ex02-strigns-D: " + result);

var w;
w = "River Plate";

result = w.indexOf(" ");
console.log("ex02-strigns-E: " + result);

var w;
w = "Marcelo Gallardo"

result = w.substring(0,1).toUpperCase() + w.substring(1, 8).toLowerCase() + w.substring(8,9).toUpperCase() + w.substring(9,16).toLowerCase();
console.log("ex02-strigns-F: " + result);