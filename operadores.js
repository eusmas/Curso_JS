var edad1, edad2, diferencia;
var sumaedaddes, yearedad1, yearedad2;
var yearactual;

edad1=34;
edad2=28;
yearactual=2019;

//suma

sumaedaddes=edad1+edad2;

//resta

diferencia=edad1-edad2;

yearedad1=yearactual-edad1;
yearedad2=yearactual-edad2;

//multiplicacion

console.log("Multiplicacion = ", yearactual*5);

//division

console.log("Division = ", yearactual/5);

//modulo 

var A=11;
var B=5;
var C=A%B; //modulo devuelve el residuo o el resto de la division


//mostrar resultados

console.log("diferencia = ",diferencia); //concatenar con , imprime en formato diferente
console.log("Año de la edad1 = " + yearedad1); //concatenar con +, imprime todo en string
console.log("Año de la edad2 = ",yearedad2);
console.log("Suma de edades = ",sumaedaddes);
console.log("modulo = ",C);

//.................................................

var mayor=edad1>edad2;
var menor=edad1<edad2;
var igual=edad1==edad2;
var igualnegado=!(edad1==edad2);//niega el resultado 

console.log("edad 1 mayor a edad 2 = ",mayor);
console.log("edad 1 menor a edad 2 = ",menor);
console.log("edad 1 igual a edad 2 = ",igual);
console.log("edad 1 igual a edad 2 negado = ",igualnegado);

//....................
//operadores de incremento y decremento

var incremento=++edad1;
var decremento=--edad2;

console.log("edad 1 incrementada = ",incremento);
console.log("edad 1 decremento = ",decremento);

//operadores de asignacion += -= += /= %=

A+=B; // a valor de A le suma el valor de B, es una forma abreviada de A=A+B;

console.log("a+b = ",A);
console.log("a+b = ",B);

