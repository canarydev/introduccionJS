/* ===============
   B L O Q U E S
 =================

Los bloques pueden ser de varios tipos, aunque se pueden simplificar en dos grupos; sentencias condicionales y bucles.
*/

var i = 0;



/* SENTENCIAS CONDICIONALES */

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