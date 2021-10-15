
function operacion(n1, n2, operacion){
    switch(operacion)
    {
        case "sumar":
            return n1+n2;
            break;    
        case "restar":
            return n1-n2;
            break;
        case "multiplicar":
            return n1*n2;
            break;
        case "dividir":
            return n1/n2;
            break;
        default:
            return 0;
    }

}
function saludar(nombre){
    return `Hola como estas ${nombre}`;
}


module.exports = {
    funcion1: operacion, 
    saludar,
    variable: 7
}