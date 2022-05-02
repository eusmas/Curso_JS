//Forma 1 de crear un array
var nombres =['Esteban','Carlos','Lili'];

//Forma 2 de crear un array
var carros = new Array ('toyota','mazda','honda');

console.log(nombres);
console.log(nombres[1]);
console.log(carros);
console.log(carros[1]);

nombres[1]='Maria';
console.log(nombres[1]);

/*Propiedades de delos array
*/

console.log(nombres.length);

for(var i =0; i<=nombres.length-1 ; i++){
    console.log(nombres[i]);
}


carros.forEach(function(elemento, indice){
    console.log(elemento,indice);
})