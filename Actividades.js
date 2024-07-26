//********************************************//
//********************************************//
//            Algunas Actividades             //
// *******************************************//
//********************************************//

/*Clasificador de números:
Escribe un programa que lea un número e imprima si es positivo, negativo o cero.*/

// let numero = -2

// if (numero > 0 ) {
//     alert(`Tu numero (${numero}) es Positivo`)
// }
// else if (numero < 0) {
//     alert(`Tu numero (${numero}) es Negativo`)
// }
// else {
//     alert(`Tu numero (${numero}) es cero`)
// }


/*Comprobador de mayoría de edad:
Crea un programa que pida la edad del usuario. Si tiene 18 años o más, muestra un mensaje que diga "Eres mayor de edad". Si no, muestra "Eres menor de edad".*/

// let edad = prompt('Escribe tu Edad aqui:')
// edad = Number(edad)

// if (edad >= 18) {
//     alert('Eres mayor de edad')
// }
// else {
//     alert('Eres menor de edad')
// }


/*Calculadora básica:
Diseña un script que pida dos números y una operación a realizar entre ellos (suma, resta, multiplicación, división). Realiza la operación y muestra el resultado. Si se elige división, asegúrate de que no se intente dividir por cero.*/

let numero1 = 10

let numero2 = 5

let suma = numero1 + numero2
console.log(suma)

let resta = numero1 - numero2
console.log(resta)

let multiplicación = numero1 * numero2
console.log(multiplicación)

let división = numero1 / numero2
console.log(división)


/*Descuentos en tienda:
Un comercio ofrece un descuento del 15% si la compra es mayor a 1000 pesos. Escribe un programa que dado el total de la compra, calcule el total a pagar considerando el descuento si aplica.*/


/*Clasificación por rangos de edad:
Escribe un programa que pida la edad de una persona y clasifique su etapa de vida: "Niño" (0-12 años), "Adolescente" (13-17 años), "Adulto" (18-64 años) o "Adulto mayor" (65 años en adelante).*/


/*Evaluador de temperatura:
Crea un programa que, dada una temperatura en grados Celsius, indique si hace mucho calor (más de 30 grados), calor (entre 20 y 30 grados), fresco (entre 10 y 20 grados) o frío (menos de 10 grados).*/


/*Validador de acceso:
Escribe un script que pida un nombre de usuario y contraseña. Si el nombre es "usuario1" y la contraseña es "123456", muestra "Acceso concedido". De lo contrario, muestra "Acceso denegado".*/

let usuario = prompt('Escriba su Nombre de Usuario')

let contraseña = prompt('Escriba su Contraseña de Usuario')

usuario = usuario.toLowerCase

contraseña = Number(contraseña)

if (usuario = 'usuario1' && contraseña = 123456) {
    alert('Acceso concedido')
}
else {
    alert('Acceso denegado')
}