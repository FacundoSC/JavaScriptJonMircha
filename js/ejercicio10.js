/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

En el video 43 te daré mi solución, antes de verlo trata de resolver los ejercicios, y comparte tus resultados en alguna plataforma como GitHub o CodePen y comparte el enlace de tus soluciones en los comentarios de este video. 
*/

class Pelicula {
  static generosValidos() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  constructor({
    idIMBD,
    titulo,
    director,
    anioDeEstreno,
    paisesDeOrigen,
    generos,
    clasificacionIMBD,
  }) {
    this.idIMBD = idIMBD;
    this.titulo =  titulo;
    this.director = director;
    this.anioDeEstreno = anioDeEstreno;    
    this.paisesDeOrigen = paisesDeOrigen;
    this.generos = generos;
    this.clasificacionIMBD = clasificacionIMBD;
   
  } // constructor

  validarCadena(propiedad, valor) {
    if (!valor) {
       console.log(`${propiedad} ${valor} esta vacio`);
       return false;
    }
    if (typeof valor !== "string"){
      console.log(  `${propiedad} ${valor} ingresado ,No es una cadena de texto` );
      return false;
    }
 
    return true;
  }

  validarIMBD(propiedad, valor) {
    if (this.validarCadena(propiedad, valor)) {
      let exprRegIdIMBD =
        /[a-zA-Z][a-zA-Z][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/gi;
      if (!exprRegIdIMBD.test(valor)) {
        return console.warn(`el campo ${propiedad}  no coincide con el patron`);
      }
      return true;
    }
  }

  validarLogitudCadena(propiedad, valor, longitudANoSuperar) {
    if (this.validarCadena(propiedad, valor))
      if (valor.split("").length > longitudANoSuperar) {
        console.warn(
          `el campo ${propiedad} cotiene el valor: ${valor} que supera la longitud maxima permitida que es de  ${longitudANoSuperar}`
        );
        return false
      }
      return true;
  }
  validarAnio(propiedad, valor) {
    if (typeof valor !== "number") {
       console.warn(
        `el campo ${propiedad}  tiene el valor : ${valor} que no es de tipo number`
      );
      return false;
    }
    if (valor.toString().split("").length !== 4) {
       console.warn(`el campo ${propiedad} debe contener 4 digitos`);
       return false;
    }
    return true;
  }
  validarArreglo(valor) {
     if(!valor) {
       console.error('esta vacio');
      return false;
      }

    if (!(valor instanceof Array)) {
      console.warn(`el valor ingresado ${valor} no es un array}`);
      return false;
    }
    if(valor.length===0){
      console.error('no tiene datos');

    }
    return true;
  }
  validarGeneros(propiedad, valor) {
    if (this.validarArreglo(valor)) {
      let cantidadGeneroValidos = 0;
      let generosValidos = Pelicula.generosValidos();
      valor.forEach((genero) => {
        if (generosValidos.includes(genero)) {
          cantidadGeneroValidos += 1;
        }
      });
      if (cantidadGeneroValidos !== valor.length) {
        console.warn(
          `el vector ${propiedad} contiene alguno de estos valores ${valor} que no es estan permitidos como generos`
        );
        return false;
      }
      return true;
    }
  }
  validarClasificacion(propiedad, valor) {
    if (typeof valor !== "number") {
      console.warn("el campo clasificacionIMBD ingresado no es de tipo number"
      );
      return false;
    }
    if (Math.sign(valor) === -1) {
      console.warn("ingresar una calificacion no negativa");
      return false;
    }
    if (valor > 10) {
      console.warn("ingresar una calificacion entre 0 y 10");
      return false;
    }
    var regexp = /^\d+\.\d{0,1}$/;    
     if (!regexp.test(valor)){
      console.warn(`el campo ${propiedad} tiene con el valor ${valor} tiene mas digitos permitidos que son 1`);
      return false;
     }
     return true;
  }
   
  fichaTecnica(){
    if(this.validarIMBD("idIMBD", this.idIMBD) && this.validarLogitudCadena("titulo", this.titulo, 100) && this.validarLogitudCadena("director", this.director, 50) && this.validarAnio("añoDeEstreno", this.anioDeEstreno) && this.validarArreglo(this.paisesDeOrigen) && this.validarGeneros("generos", this.generos) && this.validarClasificacion("clasificacionIMBD",this.clasificacionIMBD)){
    let fichaTecnica = 
   `\t idIMBD:${this.idIMBD},
    \t titulo:${this.titulo},
    \t director:${this.director},
    \t añoEstreno:${this.anioDeEstreno},
    \t paisesOrigen:${this.paisesDeOrigen},
    \t genero:${this.generos},
    \t clasificacion:${this.clasificacionIMBD}`;
    console.log(fichaTecnica);                    
    }

  }

}



let peliculas =[
  {
    idIMBD: "tt3366447",
    titulo: "el padrino",
    director: " Francis ford coppola",
    anioDeEstreno: 2020,
    paisesDeOrigen: ["Estados Unidos"],
    generos: ["Action","Drama"],
    clasificacionIMBD: 8.5
  },
  {
    idIMBD: "tt8332922",
    titulo: "Un lugar tranquilo 2",
    director: "John Krasinski",
    anioDeEstreno: 2021,
    paisesDeOrigen: ["Estados Unidos"],
    generos: ["Drama","Horror","Sci-Fi"],
    clasificacionIMBD: 7.4
  },
  {
    idIMBD: "tt3480822",
    titulo: "el Viuda Negra",
    director: "Cate Shortland",
    anioDeEstreno: 2021,
    paisesDeOrigen: ["Estados Unidos"],
    generos: ["Action","Adventure","Sci-Fi"],
    clasificacionIMBD: 6.9
  }
];

peliculas.forEach(pelicula=>{
  const unaPelicula = new Pelicula(pelicula);
  unaPelicula.fichaTecnica();
});



/*
const unaPelicula = new Pelicula({
  idIMBD: "tt3366447",
  titulo: "el padrino",
  director: " Francis ford coppola",
  anioDeEstreno: 1972,
  paisesDeOrigen: ["argentina", "italia"],
  generos: ["Action","aventura"],
  clasificacionIMBD: 8.5
});

unaPelicula.fichaTecnica();

*/