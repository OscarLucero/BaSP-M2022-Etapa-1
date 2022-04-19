var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("ex03-arrays-A: " + mes[4] + "-" + mes[10]);

var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("ex03-arrays-B: " + mes.sort());

var futbol = ["Pelota", "Copa", "Estadio", "Liga"];
futbol.unshift("Mundial")
futbol.push("Champions")

console.log("ex03-arrays-C: " + futbol);

var futbol = ["Pelota", "Copa", "Estadio", "Liga"];
futbol.shift();
futbol.pop();

console.log("ex03-arrays-D: " + futbol);

var futbol = ["Pelota", "Copa", "Estadio", "Liga"];
futbol.reverse();

console.log("ex03-arrays-E: " + futbol);

var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("ex03-arrays-F: " + mes.join("-"));

var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("ex03-arrays-G: " + mes.slice(4, 11))