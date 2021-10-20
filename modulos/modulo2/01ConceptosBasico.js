//---------------------------TAREA 1-----------------------------//
/*Realizar un algoritmo en Javascript que permita calcular la suma, resta, multiplicación
y división de dos números, donde num1 = 5 y num2 = 7. Mostrar los resultados por consola. */

//Inicializacion de variables
let num1;
let num2;

let suma;
let resta;
let multiplicacion;
let division;

//Declaracion de variables
num1 = 5;
num2 = 7;

suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division =  num1 / num2; 

//Imprimir por consola
console.log(num1 + ' + ' + num2 + ' = ' +  suma);
console.log(num1 + ' - ' + num2 + ' = ' +  resta);
console.log(num1 + ' x ' + num2 + ' = ' +  multiplicacion);
console.log(num1 + ' / ' + num2 + ' = ' +  division);


//---------------------------TAREA 2-----------------------------//
/*Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de entrada: 
el nombre, horas trabajadas y el valor de la hora. */
 /*
//Inicializacion
let sueldo;

//Iniciclizacion y declaracion de variables
let nombre = prompt('Ingrese su nombre');
let horas = Number(prompt('Ingrese la cantidad horas trabajadas'));
let valor = prompt('Ingrese el valor de las horas');

sueldo = horas * valor;

alert('El/la emplead@ ' + nombre + ' tiene un sueldo de ' + sueldo);
*/

//---------------------------TAREA 3-----------------------------//
/*Un estacionamiento requiere determinar el cobro que debe aplicar a las personas
que lo utilizan. Considere que el cobro es con base en las horas que lo disponen 
y que las fracciones de hora se toman como completas. Realizar el algoritmo que 
permita determinar el cobro. */

//Inicializar variables
let horas;
let cobro;
let precioHora;

//Definir variables
precioHora = 3000
horas = parseInt(prompt('Horas que estuvuste en el estacionamiento'));
cobro = precioHora * horas;

alert('El total a pagar ' + cobro );