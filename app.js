let numero = prompt("Ingresa un numero")
let numeroFormateado = parseInt(numero)
console.log(typeof numero)
console.log(typeof numeroFormateado)

let resultado = numeroFormateado + numeroFormateado
let resta = 2 - numeroFormateado
let multiplicacion = numeroFormateado * 3
let division = numeroFormateado / 2
let divisionProhibida  = numeroFormateado / 0
let modulo = numeroFormateado % 4
/*
El 0 es el módulo o resto:
16  |__4___
 0/    4

El 3 es el módulo o resto:
19  |__4___
 3/    4
*/
console.log(Math)

console.log("Resultado " + resultado)
console.log('Resultado ' + resultado)
console.log(`Resultado ${resultado+resultado}`)

console.log(`Resta ${resta}`)

console.log(`Multiplicación: ${multiplicacion}`)

console.log(`División: ${division}`)

console.log(`División prohibida: ${divisionProhibida}`)
console.log(`Resto: ${modulo}`)


