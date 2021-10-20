//---------------------------TAREA 1-----------------------------//
/*Un obrero necesita calcular su salario semanal, el cual se obtiene de 
la siguiente manera: si trabaja 40 horas o menos se le paga $16 por hora 
si trabaja más de 40 horas se le paga $16 por cada una de las primeras 40 
horas y $20 por cada hora extra.*/
/*
let horas =  parseInt(prompt('Ingrese las horas trabajadas'));
let extras;

if(horas <= 40){
    console.log(`Valor por ${horas} horas trabajadas = ${horas * 16}`);
}else if(horas > 40){
    extras = horas - 40;
    console.log(`Valor por ${horas} horas trabajadas = ${40 * 16}`);
    console.log(`valor horas extras = ${extras * 20}`);
}
*/

//---------------------------TAREA 2-----------------------------//
/*Una persona enferma, que pesa 70kg, se enceuntra en reposo y desea saber 
cuántas calorías consume su cuerpo durante todo el tiempo que realice una mism 
actividad. Las actividades que tiene permitido realizar son únicamente dormir 
y estar sentado en reposo. Los datos que tiene son que estando dormido consume 
1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto.*/

/*
let actividad = parseInt(prompt('Elije la actividad \n1- dormir \n2- sentado'));
let horas = parseInt(prompt('Horas pasadas'));
let calorias;

if(actividad == 1){
    calorias = Math.round((horas * 60) * 1.08);
    console.log(`En ${horas} hora(s) su consumo se calorías es: ${calorias}`);
}else if(actividad == 2){
    calorias = Math.round((horas * 60) * 1.66);
    console.log(`En ${horas} hora(s) su consumo se calorías es: ${calorias}`);;
}else{
    console.log(`valor incorrecto`);
}
*/

//---------------------------TAREA 3-----------------------------//
/*Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original 
y su precio con descuento. El descuento lo hace en base a la clave. Si la clave es 
01 el descuento es del 10% y si la clave es 02 el descuento es del 
20%(solo existen dos claves). */

let nombreArt = prompt('Ingrese el nombre del artículo');
let clave = (prompt('Ingrese la clave'));
let precio = parseInt(prompt('Ingrese el precio'));
let descuento = precio;

if(clave == '01'){
    descuento = precio - (precio * 0.10);
}else if(clave == '02'){
    descuento = precio - (precio * 0.20);
}

console.log(`Nombre del Artículo: ${nombreArt}
clave: ${clave}
Precio original: ${precio}
Precio con descuento: ${descuento}
`)