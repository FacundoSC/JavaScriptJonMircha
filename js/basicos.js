// Funcion declarada

function estoEsUnaFuncion() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}

// una funcion que devuelve valor

function estaFuncionDevuelveValor() {
  return "cadena de texto";
}

estoEsUnaFuncion();
console.log(estaFuncionDevuelveValor());

/**funcion con parametros opcionales **/
function saludar(nombre, edad) {
  console.log(`hola mi nombres es ${nombre} y tengo ${edad} años`);
}

saludar2();

/** funcion declarada **/
function saludar2(nombre = "alex", edad = 80) {
  console.log(`hola mi nombres es ${nombre} y tengo ${edad} años`);
}

saludar("Facundo", 29);
saludar(); // al no tener parametros opcionales muestra que los parametros estan undefined.
saludar2(); // al usar los parametros opcionales , muestra el valor de de ellos al llamar a saludar2

//funcionExpresada();

const funcionExpresada = function () {
  console.log(
    "esto es una funcion expresada, por convension se usa una  constante"
  );
};

funcionExpresada();

/** arreglos en js**/

const a = [];
const b = [1, true, "hola", ["A", "B", "C"]];
console.log(a);
console.log(b);
console.log(b.length);

console.log(b[3][2]);

/** otra forma de  crear un Array usando el constructor**/
const c = Array.of("holis", 4, 5, true);
console.log(c);

/** array que inicializa todo con false */
const d = Array(100).fill(false);
console.log(d);

const e = new Array(1, 2, 3, 4);
console.log(e);

e.push("pila"); // poner un  valor
console.log(e);

console.log(e.pop()); // sacar el elemento en la pila

const colo = ["rojo", "amarillo", "azul"];

colo.forEach(function (elemento, index) {
  console.log(elemento, index);
});

/* a las variables dentro de los objetos se los llama atributos
 y a las funciones dentro de los objetos se los llama metodos */
const facundo = {
  nombre: "facundo",
  apellido: "cordoba",
  edad: 30,
  pasatiempos: ["correr", "jugar Futbol", "programar", "reparar Computadoras"],
  soltero: true,
  contacto: {
    facebook: "cordobafs",
    twitter: "mitwitter",
    instragram: "mi instagram",
    movil: "+543815935909",
  },
  saludar: function () {
    console.log(` hola :) mi nombre es ${this.nombre} ${this.apellido}`);
  },
};

facundo.saludar();

console.log(facundo.nombre, facundo["nombre"]);
console.log(facundo.pasatiempos[0]);
console.log(facundo.contacto.facebook);

console.log(Object.keys(facundo)); // me arroja las claves de un objeto
console.log(Object.values(facundo)); // me arroja los valores del objeto
console.log(facundo.hasOwnProperty("nombre")); // me dice si tiene un determinada propiedad

/* curso de javascript 16.  manejo de errores try catch y finally */

try {
  console.log(`el try agrega el codigo que se va a evaluar`);
  // noExiste;
} catch (error) {
  console.log("catch  captura el error");
  console.log(noExiste);
} finally {
  console.log(
    "el bloque finally se ejecuta siempre al final del bloque try catch"
  );
}

try {
  let numero = "y";
  if (isNaN(numero)) {
    throw new Error("no es un numero");
  }

  console.log(
    `el resultado de la mult de el numero por si mismo es ${numero * numero}`
  );
} catch (error) {
  console.log(`se produjo el siguiente error ${error}`);
}

/* curso de javascript 17. break y continue */

/* break y continue son palabras que pueden ser utilizadas solamente en estructas if, while, do while for */

const numeros = [1, 2, 3, 4, 5, 6, 7];

for (let index = 0; index < numeros.length; index++) {
  if (numeros[index] === 5) {
    break;
  }
  console.log(numeros[index]);
}
console.log(`fin del break`);

for (let index = 0; index < numeros.length; index++) {
  if (numeros[index] === 5) {
    continue;
  }
  console.log(numeros[index]);
}
console.log(`fin del continue`);

