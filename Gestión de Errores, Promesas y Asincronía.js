//********************************************//
//********************************************//
//         funciones de orden superior        //
//             y manejo de errores            //
// *******************************************//
//********************************************//



// Metodos de Array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numeros);



const multiplo2 = numeros.map(num => num * 2);
console.log(`Metodo map:`, multiplo2);


const impares = numeros.filter(num => num % 2 !== 0)
console.log(`Metodo filter:`, impares);


const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual,
0)
console.log(`Metodo reduce:`, suma);


console.log('Metodo forEach:');
numeros.forEach(num => console.log(num))


const mayorA7 = numeros.some(num => num > 7)
console.log(`Metodo some:`, mayorA7);


const soloPares = numeros.every(num => num % 2 === 0)
console.log(`Metodo every:`, soloPares);


const imparMayorA4 = numeros.find(num => num % 2 !== 0 && num > 5)
console.log(`Metodo find:`, imparMayorA4);



// Metodos de Objetos
const objeto = { 
    a: 1, 
    b: 2, 
    c: 3 
}

const objeto2 = { 
    d: 4, 
    e: 5
}



const claves = Object.keys(objeto);
console.log(claves)


console.log(Object.values(objeto));


console.log(Object.entries(objeto));


const combinado = Object.assign(objeto, objeto2)
console.log(combinado);


Object.freeze(objeto)

objeto.f = 6

objeto.d = 0

console.log(objeto);



// setInterval y setTimeout (Simular Asincronia)

// let numero1 = prompt('Ingrese un numero:')
// let numero2 = prompt('Ingrese otro numero:')

// numero1 = Number(numero1)
// numero2 = Number(numero2)

// setTimeout(() => {
//     console.log('Esto se ejecuta después de 2 segundos');
//     console.log(numero1 + numero2);
// }, 2000);




// Manejo de Errores
const error = new Error ('hi')
console.log(error);
console.log(error.message);
console.error(error);
console.error(error.message);



try {
    // Código que puede lanzar un error
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Manejo del error
    console.error('Error capturado:', error.message);
}
// console.log(numeros);



function mayorDeEdad(number){
    if (number < 18) {
        throw new Error('Todavia eres joven para esto')
    } else {
       return 'Aceptado' 
    }
}

try {
    console.log(mayorDeEdad(15));
} catch (error) {
    console.error(error.message);
}
// console.log(numeros);



// Promesas
function operacionRandom(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const numeroRandom = Math.floor(Math.random() * 10)
            console.log(`Numero Aleatorio: ${numeroRandom}`);

            if (numeroRandom < 7) {
                resolve(`${numeroRandom} es menor a 7`)
            } else {
                reject(new Error(`Error: ${numeroRandom} es mayor a 7`))
            }
        }, 2000);
    } )
}

// Async y Await
async function probarOpRandom() {
    try {
        const message = await operacionRandom();
        console.log('Resultado:', message);
    } catch (error) {
        console.error('Error capturado:', error.message);
    }
}

probarOpRandom()

// .then y .catch
operacionRandom()
.then((mensaje) => {
    console.log(mensaje);
})
.catch((error) => {
    console.error(error.message);
})