function dividir (a,b){
    
    // if (isNaN(a)== false && isNaN(b) == false){
        if (typeof(a)=== typeof(5) && typeof(b) === typeof(5)){
    if (b==0){
        return "No se puede dividir por cero"
    }
    else {
        return a / b
    }
}
else {
    return "No es un numero"
}
}

module.exports = dividir