console.log(`muestra los impares`);
for (let j = 0; j < numeros.length; j++) {
  if (numeros[j] % 2 === 0) {
    continue;
  }
  console.log(numeros[j]);
}

console.log(`muestra los pares`);
for (let j = 0; j < numeros.length; j++) {
  if (numeros[j] % 2 !== 0) {
    continue;
  }
  console.log(numeros[j]);
}

/* curso de javascript 18. destructuracion */

let numerosPrimos = [1, 3, 5];

/* sin destructuracion */
let primeroPrimo = numerosPrimos[0],
  segundoPrimo = numerosPrimos[1],
  tercerPrimo = numerosPrimos[2];
console.log(primeroPrimo, segundoPrimo, tercerPrimo);
/* con destructuracion */
const [one, two, tree] = numerosPrimos;
console.log(one, two, tree);

const personaNueva = {
  nombreProgramador: "facundo",
  app: "cordoba",
};

const { nombreProgramador, app } = personaNueva;

console.log(nombreProgramador, app);

/* curso de javascript 19. objetos literales */

let apodo = "luna",
  peso = 30,
  color = "blanco";

let perro1 = {
  apodo,
  peso,
  color,
  saludar() {
    console.log("guaau guau");
  },
};

console.log(perro1);
perro1.saludar();

/* curso de javascript 20. parametros REST y operator spread (operador de propagacion) */

/* en este caso c es el parametro rest 
  lo puedo llamar  a la funcion suma con o sin el parametro rest, igual me va a sumar
*/
function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (elemento) {
    resultado += elemento;
  });

  return resultado;
}

let a1 = 2,
  b1 = 3;
console.log(sumar(a1, b1));
console.log(sumar(a1, b1, 4, 5, 6));

let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];
let arreglo3 = [...arreglo1, ...arreglo2];
console.log(arreglo3);

/** curso de javascript 21. arrow funtion o funciones flecha son funciones que sustituyen a las anonimas **/

/*
const saludo = function(){console.log("hola");}
 saludo();


 const saludo1 = (nombre1, nombre2 )=>console.log(`hola ${nombre1} y ${nombre2} `);

 saludo1('irma' ,'juan');
*/

/*
const sumando = function(a ,b){ return a+b;}

console.log(sumando(1,2));


const sumando1 =(a,b)=> a+b;
console.log(sumando1(2,6));



const perro ={
    nombre: "lala",
    saludar(){ console.log(`ladra ${this.nombre}`)}
}

perro.saludar();
*/

/** curso de javascript 22. funciones constructoras de prototipos  **/

//POO
//clases -modelo a seguir
//Objeto -instancia de una clase
//atributos - caracteristicas o propiedades de un objeto(son variables dentro de un objeto)
//metodos - son las acciones que pueden realizar

// un prototipo es un mecanismo por el cual un objeto puede heredar atributos y metodos (de un objeto padre).

/**antes*/

/*
const animal ={
     nombre:"pikachu",
     sexo:"masculino",
     sonido(){
         console.log("hago sonidos")
     }
}

const animal2 ={
    nombre:"bulbazor",
    sexo:"masculino",
    sonido(){
        console.log("hago sonidos")
    }
}
console.log(animal); 
console.log(animal2);
*/

/** version 1 , la funcion constructora solo debe tener atributos
 *  y los metodos deben ir en el prototipo , esto es para no duplicar codigo
 * en una funcion  constructora de prototipos Animal
 *  conviene solamente tener atributos y los metodos agregarlo
 * con prototype para ahorrar memoria */
/*
function Animal (nombre ,sexo){
    //atributos
    this.nombre = nombre;
    this.sexo = sexo;
    //metodos
    this.sonido = function(){ console.log("hago sonidos");} 
    this.saludar = function(){console.log("hola me llamo"+this.nombre);}   
}


function Animal(nombre, sexo) {
  //atributos
  this.nombre = nombre;
  this.sexo = sexo;
}
*/

/* de esta manera agrego el metodo o funcion  saludar  dentro de la variable prototipo
 y no como atributo duplicado  en en el objeto en Animal*/
