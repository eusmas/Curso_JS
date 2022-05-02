//Forma 1 de crear un array
var nombres =['Esteban','Carlos','isabel'];

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

//forma de recorrer un array
for(var i =0; i<=nombres.length-1 ; i++){
    console.log(nombres[i]);
}

//otro metodo para recorrer un array
carros.forEach(function(elemento, indice){
    console.log(elemento,indice);
})


console.log(nombres);
//el metodo push adiciona un elemento al final de un arreglo
nombres.push('Pedro');
console.log(nombres);
//el metodo unshift adiciona un elemento al inicio de un arreglo
nombres.unshift('Lili');
console.log(nombres);

//el metodo pop elimina un elemento al final de un arreglo
nombres.pop();
console.log('pop' + nombres);

//el metodo shift elimina un elemento al inicio de un arreglo
nombres.shift('Lili');
console.log('shift' + nombres);

//devuelve la pos o indice de un elemento de un array
var pos = nombres.indexOf('isabel');
console.log(pos);

//ejemplo a partir del indice 1, elimina dos elementos
nombres.splice(1,2);
console.log(nombres);