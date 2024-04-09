


// Obtener el peso del usuario
const peso = prompt("¿Cuál es tu peso en kilogramos?");

// Obtener la altura del usuario
const altura = prompt("¿Cuál es tu altura en metros?");

// Calcular el IMC
const imc = peso / (altura * altura);

// Mostrar el resultado al usuario
console.log("Tu IMC es:", imc.toFixed(2));