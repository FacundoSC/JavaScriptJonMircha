



// Curso JavaScript: 57. this - #jonmircha

/*
console.log(this);
console.log(this === window);
this.nombre = "Facundo";
console.log(this);

function imprimir(){
  console.log(this.nombre);
}
imprimir();
*/

/*
this.nombre = "Contexto Global";

function imprimir(){
  console.log(this.nombre);
}

imprimir();
 let obj ={
   nombre: "Contexto Objeto",
   imprimir: function (){
    console.log(this.nombre);
    }
 }
 obj.imprimir();
 let obj2 ={
   nombre: "Contexto Objeto2",
   imprimir
    }
 obj2.imprimir();

function Persona(nombre){
   // la funcion constructora crea un nuevo scope
  
  let that = this;
  that.nombre = nombre;
  
  //this.nombre = nombre;
  /*
  return console.log(this.nombre);*/
  
  /* esta funcion anonima  crea un nuevo scope , pero como la variable nombre no exite salta al scope en el que fue definido la funcion que la contiene y se quedan como hermanas y de ahi que toma el valor de  contexto global*/

  /* return function(){
     console.log(this.nombre+"0000");
   } 
   */

  /*
  return ()=> console.log(this.nombre);
  
  
  return function(){
   console.log(that.nombre);  
  }
  
}


let facundo = new Persona("facundo");

facundo();*/




//Curso JavaScript: 58. call, apply, bind - #jonmircha

//console.log(this);
this.lugar ="Contexto Global";
function saludar(saludo, aQuien){
console.log(`${saludo} ${aQuien} desde ${this.lugar}`);  
}
saludar('Hola', 'Facundo');


const obj ={
  lugar:"Contexto Objeto"
}


saludar.call(obj,"Hola","Facundo");
// al llamar a la funcion call pero  en lubar de obj  pongo null lo llamo desde el contexto global
saludar.call(null,"Hola","Facundo");
// si pongo this, estoy diciendo desde el contexto global , porque la funcion saludar esta definida a nivel global
saludar.call(this ,"Hola","Facundo");


//la diferencia entre  call y apply es que en call los parametros de la funcion se envian de a uno y apply lo envio como un array

saludar.apply(obj,["Hola","Luna"]);
// al llamar a la funcion call pero  en lugar de obj  pongo null lo llamo desde el contexto global
saludar.apply(null,["Hola","Luna"]);
// si pongo this, estoy diciendo desde el contexto global , porque la funcion saludar esta definida a nivel global
saludar.apply(this ,["Hola","Facundo"]);

this.nombre ="Gorda";
const persona ={
  nombre : "LaLa",
  saludar: function(){console.log(`hola ${this.nombre}`)}
  
}

const otraPersona ={
  // si en  bind: enlace  envio como parametro persona enlazo con el  objeto persona  y si pongo this con el contexto global
  saludar : persona.saludar.bind(persona)
}



persona.saludar();

otraPersona.saludar();