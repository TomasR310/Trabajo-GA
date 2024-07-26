//********************************************//
//********************************************//
//             Datos Estructurales            //
//                y sus Metodos               //
// *******************************************//
//********************************************//



//********************************************//
//                  Arrays                    //
// *******************************************//


// Homogéneo
let frutas = ['pera', 'banana', 'manzana', 'kiwi']
console.log(frutas)
console.log(frutas[0])
console.log(frutas.length)

// Hetereogéneo
let futbolista = ['delantero', 10, ['celeste', 'blanco'], false]
console.log(futbolista)
console.log(futbolista[2])
console.log(futbolista.length)


//********************************************//
//             Metodos de Arrays              //
// *******************************************//

/*

// Añadir datos (ultimo)
frutas.push('uva')
console.log('push', frutas)


// Eliminar datos (ultimo)
frutas.pop()
console.log('pop', frutas)


// Eliminar datos (primero)
let datoEliminado = frutas.shift()
console.log('dato eliminado:', datoEliminado)
console.log('shift', frutas)


// Remplazar, Añadir o Eliminar datos
frutas.splice(3,0, 'pera')
console.log('Agrego una nueva (splice)', frutas)

frutas.splice(2,1, 'uva')
console.log('Remplazo una (splice)', frutas)


// Unirlos en un String (Cadena)
let frutasJuntas = frutas.join(' - ')
console.log(frutasJuntas)


// Copia de una parte del Array
let copia = frutas.slice(2,4)
console.log('slice', copia)


// Invertir Orden
let revez = frutas.reverse()
console.log('reverse', revez)


// Combinar Arrays
let frutas2 = ['naranja', 'durazno']

let combinarFrutas = frutas.concat(frutas2)
console.log('concat', combinarFrutas)


// Ordenar los datos
combinarFrutas.sort()
console.log('sort', combinarFrutas)

*////////////////////////////////////////////////////////

//********************************************//
//                  Objetos                   //
// *******************************************//


let jugador1 = {
    nombre: 'Tomas',
    edad: 19,
    rango: 'Oro'
};

// Notacion de puntos 
console.log(jugador1.nombre)
console.log(jugador1.edad)
console.log(jugador1.rango)


let jugador2 ={
    nombre: 'Pedro',
    'localidad': 'Cordoba',
    5: 'Top 5'
};

// Notacion de corchetes
console.log(jugador2['nombre'])
console.log(jugador2['localidad'])
console.log(jugador2['5'])


//********************************************//
//            Metodos de objetos              //
// *******************************************//

/*

// Muestra las Claves en consola
console.log(Object.keys(jugador1))


// Muestra los Valores en consola
console.log(Object.values(jugador1))


// Muestra un Array con Clave-Valor en sub-arrays
console.log(Object.entries(jugador1))


// Asignarles las propiedades de un objeto a otro (Remplazandolo o Agregandose)
let auto = {
    color: 'Naranja',
    marca: 'Renault'
}

let auto2 = {
    color: 'Rojo',
    espacio: 4
}

Object.assign(auto, auto2)
console.log(auto)


// Congela el objeto (No se puede modificar, agregar o eliminar)
let jugador3 = {
    nombre: 'Daniel',
    edad: 20,
    rango: 'Diamante'
};

Object.freeze(jugador3)

jugador3.rango = 'Bronze'
jugador3.edad = 15
delete jugador3.nombre
console.log(jugador3)


// Sella el objeto (No se puede agregar o eliminar propiedades, pero si modificarlas)
let jugador4 = {
    nombre: 'Carlos',
    edad: 17,
    rango: 'Bronze'
};

Object.seal(jugador4)

delete jugador4.nombre
jugador4.top = 1
jugador4.rango = 'Diamante'
console.log(jugador4)

*////////////////////////////////////////////////////

//********************************************//
//                Combinacion                 //
//              Arrays y Objetos              //
// *******************************************//


// Array de Objetos
let participantes = [
    { numero: 1, nombre: 'Lautaro', soltero: false },
    { numero: 2, nombre: 'Mauro', soltero: true },
    { numero: 3, nombre: 'Axel', soltero: true }
]
console.log(participantes)


// Objeto con Arrays de valores
let receta = {
    nombre: 'Hamburguesa',
    ingredientes: ['Pan', 'Carne', 'Queso', 'Aderesos']
}
console.log(receta)

// Array de Arrays
let tabla = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(tabla[2][0])