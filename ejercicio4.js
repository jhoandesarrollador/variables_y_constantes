// Ejercicio 4: El programa debe solicitar al usuario que ingrese su nombre y año de nacimiento.
// Luego, debe calcular su edad basándose en el año actual y mostrar un mensaje en la consola.

// Declarar e inicializar el año actual
const currentYear = 2023;

// Solicitar al usuario que ingrese su nombre
const name = prompt("Por favor, ingresa tu nombre:");

// Solicitar al usuario que ingrese su año de nacimiento
const birthYear = parseInt(prompt("Por favor, ingresa tu año de nacimiento:"));

// Calcular la edad del usuario
const age = currentYear - birthYear;

// Mostrar el resultado en la consola
console.log(`Hola ${name}, Tienes ${age} años`);
