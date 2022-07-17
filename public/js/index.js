/**                        Micro desafío - Paso 1:           */

/* 1-Crear un archivo JavaScript: /public/js//index.js, y vincularlo con el archivo:
/views//index.ejs.*/
console.log('index.js successfull!');

/*- 2-Desde el archivo /public/js/index.js, capturar los siguientes elementos: <main>,
<h2>, <a> y <p>, ubicados en el archivo: /views//index.ejs.*/

let main = document.querySelector('main')  // main

/*  main.style.display='block'; */

let subtitulo =  document.querySelectorAll('h2')    //h2
console.log(subtitulo);

let hipervinculo = document.querySelector('h2 a') // <a>
console.log(hipervinculo);

let parrafos = document.querySelectorAll('.informacion p') // p 
console.log(parrafos);


/* 3- Haciendo uso del prompt, indicar al usuario que: “Ingrese su nombre”. */

 let nombre = prompt('Ingrese su nombre') 

/* 4- En caso de que el usuario no coloque su nombre, a la etiqueta <h2>, se le debe
agregar la palabra “Invitado”. En caso contrario, se le debe agregar el nombre que el
usuario ingresó. */

if(nombre){

    document.querySelector('h2.subtitulo').innerHTML += nombre

 }else{
    
    document.querySelector('h2.subtitulo').innerHTML += "Invitado"
 
}

/* 5- Agregar a la etiqueta <h2> el estilo uppercase. */

let enMayuscula=document.querySelector('h2.subtitulo').style.textTransform='uppercase' 

/* 6- A la etiqueta <a>, colocarle el estilo correspondiente para que asuma el siguiente
color: #E51B3E. */

hipervinculo.style.color='#E51B3E';

/* 7- Mediante el confirm, preguntar al usuario “¿Desea colocar un fondo de
pantalla?”. Si la respuesta es afirmativa por parte del usuario, agregar al <body> la
clase “fondo”. */

let pregunta = window.confirm("¿Desea colocar un fondo de pantalla?");

let fondo = document.querySelector('body');

if(pregunta){
    fondo.classList.add('fondo')
}
/* 8- A todos los párrafos que fueron capturados, asignar a los pares la clase:
“descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”. */

for (let index = 0; index < parrafos.length; index++) {
   
    if(index % 2 === 0){
        parrafos[index].classList.add('destacadoPar')
        console.log('test')
    }else{
        parrafos[index].classList.add('destacadoImpar')
        console.log('test')
    }
    
}
/* 9- Finalmente, establecer como visible a la etiqueta <main> en el browser o
navegador, aplicando el estilo: display : block.
 */

let visible = window.confirm('Desea ver el contenido de nuestra pagina?')

if(visible){
    main.style.display='block'
}

