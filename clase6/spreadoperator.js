// spread operator son "..." acompañados de la variable. sirven para unir dos arrays, objetos literales, funciones

//con arrays
let peliculasAccion = ["End Game", "Iron Man", "Capitan America"];
let peliculasComedia = ["Mi pobre angelito", "Que paso ayer"];

let peliculas = [...peliculasAccion, ...peliculasComedia]

//console.log(peliculas)

//con objetos literales
let generoComedias = {
    nombreGenero: "comedia",
    popularidad: 3
}

let miPobreAngelito = {
    nombre: "mi pobre angelito",
    duracion: 120,
    ...generoComedias
}
let quePasoAyer = {
    nombre: "que paso ayer",
    duracion: 90,
    ...generoComedias
}

//console.log(miPobreAngelito);
//console.log(quePasoAyer)

//aplicados en una funcion
function peliculasVistas(...nombresDePeliculas){
    for (let i = 0; i<nombresDePeliculas.length; i++) {
        console.log("la persona ya vio " + nombresDePeliculas[i])
    }
}

peliculasVistas("iron man", "mi pobre angelito") // siempre devuelve un array