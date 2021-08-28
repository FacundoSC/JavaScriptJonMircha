// Curso JavaScript: 44. Temporizadores (setTimeout & setInterval)

/* usando la funcion setTimeout() esta se ejecutara una sola vez.
        para  poder eliminar este timer, es necesario  colocar esta funcion en una variable
        y luego pasarla por la funcion clearTimeout*/
let temporizadorSetTimeout = setTimeout(
  () => console.log("se ejecuta el setTimeout una sola vez"),
  3000
);
clearTimeout(temporizadorSetTimeout);
console.log("fin del setTimeout ");

/* usando la funcion setInterval() esta se ejecutara una periodicamente cuando pase el tiempo seteado en el segundo parametro(milisegundos).
        para  poder eliminar este timer, es necesario  colocar esta funcion en una variable
        y luego pasarla por la funcion clearInterval*/

// nota: como crear un reloj  , toLocaleTimeString te da la hora y toDateTimeString  te da la fecha
let temporizadorInterval = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);
clearInterval(temporizadorInterval);
console.log("fin del setInterval ");
