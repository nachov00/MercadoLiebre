// getDay(); devuelvo en numero que hace referencia dia de la semana. domingo es 0, y asi sucesivamente
// se usa con dot notation. por ej: fechaActual.getDay(

// getDate(); retorna el dia de mes en curso. 
// getMonth(); devuelve el mes. enero empieza en 0 y diciembre es 11
// getFullYear(); retorna el numero de año completo

// para crear una fecha 

let fechaActual = new Date();

console.log(fechaActual.getFullYear())
console.log(fechaActual.getMonth())
console.log(fechaActual.getDate())
console.log(fechaActual.getDay())

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ["Enero", "Febrero", "marzo", "abril", "mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

console.log("Hoy es el " + dia + " de " + meses[mes] + " del " + anio)

//buscar una fecha puntual
let fechaPuntual = new Date(2020, 11, 3) //se hace el mismo proceso de antes con una fecha pactada y el resultado muestra segun se pide.