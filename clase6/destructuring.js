// destructuring hace posible la extraccion de arrays

//destructuracion de arrays
let cursos = ["programacion", "MKT", "UX", "Data Science"];

let [primerPosicion, segundaPosicion, terceraPosicion] = cursos;
/*
console.log(cursos)
console.log(primerPosicion)
console.log(segundaPosicion)
console.log(terceraPosicion)
 */
//destructurar un objeto literal

let persona = {
    nombre: "Carli",
    edad: 26,
    domicilio: "Calle Falsa 123"
}

let {nombre, edad} = persona //aca el nombre de la propiedad tiene que ser exacto

console.log(persona);
console.log(nombre);
console.log(edad);