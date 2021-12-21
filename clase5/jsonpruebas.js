let persona = {
    nombre: "carli",
    edad: 25,
    domicilio: "calle falsa 123"
}

let personaJSON = JSON.stringify(persona);

let personaOriginal = JSON.parse(personaJSON);

console.log(personaOriginal)