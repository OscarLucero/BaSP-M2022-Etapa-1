var add = {
    n1: 9,
    n2: 12,

    result: function(){
        return this.n1 + this.n2;
    }
};
var resultado = add.result();
console.log("ex06-functions-A: " + resultado)

//++//

function result(n1,n2){
    if (isNaN(n1) || isNaN(n2)) {
        alert("Error, one is not a number")
        return NaN;
    } 
    return n1 + n2;
}

var resultado = result(4,25);
console.log("ex06-functions-B: " + resultado)

//++//

function validateInteger(x) {
    return Number.isInteger(x);
}
var entero = validateInteger(22.50);
console.log("ex06-functions-C: " + entero)

//++//

function result(n1,n2){
    if (typeof(n1) === "numero" && typeof(n2) === "numero") {
        if (Number.isInteger(n1) && Number.isInteger(n2)) {
            return n1 + n2;
        }else{
            alert("Error, ther is not a integer")
            if (!Number.isInteger(n1)) {
                return Math.round(n1)
            }else{
                return Math.round(n2)
            }
        } 
    }else{
        alert("Error, one is not a number")
        return NaN;
    }
}
var resultado = result(4,25.5);
console.log("ex06-functions-D: " + resultado)

//++//

function result(n1,n2){
    if (typeof(n1) === "numero" && typeof(n2) === "numero") {
        if (validation(n1,n2)) {
            return n1 + n2;
        }else{
            alert("Error, ther is not a integer")
            if (!Number.isInteger(n1)) {
                return Math.round(n1)
            }else{
                return Math.round(n2)
            }
        } 
    }else{
        alert("Error, one is not a number")
        return NaN;
    }

}
function validation(n1, n2){
    if (Number.isInteger(n1) && Number.isInteger(n2)){
        return true;
    }else{
        return false;
    }
}
var resultado = result(4,25.5);
console.log("ex06-functions-F: " + resultado)