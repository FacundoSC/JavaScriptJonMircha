
 /* contando cantidad de veces de una palabra con indexOf */
const cantidadVecesRepetidasV2 = (cadena = "", patron = "") => {
  if (typeof cadena !== "string")
    return console.warn("ingrese una cadena de texto");
  if (!cadena)
    return console.warn(
      "ingrese una cadena de texto distinta a la vacia en el parametro cadena"
    );
  if (typeof patron !== "string")
    return console.warn("ingrese una cadena de texto el parametro patron");
  if (!patron)
    return console.warn(
      "ingrese una cadena de texto distinta a la vacia en el parametro padron"
    );
  let pos = 0,contador = 0;

  while(pos!==-1){
  pos = cadena.indexOf(patron,pos);
  if(pos!== -1){
    pos++;
    contador++;
    pos = cadena.indexOf(patron,pos);
   }
 }
  console.log(contador);
};


cantidadVecesRepetidasV2("hola mundo adios mundo", "mundo");