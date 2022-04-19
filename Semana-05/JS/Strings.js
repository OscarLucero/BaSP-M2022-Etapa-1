var word;
word = "monumental"

var result = word.toUpperCase();
console.log("A-Strings: " + result)

var word;
word = "Statements";

var result = word.substring(0,5);
console.log("B-Strings: " + result);

var word;
word = "Statements";

var result = word.substring(7, 10)
console.log("C-Strings: " + result);

var word;
word = "statements";

result = word.substring(0,1).toUpperCase() + word.substring(1,10).toLowerCase();
console.log("D-Strings: " + result);

var word;
word = "Hello World";

result = word.indexOf(" ");
console.log("E-Strings: " + result);

var word;
word = "statements javascript"

result = word.substring(0,1).toUpperCase() + word.substring(1, 11).toLowerCase() + word.substring(11,12).toUpperCase() + word.substring(12,21).toLowerCase();
console.log("F-Strings: " + result);