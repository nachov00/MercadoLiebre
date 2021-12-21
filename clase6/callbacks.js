let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(10,5,restar))
console.log(calculadora(10,5,sumar))


//let agregarHttp = (url,url2) => ["http://" + url,"http://" + url2]
//let procesar = ([url,url2],fn) => fn(url,url2)



console.log(procesar(["holaharry","pedroelloco"],agregarHttp))

// ejercicio playground
let doble = (numero) => numero*2;
let triple = (numero) => numero*3;

let aplicarCallback = (numero, funcion) => funcion(numero);

console.log(aplicarCallback(7, doble));
console.log(aplicarCallback(7, triple));

//ejercicio playground 2
