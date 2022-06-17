//https://drive.google.com/file/d/1HaXmvTvBslDJvd13BJEUSBFoWE0YQaWT/view



// Crear una lista de supermercado con al menos 10 items
// Resuelva las respuestas, de la misma manera que se encuentra la primera

// (a) ¿Qué tenés que comprar primero?
// console.log(`Primero tengo que comprar${}`)

// (b) ¿Qué tenés que comprar último?

// (c) ¿Cuántos productos tenés que comprar?

let listaAlmacen = ['leche', 'huevos', 'alfajores', 'harina', 'fideos', 'yerba', 'azucar', 'galletitas', 'monster', 'golosina'];
let lastItem = listaAlmacen[listaAlmacen.length-1];

console.log('-----Punto 1 - a,b y c-----');
console.log('Lo primero que tengo que comprar es: ' + listaAlmacen [0]);
console.log('Lo ultimo que tengo que comprar es: ' + lastItem);
console.log('La cantidad de productos que tengo que comprar es de: ' + listaAlmacen.length);

// -------------------------------------------------

console.log('-----Punto 2-----');

// Crear un usuario con tus datos:
// * Username
// * Name
// * Age
// * List of hobbies (OJO: dice lista de hobbies)
// * City
// * student: true or false

// Resuelva las respuestas, de la misma manera que se encuentra la primera

let user = {
    Username:'Shadowof',
    Name:'Cristian',
    Age:22,
    Hobbies: ['Programar', 'Jardineria', 'Techno', 'Gimnasio'],
    City:'Buenos Aires',
    Student:true
}

console.log(user);


console.log('-------(a)-------');
// (a) ¿Cómo es tu username?
// console.log(`Mi username es ${}`)
console.log(`Mi Username es: ${user.Username}`);


console.log('-------(b)-------');
// (b) ¿Cómo es tu nombre?
console.log(`Mi Nombre es: ${user.Name}`);


console.log('-------(c)-------');
// (c) ¿Cuál es tu edad?
// (Para les que se animen: acá podrían hacer una variable por fuera del
// objeto que valide si son mayores de edad o no, como vimos en clases). 

if (user.Age > 18) {
    console.log(`El usuario ${user.Name} es mayor de edad, con ${user.Age} años!`);
} else {
    console.log(`Ups, parece que ${user.Name} es menor de edad, con tan solo ${user.Age} años!`);
}


console.log('-------(d)-------');
// (d) ¿Cuáles son tus hobbies? ¿Cuántos tenés?

let misHobbies = 'Hobbies'
console.log('Mis hobbies son: ' + user[misHobbies] + "\n" + "En total son " + user.Hobbies.length + ' hobbies');


console.log('-------(e)-------');
// (e) ¿Estás estudiando actualmente?
// Ojo con esta: el student = false/true va a devolverles un booleano,
// el desafío es convertir ese boolean en una respuesta friendly
// para el humano que está leyendo sus respuestas.

let estudiaActualmente = user.Student ? `${user.Name} se encuentra estudiando actualmente.`  : `${user.Name} NO se encuentra estudiando actualmente.`
console.log(estudiaActualmente);


console.log('-------(f)-------');
// (f) ¿De dónde sos?
console.log(`Soy de ${user.City}`);




// SACAR CAPTURA DE LAS RESPUESTAS EN LA CONSOLA Y SUBIRLAS A DISCORD ASÍ TODOS NOS CONOCEMOS UN TOQUE MEJOR :)