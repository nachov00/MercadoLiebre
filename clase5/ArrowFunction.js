let laMitad = numero => numero / 2;

console.log(laMitad = 8);

let dividir = (num1, num2) => num1 / num2;

console.log(dividir(20,4));

let tengoQueTrabajar = dia => {
    if(dia == "sabado" || dia == "domingo"){
        return "No tenes que ir a trabajar"
    }
    else {
        return "Tenes que trabajar"
    }
}

console.log(tengoQueTrabajar("viernes"))