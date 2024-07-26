//********************************************//
//********************************************//
//            Manipulacion del DOM            //
//                 y Eventos                  //
// *******************************************//
//********************************************//


/*
// Acceso al DOM (Forma Obsoleta/Anterior)
// Id
let repositorio = document.getElementById('RepositorioGit')
console.log(repositorio)

// Class
let cuenta = document.getElementsByClassName('Cuenta_GitHub')
console.log(cuenta)


// TagName
let etiquetaA = document.getElementsByTagName('a')
console.log(etiquetaA)
*/


// Acceso al DOM (Moderna)
let contenedor1 = document.querySelector('.navegar')
console.log(contenedor1)

let contenedor2 = document.querySelector('#RepositorioGit')
console.log(contenedor2)

let contenedor3 = document.querySelector('header')
console.log(contenedor3)


let contenedor4 = document.querySelectorAll('.navegar a')
console.log(contenedor4)

let contenedor5 = document.querySelectorAll('section span')
console.log(contenedor5)



// Manipulacion de Elementos

// // Cambiar Contenido
// let texto1 = contenedor3.innerText = 'hola gente'
// console.log(texto1)

// let texto2 = contenedor3.innerHTML = '<h1>como estan?</h1>'
// console.log(texto2)

// let jugador = {
//     nombre: 'Azul',
//     apellido: 'Perez',
//     edad: 19
// }

// let texto3 = contenedor3.innerHTML = `<h1>Bienvenido ${jugador.nombre} ${jugador.apellido}!, tienes ${jugador.edad} años!!</h1>`
// console.log(texto3)

// // Cambiar estilo
// let boton = document.querySelector('button')
// boton.style.backgroundColor = 'green';
// boton.style.padding = '50px';
// boton.style.borderRadius = '0';



// Creacion y Eliminacion de Nodos
const newSection = document.createElement('section')
newSection.innerText = 'Nueva Seccion'
newSection.style.color = 'red'
document.body.append(newSection)

newSection.remove()


// Para 'Manipulacion de Atributos'
const newA = document.createElement('a')
newA.innerText = 'Nueva Etiqueta a'
newA.style.color = 'yellow'
document.body.append(newA)

newA.classList.add('nueva-clase')



// Para 'Eventos (su asignacion)'
const newButton = document.createElement('button')
newButton.innerText = 'Toca aqui'
newButton.style.backgroundColor = 'green';
newButton.style.padding = '10px';
newButton.style.borderRadius = '0';
document.body.append(newButton)

newButton.classList.add('nuevo-boton')



// Manipulacion de Atributos
// No me Permite agregarle el atributo 'href'
const link = document.querySelector('a.nueva-clase')
let atributoAgregado = link.getAttribute('href')
console.log(link)

// const img = document.querySelector('img')
// img.removeAttribute('src')



// Clases CSS
let figure = document.querySelector('figure')
figure.classList.add('imagen')
figure.classList.remove('imagen')



// Eventos (su asignacion)
const boton = document.querySelector('.nuevo-boton')
boton.addEventListener('click', function() {
    console.log('Presionaste el boton')
    alert('Presionaste el Boton')
})