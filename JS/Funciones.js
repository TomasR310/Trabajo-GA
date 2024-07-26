//********************************************//
//********************************************//
//                 Funciones                  //
// *******************************************//
//********************************************//



// Funciones Declarativas
function saludar() {
    console.log('Buen Dia!')
}

saludar()

resta(10, 5)

function resta(a, b) {
    console.log(a - b)
}


// Funciones expresivas
const multiplicar = function(a, b) {
    console.log(a * b)
}

multiplicar(4, 5)


// Funciones Flecha
let suma = (a, b) => a + b;

console.log(suma(2, 1))

let cubo = x => x * x * x;

console.log(cubo(2))

let bienvenida = nombre => console.log(`Buenas Tardes ${nombre}`);

bienvenida('Tomas')

// Callbacks
function mostrarResultado(resultado) {
    console.log(`Resultado: ${resultado}`)
}

function procesarDatos(datos, callback) {
    const resultado = datos.map(dato => dato * 2)

    callback(resultado)
}

const datos = [1, 2, 3, 4, 5]
procesarDatos(datos, mostrarResultado)



//********************************************//
//                ACTIVIDADES
// *******************************************//



function calcularPromedios(num) {
    let suma = num.reduce((total, longitud) => total + longitud, 0);
    return suma / num.length;
}

let promedio = [10, 20, 30, 40, 50]

console.log(calcularPromedios(promedio))


function pares(num) {
    let resto = num.filter(pares => pares % 2 === 0);
    return resto
}

let numeros = [1, 2, 3, 4, 5, 6]

console.log(pares(numeros))


function filtroPalabras(string, length) {
    let filtro = string.filter(longitud => longitud.length > length);
    return filtro
}

let palabras = ["casa", "perro", "gato", "coche", "bicicleta"]

console.log(filtroPalabras(palabras, 4))