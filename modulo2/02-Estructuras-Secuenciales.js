//---------------------------TAREA 1-----------------------------//
/*Un maestro desea saber que porcentaje de hombres y que procentajes de 
mujeres hay en un grupo de estudiantes.*/
/*
let hombres = parseInt(prompt('Ingrese el numero de hombres'));
let mujeres = parseInt(prompt('Ingrese el numero de mujeres'));
let estudiantes = hombres + mujeres;

alert(`El porcentaje de hombres: ${Math.round(hombres * 100/estudiantes)}%
El porcentaje de mujeres: ${Math.round(mujeres * 100/estudiantes)}%`);
*/

//---------------------------TAREA 2-----------------------------//
/*Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, 
pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a 
resolver el problema, determinando cuántas pulgadas debe pedir con base en los 
metros que requiere. (1 pulgada = 0.0254 m). */

/*
let metros = parseInt(prompt('Ingrese los metros'));
let conversionPulgadas = metros / 0.0254;

alert(`${metros}m en pulgadas: ${conversionPulgadas.toFixed(2)}in`);
*/

//---------------------------TAREA 3-----------------------------//
/*Un estudiante desea saber cual será su calificación final en la materia de Algoritmos.
Dicha calificación se compone de los siguientes porcentajes: 55% del promedio de sus tres 
calificaciones parciales 30% de la calificación del examen final 15% de la calificación 
de un trabajo final */

let parcial1 = 5;
let parcial2 = 6;
let parcial3 = 10;

let parciales = (parcial1 + parcial2 + parcial3) / 3;
let examenFinal = 10;
let trabajoFinal = 8;

let calificacionFinal = (parciales*0.55) + (examenFinal*0.3) + (trabajoFinal*0.15);

console.log(`Su calificacion final es: ${calificacionFinal}`);