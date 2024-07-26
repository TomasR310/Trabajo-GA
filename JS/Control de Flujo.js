//********************************************//
//********************************************//
//              Control de Flujo              //
// *******************************************//
//********************************************//



// OperadorAnd
let comparacion1 = 15 < 12

let comparacion2 = 7 == 7

console.log(comparacion1 && comparacion2)

// OperadorOr (Y otra forma de mostrar, y guardar, la conjucacion)
let resultado1 = comparacion1 || comparacion2
console.log(resultado1)

// OperadorNOT
let resultado2 = comparacion1 && comparacion2
console.log('Comparativa Normal:', resultado2)
console.log('Comparativa Negada:', !resultado2)


// if, if-else
let numero1 = 10

let numero2 = 20

if (numero1 > numero2){
    console.log('Es Mayor')
}
else{
    console.log('Es Menor')
}

// else if
let edad = 15

if (edad >= 18){
    console.log('Es un Adulto')
}
else if (edad >= 12){
    console.log('Es un Adolecente')
}
else{
    console.log('Es un Niño')
}


// switch
let mes = 10

switch (mes) {
    case 1:
        console.log('Es Enero')
        break;
    case 2:
        console.log('Es Febrero')
        break;
    case 3:
        console.log('Es Marzo')
        break;
    case 4:
        console.log('Es Abril')
        break;
    case 5:
        console.log('Es Mayo')
        break;
    case 6:
        console.log('Es Junio')
        break;
    case 7:
        console.log('Es Julio')
        break;
    case 8:
        console.log('Es Agosto')
        break;
    case 9:
        console.log('Es Septiembre')
        break;
    case 10:
        console.log('Es Octubre')
        break;
    case 11:
        console.log('Es Noviembre')
        break;
    case 12:
        console.log('Es Diciembre')
        break;
    default:
        console.log('Numero no valido')
        break;
}


// for
let i = 0

for (i; i < 6; i++){
    console.log(i)
}
console.log('Contador for')


// for of
let marcas = ['CocaCola', 'Pepsi', 'RedBull', 'Levite']

for (bebidas of marcas) {
    console.log(bebidas)
}


// for in
let vehiculo = {
    marca: 'Renault',
    color: 'Rojo',
    numeroPatente: 27,
    vendido: true
}

for(auto in vehiculo) {
    console.log(`${auto} = ${vehiculo[auto]}`)
}


// while
let contador = 0

while (contador < 4){
    console.log(contador)
    contador++
}
console.log('Contador while')

// do while
// let palabra;

// do{
//     palabra = prompt('Escribe una palabra al azar(escribe "stop" para detener):')
//     console.log(`Ha colocado: ${palabra}`)
// } while (palabra.toLowerCase() !== 'stop')