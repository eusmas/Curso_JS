//.............Funciones basicas................. 

//funcion sin retorno de valores al codigo
function mensaje(msj) {
    console.log(msj);
}

//ejemplo de la funcion mensaje
var msj="Este mensaje es la entrada de la funcion";
mensaje(msj);


//funcion con retorno de valor al codigo 
function mensaje2() {
    return "Este Mensaje es retornado por la funcion";
}

//ejemplo de la funcion mensaje2
var msj2= mensaje2();
console.log(msj2);

// ..........Argumentos de una funcion................. 

function sumar(a,b,c) {
    return a+b+c;
}

//ejemplo de funcion sumar
var resultado; //definir la variable
resultado=sumar(10,5,3);
console.log(resultado);

/*si uno de los valores de entrada se iguala a un valor, 
este queda como por defecto, si el usuario no introduce ningun otro 
valor, tomara dicho valor por defecto*/ 
function suma_opcional(a,b,c=3) {
    return a+b+c;
}

//Ejemplo funcion suma_opcional
var resultado2;
resultado2=suma_opcional(3,7);
console.log(resultado2);


//Funciones recursivas 
//son funciones que se llaman a si mismas
var factorial = function(n){
    if(n==0 || n==1)
        return 1;
    else
        return (n*factorial(n-1));
}

console.log(factorial(4));


