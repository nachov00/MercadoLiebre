let fs = require("fs");

let tareas = fs.readFileSync("tareas.json");
let tareasLimpio = JSON.parse(tareas);




let mensaje = process.argv[2];
    switch(mensaje){
    case "listar":
        tareasLimpio.forEach(function(unaLista){
            unaLista
        })

        break;
        case undefined:
            console.log("Atencion - Tienes que pasar una accion")
            break;
    default : 
    console.log("No entiendo lo que quieres hacer");
    break;
}

module.exports = mensaje;