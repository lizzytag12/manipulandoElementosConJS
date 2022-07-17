/*                    Micro desafío - Paso 2:      */

/* 1- Crear un archivo JavaScript: /public/js//moviesList.js, y vincularlo con el archivo:
/views//moviesList.ejs. */

console.log("successfull!");

/* 2- Desde el archivo /public/js/moviesList.js, capturar los siguientes elementos: <body>
y <h1>, ubicados en el archivo /views//moviesList.ejs. */

let cuerpo = document.querySelector('body')


let titulo = document.querySelector('h1')


/* 3- Haciendo uso del prompt, preguntar al usuario: “¿Desea modo oscuro?”. Si la
respuesta es afirmativa, agregar a la etiqueta <body> un color de fondo: #7f7f7f​, y
la clase: fondoMoviesList. */

 let modoOscuro = prompt("¿Desea modo oscuro? \n-si \n-no")

if(modoOscuro === "si"){
   cuerpo.style.backgroundColor='#7f7f7f';
   cuerpo.classList.add('fondoMoviesList')

}
/* 4- Agregar a la etiqueta <h1> el mensaje: “LISTADO DE PELÍCULAS”. */

titulo.innerText = "LISTADO DE PELÍCULAS"

/* 5- Agregar a la etiqueta <h1> los siguientes estilos:
 Color de la fuente: white. Color de fondo: teal.  Relleno: 20px.  */

titulo.style.color="white"
titulo.style.backgroundColor="teal"
titulo.style.padding="20px" 
