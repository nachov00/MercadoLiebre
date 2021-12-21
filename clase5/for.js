for (let i = 0; i<10; i++){
    console.log("el valor de i es igual a " + i)
}

function noParesDeContarImparesHasta(numero){
    let suma = 0
    for (let i=0; i<=numero; i++){
        if (i%2 != 0){
            suma = suma + 1
            // para contar es "+1". para sumar es "+i"
        }
    }
    return suma
}
console.log(noParesDeContarImparesHasta(10))