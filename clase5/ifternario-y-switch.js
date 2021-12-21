// if ternario
// condicion "?" expresion para el true : expresion para el false;

const { appendFile, appendFileSync } = require("fs");

let fruta = "naranja";

let resultado = fruta == "manzana"? "buenisimo, me gustan las manzanas": "ufa, queria manzana";
console.log(resultado)

// switch
// switch (expresion){
    // case caso1: 
    // console.log("se cumple caso 1")
    // break (permite cortar la ejecucucion del codigo y salir del switch)
//}

let semaforo = node()
switch(semaforo){
    case "verde":
        console.log("puedo cruzar");
        break;
    case "amarillo":
        console.log("precaucion");
        break;
    case "rojo":
        console.log("no cruces");
        break;
    default : 
    console.log("no funciona el semaforo");
    break;
}