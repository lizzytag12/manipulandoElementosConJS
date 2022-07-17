/* Bonus Track: */

// seleccionamos el body y le asignamos una clase
let cuerpo = document.querySelector('body')

cuerpo.classList.add('fondoCRUD')
 // seleccionamos titulo y le damos una clase, tambien cambiamos el color
let titulo = document.querySelector('h1')
titulo.classList.add('titulo')
titulo.style.color='white'

//encerramos en un div a las p, le asignamos una clase y le cambiamos el width
let seccion =document.querySelector('div')

seccion.classList.add('fondoTransparente')
seccion.style.width='50%'

// seleccionamos los parrafos y luego los recorremos para darles un estilo
let parrafos = document.querySelectorAll('p')
parrafos.forEach(element => {

    element.style.padding='10px'
    
});

