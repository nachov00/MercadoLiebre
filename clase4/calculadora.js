
let operacionSuma = require("./sumar");
let operacionResta = require("./restar");
let operacionMultiplicar = require("./multiplicar");
let operacionDivision = require("./dividir");



console.log("La suma es igual ", operacionSuma(3,4));
console.log("La resta es igual ", operacionResta(3,4));
console.log("La multiplicacion es igual ", operacionMultiplicar(0,4));
console.log("El resultado de la division es ", operacionDivision(4,0));
