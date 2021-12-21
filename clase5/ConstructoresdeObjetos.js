let curso = {
    cantidadDeAlumnos :32,
    docentes: ["Nacho","Javier"],
    horario: "de 20 a 21 hs",
    notificaciones: function(){
        return "El horario de la cursada es" + this.horario
    }
}

function Cursos(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario
}

//ahora hecha la funcion, se crea un nuevo curso

let cursoDeProgramacion = new Cursos(50, ["Javier", "Gerardo"], "de 19 a 21 hs");
let cursoDeMarketing = new Cursos(15, ["Tomas", "Karina"], "de 20 a 21 hs");
let cursoDeCorrer = new Cursos(250, ["Pedro", "Pablo"], "de 20 a 22 hs");

console.log(cursoDeProgramacion)
console.log(cursoDeMarketing)
console.log(cursoDeCorrer)