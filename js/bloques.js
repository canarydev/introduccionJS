/* ===============
   B L O Q U E S
 =================

Los bloques pueden ser de varios tipos, aunque se pueden simplificar en dos grupos; sentencias condicionales y bucles.
*/

var i = 0;



/*=========================
  SENTENCIAS CONDICIONALES
=========================*/

/*================
        I F
==================

Ejecuta el código si se cumple la condición.


Estructura:
    
    if (condición) {
        código;
    }
    
*/

if (true) console.log(1, "'true' siempre cumplirá la condición");



/*================
      E L S E
==================

Ejecuta el código si no se cumple la condición del if inmediatamente anterior.


Estructura:
    
    if (condición) {
        ...
    }
    else {
        código;
    }

*/

if (i == 1) console.log(2, "entro en el if");
else console.log(2, "entro en el else");



/*================
   E L S E  I F
==================

'else if' nos permite agregar una condición a un 'else' y, si no se cumple la condición del 'if', no se ejecutará el código que contenga el bloque.


Estructura:

    if (condición1) {
        ...
    }
    else if (condición 2){
        código;
    }

*/

if (i == 1) console.log(3, "if vale uno");
else if (i == 0) console.log(3, "if vale 0");



/*================
   SWITCH - CASE
==================

Comprueba una condición y ejecuta el código que corresponda. Es como anidar varios if.


Estructura:

    switch (clave) {
        case valor1:
            código;
            break;
        case valor2:
            código;
            break;
        default:
            código;
            break;
    }

*/

switch (i) {
    case 0:
        console.log(4, "'i' vale cero");
        break;
    case 1:
        console.log(4, "'i' vale uno");
        break;
}

//"break" es una palabra reservada que hace abandonar el bloque donde se ejecuta, en este caso el "switch". Si no se introduce un "break" se ejecutaría la siguiente línea de código, lo que podría producir efectos no deseados.

switch (i) {
    case 0:
        console.log(4, "'i' vale cero");
    case 1:
        console.log(4, "'i' vale uno");
        break;
}

//"default" se ejecuta cuando no se cumple ninguno de los casos anteriores.

switch (i) {
    case 1:
        console.log(4, "'i' vale uno");
    case 2:
        console.log(4, "'i' vale dos");
        break;
    default:
        console.log(4, "'i' tiene otro valor");
}




/*================
OPERADOR  TERNARIO
==================

El operador ternario es otro 'if', pero presenta algunos cambios.

El operador ternario puede devolver un valor y por ello suele ser retornado como el resultado de una función (véase el ejemplo de la función de fibonacci) o puede ser asignado a una variable. Además puede ser usado como un if cualquiera, ejecutando 


Estructura:

    var variable = (condición) ? valorSiVerdadero : valorSiFalso;

*/

var variable = (i == 0) ? true : false;
console.log(5, variable);

/* Nota importante: El operador ternario no puede tener como valores posibles ni 'break', ni 'continue'. En su lugar se debe utilizar "if-else".
   
Ejemplo de código no válido:
   (i == 0) ? console.log("i vale 0") : continue;
*/


/*======================================
EQUIVALENCIA EN SENTENCIAS CONDICIONALES
======================================*/

i = 1;


if (i == 0) {
    console.log(6, true);
}
else  {
    console.log(6, false);
}

switch (i) {
    case 0:
        console.log(6, true);
        break;
    default:
        console.log(6, false);
}

(i == 0) ? console.log(6, true) : console.log(6, false);




/*==============
   B U C L E S
==============*/

/*=============
    F  O  R
===============

El bucle "for" ejecuta tantas veces como le sea posible las instrucciones que contiene.


Estructura:

    for (inicialización; condición; incremento) {
        código;
    }

*/
for (var j = 0; j <= 10; j++) {
    console.log("Primer for:", j);
}


/*
En los bucles podemos encontrar algunas palabras reservadas que cambien su comportamiento. Estas palabras reservadas pueden ser "break", "continue" y let.

"break" sale del bucle de inmediato.
"continue" hace que el bucle ejecute su siguiente iteración.
"let" permite crear una variable local para el bloque donde se crea.
*/

//Ejemplo de break. La ejecución del bucle se para al llegar a 5:
for (var j = 0; j <= 10; j++) {
    console.log("'for' con 'break¡:", j);
    if (j == 5) break;
}

//Ejemplo de continue. No se mostrarán los números pares:
for (var j = 0; j <= 10; j++) {
    if (j%2 == 1) console.log("'for' con 'continue':", j);
    else continue;
}

//Ejemplo de una nueva variable creada con let:
console.log("'i' global", i); //La variable "i" vale 1 en este momento.

for (let i = 0; i <= 10; i++) {
    console.log("'i' local", i); //La variable "i" ahora tomará su valor local.
}

console.log("'i' global", i); //La variable "i" vuelve a su valor normal.