//Animal.prototype.saludar = (frase) => console.log(frase);
/*
const pikachu = new Animal("pikachu", "Masculino");
const bulbazor = new Animal("bulbazor", "Masculino");
console.log(pikachu);
console.log(bulbazor);
pikachu.saludar("pika pika!!!");
bulbazor.saludar("bulbazooor!!!");*/

//Perro hereda de Animal

// herencia prototipica
/*
function Perro(nombre ,sexo ,raza){
  // esta variable super hace referencia a funcion constructora Animal (padre)
   this.super = Animal; 
   // uso la funcion super que es la que producto de la asignacion de la linea de arriba , es decir uso el constructor  la funcion Animal 
   this.super(nombre , sexo);
   //iniciacion de raza en la funcion Perro
   this.raza = raza;
}





// Perro esta heredando de Animal
Perro.prototype = new Animal();

Perro.prototype.constructor= Perro;

// sobrescribo el metodo saludar en el hijo es decir en perro
Perro.prototype.saludar = function (){
  console.log ("guau guau!!!");
}




const perra = new Animal('luna' ,'Mujer');
const luna = new Perro('lunis','Femenino' ,'Dogo');


console.log(perra);
perra.saludar('soy el saludar de  la clase padre');
console.log(luna);
luna.saludar(); */

/** curso de javascript 24. clases y herencia **/

class Animal {
  constructor(nombre, sexo) {
    //atributos
    this.nombre = nombre;
    this.sexo = sexo;
  }
  //metodos
  sonido() {
    console.log("hago sonidos");
  }
  saludar() {
    console.log("hola me llamo" + this.nombre);
  }
}

class Perro extends Animal {
  constructor(nombre, sexo, raza) {
    super(nombre, sexo);
    this.raza = raza;
  }
  sonido() {
    console.log("soy un perro y mi sonido es un ladrido");
  }
  saludar() {
    console.log("guau guau");
  }
  /* los metodos estaticos son aquellos que puedeninvocarse
   * sin la necesidad de instanciar  la clase a la cual pertenece
   */
  static queEres() {
    console.log(`soy un  miembro de la familia  de los caninos`);
  }

  /* los metodos getters permiten obtener el valor de una propiedad*/
  get obtenerRaza() {
    return this.raza;
  }

  /*los metodos setters permiten asignar valor a las propiedad*/
  set asignarRaza(raza) {
    this.raza = raza;
  }
}

let yogui = new Animal("yogui", "masculino"),
  scobby = new Perro("scobby", "masculino", "gran danes");
console.log(yogui);
yogui.saludar();
console.log(scobby);
scobby.saludar();
scobby.sonido();

/** curso de javascript 25. metodos estaticos ,  getters y setters**/

Perro.queEres();
console.log(scobby.obtenerRaza);
scobby.asignarRaza = "dalmata";
console.log(scobby.obtenerRaza);


/** curso de javascript 26. Objeto console**/

// es para observar y analizar los  elementos que le pasamos como parametros
//console.log(console);
// funcion pensada para mostrar mensaje de error
//console.error("esto es un error");
// funcion pensada para mostrar una advertencia
//console.warn("esto es una advertencia");
// funcion pensada para mostrar mensaje informativo
//console.info("registo de lo que pasa en nuestra aplicacion");
// uso de comodines en el objeto console
/*
let miNombre = "Facundo",
  miApellido = "cordoba",
  miEdad = 30;
console.log(
  "hola mi nombre es %s %s y tengo %d años",
  miNombre,
  miApellido,
  miEdad
);*/

//  objeto windows
//console.log(window);
//  objeto  document
//console.log(document.body);

// metodo dir dentro de  console es para ver a windows y document como un objeto
/*
console.dir(window);
console.dir(document);
*/

// uso de los metodos group y groupCollapsed
/*
console.group(" datos de la persona");
console.log("nombre: Facundo");
console.log("Apellido: Córdoba");
console.log("Edad :30 años");
console.log("Nacionalidad: Argentina");
console.log("Hobbie: Futbol, tocar guitarra, correr");
console.groupEnd();

console.groupCollapsed(" datos de la persona");
console.log("nombre: Facundo");
console.log("Apellido: Córdoba");
console.log("Edad :30 años");
console.log("Nacionalidad: Argentina");
console.log("Hobbie: Futbol, tocar guitarra, correr");
console.groupEnd();
*/

