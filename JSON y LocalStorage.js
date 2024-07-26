//********************************************//
//********************************************//
//             JSON y LocalStorage            //
// *******************************************//
//********************************************//



//********************************************//
//                   JSON                     //
// *******************************************//



// Sintaxis JSON
// {
//     "nombre": "Juan Pérez",
//     "edad": 30,
//     "email": "juan.perez@example.com",
//     "direccion": {
//         "calle": "Calle Falsa 123",
//         "ciudad": "Ciudad Ejemplo"
//     },
//     "telefonos": [
//         "123-456-7890",
//         "098-765-4321"
//     ]
// }



// Covertir Datos a JSON (Recibimos)
let usuario = {
    nombre: 'Tomas',
    apellido: 'Romero',
    año: 18
}

let ropa = ['camisas', 'pantalones', 'zapatillas']

console.log(usuario);
console.log(typeof (usuario));
console.log(ropa);
console.log(typeof (ropa));


const jsonUsuario = JSON.stringify(usuario)
console.log(jsonUsuario);
const jsonRopa = JSON.stringify(ropa)
console.log(jsonRopa);



// Parsear/Covertir Datos a JSON (Enviamos)
let usuario2 = '{"nombre":"Luis","apellido":"Perez","edad":32}'
console.log(usuario2);
console.log(typeof (usuario2));


const objetoUsuario = JSON.parse(usuario2)
console.log(objetoUsuario);
console.log(typeof (objetoUsuario));



let ropa2 = '["Buzos","Camperas","gorras"]'
console.log(ropa2);
console.log(typeof (ropa2));


const objetoRopa = JSON.parse(ropa2)
console.log(objetoRopa);
console.log(typeof (objetoRopa));



//********************************************//
//               LocalStorage                 //
// *******************************************//



// Guardar valor
localStorage.setItem('nombre', 'Tomas')
localStorage.setItem('apellido', 'Romero')
localStorage.setItem('edad', '18')
localStorage.setItem('edades', 20)


// Recuperar valor (asociado a una clave)
const recuperar = localStorage.getItem('nombre')
console.log(recuperar);


// Eliminar valor (asociado a una clave)
localStorage.removeItem('edades')


// Eliminar todos los valores
localStorage.clear()



//********************************************//
//    Guardar Datos (JSON) en LocalStorage    //
// *******************************************//



localStorage.setItem('usuario', JSON.stringify(usuario))
localStorage.setItem('ropa', jsonRopa)

const infoUsuario = localStorage.getItem('usuario')
console.log(infoUsuario);
infoObjeto = JSON.parse(infoUsuario)
console.log(infoObjeto);

const infoRopa = localStorage.getItem('ropa')
console.log(infoRopa);
infoObjeto2 = JSON.parse(infoRopa)
console.log(infoObjeto2);

localStorage.clear()