
var nombre="esteban";
var casado=false;
//if else
if(casado==true){
    console.log(nombre + " es casado");
}else{
    console.log(nombre + " es soltero");
}
//solo if
if(nombre=="esteban"){
    console.log("el nombre es " + nombre);
}

//comparadore logicos 
// and &&
//or ||
// not !

var edad = 122;

//edad menor a 12 es un niño
//edad entre 11 y 18 es adolescente
//edad entre 17 y 60 adulto
//edad mayor a 60 anciano

if(edad<12){
    console.log(nombre + " es un niño")
}else if(edad>=12 && edad<18){
    console.log(nombre + " es un adolescente")
}

if(edad>=18 && edad<60){
    console.log(nombre + " es un adulto")
}else if(edad>=60){
    console.log(nombre + " es un anciano")
}


//sentencia switch

var mes=1;

switch(mes){
    case 1:
    console.log("Enero");
    break;
    case 2:
    console.log("Febrero");
    break;
    case 3:
    console.log("Marzo");
    break;
    case 4:
    console.log("Abril");
    break;
    default:
    console.log("Mes no encontrado")
}

//sentencia for
/*se evidencia la diferencia entre var y let, 
si se reemplaza var por let en e primer loop, la varibale i 
ya no podra ser usada en el segundo loop
*/

for (var i=0; i<10; i++) {
    console.log(i);
}
console.log("Fin primer loop...");
for (let j=0; j<10; j+=2) {
    console.log(j);
    console.log(i);
}
console.log("Fin segundo loop...");

//sentencia while y do while

var k=1;

while (k<=10) {
    console.log(k);
    k++;
}
console.log("Fin tercer loop... " + "While", k);


//el do while se ejecuta por lo menos una vez, aunque la condicion no se cumpla

var l=1;
do {
    console.log(l);
    l++;
} while (l<=10);
console.log("fin do while", l);