// console table es usado para mostrar los datos en formato tabla y con el sort ordeno el array

//console.table(Object.entries(console).sort());
//let arreglo1 = [1, 2, 3];
//console.table(arreglo1);
//console.table(scobby);

/* el console.time es utilizado para ver la performance de mi codigo
 indicanto cuanto demora en completarse . Nota: el texto dentro de time y timeEnd debe ser el mismo
 */
/*
console.time('cuanto tarda mi codigo');
let vectorNumeros = Array(100);

for (let index = 0; index < vectorNumeros.length; index++) {
  // count es utilizado para ver cuantas veces se ejecuto una determinado  codigo
   console.count("vez en el codigo for");
   vectorNumeros[index] = index; 
}
console.timeEnd('cuanto tarda mi codigo');


let x =9 ,y = 3 ,mensaje= "se esperaba que x sea menor que y";
// para hacer validaciones  como las librerias jasmin , mocha para pruebas unitarias
console.assert(x<y,{x,y,mensaje});


*/


//console.clear();

/** curso de javascript 27. Objeto Date**/

//console.log(Date());

// obtener la fecha
let fecha = new Date();
// obtener el dia
console.log(fecha.getDate());
// obtener el mes
console.log(fecha.getMonth());
// obtener el año
console.log(fecha.getFullYear());
// obtener la hora
console.log(fecha.getHours());
// obtener los minutos
console.log(fecha.getMinutes());
// obtener los segundos
console.log(fecha.getSeconds());
// devuelve la fecha en formato  string
console.log(fecha.toString());
// devuelve la fecha  en formato string pero recortado
console.log(fecha.toDateString());
// devuelve  la  fecha en formato dd/MM/YYYY HH:mm:ss
console.log(fecha.toLocaleString());
// devuelve  la  fecha en formato dd/MM/YYYY 
console.log(fecha.toLocaleDateString());
// devuelve  la hora en formato HH:mm:ss
//usando este metodo del objeto y un  temporizador setInterval () ver el curso de js de mrr y armar el reloj 
console.log(fecha.toLocaleTimeString());
// devuelve la fecha en formato  string
console.log(fecha.toJSON());

// obtiene la diferencia en minutos de la hora entre  el pais en el que estas y el pais pivot por donde pasa el meridiano de greenwitch (inglaterra)
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCHours());
// nos da el tiempo en milisegundos  que pasaron desde  el 1/1/1970
// esto es muy utilizado para operaciones entre fechas
console.log(Date.now());
//moment.js es la libreria utilizada para uso de hora. 


/** curso de javascript 28. Objeto Math**/

//permite observar las propiedades del prototipo MATH
console.warn(Math);
console.log(Math.PI);
//metodo para calcular el valor absoluto
console.log(Math.abs(-5));
// redondeo para arriba
console.log(Math.ceil(7.4));
//redondeo para abajo
console.log(Math.floor(7.2));
//redondeo
console.log(Math.round(7.49));
//raiz cuadrada
console.log(Math.sqrt(9));
//potencia
console.log(Math.pow(2,5));
// 1 si es positivo , -1 si es negativo y 0 si no es ni positivo y ni negativo
console.log(Math.sign(7.49));
//metodo randon  obtiene un valor aleatorio [0, 1)
console.log(Math.round(Math.random()*1000));

console.clear();
// operador cortocircuito por consecuencia de la propiedad de absorcion booleana
// si un valor  de la derecha es una expresion que tiende a true  es true o sino toma el valor por default.....  todo es true
                true
console.log((0)||'defecto'); // true or true toma el de la izquierda
console.log(null||'defecto'); // false or true toma el otro de la derecha
console.log(false||'defecto');
console.log(undefined||'defecto');
console.log(''||'defecto');

// si un valor es true.....  todo es true
console.log(false && false);
console.log(false && true);
console.log(true && true);
console.log(true && false);


'defecto'