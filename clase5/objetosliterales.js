//let curso = {
//    cantidadDeAlumnos :32,
//    docentes: ["Nacho","Javier"],
 //   horario: "de 19 a 21 hs"}


//console.log(curso)

//console.log(curso.docentes[1])

//metodos 
let curso = {
    cantidadDeAlumnos :32,
    docentes: ["Nacho","Javier"],
    horario: "de 20 a 21 hs",
    notificaciones: function(){
        return "El horario de la cursada es" + this.horario
    }
}
console.log(curso.notificaciones())