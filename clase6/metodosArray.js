// convertir las notas del array sobre 100
let notas = [10,4,5,8,9,2,7];

let notasHastEl100 = notas.map(function(numero){
    return numero * 10;
}
)
//console.log(notasHastEl100) muestra el array con numeros mult por 10

// para ver notas que superen 7
let aprobadas = notas.filter(function(numero){
    return numero >= 7
})

//console.log(aprobadas) devuleve la cantidad de notas aprobadas ok

// queriendo sumar todas las notas
let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero
})

// console.log(sumaNotas) devuelve el numero 45 que es la suma de todo

// queriendo realizar una operacion por cada uno de los elementos
notas.forEach(function(valor, indice){
    console.log("en la posicion " + indice + " tengo el valor " + valor)
})

//en la posicion 0 tengo el valor 10
//en la posicion 1 tengo el valor 4
//en la posicion 2 tengo el valor 5
//en la posicion 3 tengo el valor 8
//en la posicion 4 tengo el valor 9
//etc etc

