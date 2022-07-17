/*          Micro desafío - Paso 3:        */

/* 1- Crear un archivo JavaScript: /public/js//moviesAdd.js, y vincularlo con el archivo;
/views//moviesAdd.ejs. */

console.log("successfull link");

/* 2- Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>,
<section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs. */

let titulo =document.querySelector('h1');

let seccion = document.querySelector('section')

let article = document.querySelector('article')

/* 3-  Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”. */

titulo.innerText = "AGREGAR PELICULAS";

/* 4- Agregar a la etiqueta <h1> la clase: “titulo”. */

titulo.classList.add('titulo')

/* 6-  Agregar al artículo la clase: “fondoTransparente”. */

article.classList.add('fondoTransparente')

/* 7- Agregar a la sección la clase: “fondoCRUD”. */

seccion.classList.add('fondoCRUD')

