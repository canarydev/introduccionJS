/* MODELOS DE OBJETOS DEL DOCUMENTO

DOM es una estructura de objetos que genera el navegador cuando se carga un documento. Se puede alterar mediante JS para cambiar dinámicamente los contenidos y aspecto de la página.
*/

var caja = document.getElementById("caja");
//var caja = document.querySelector("#caja");
console.log("caja ", caja);

 var cajas = document.querySelectorAll("#cajas");
 console.log("caja ", cajas);

 caja.style.width = "200px"
 caja.style.height = "200px"
 caja.style.background = "red"