/** Ejercicio 
 * 4. Cálculo del perímetro de un cuadrado
Solicita al usuario el valor del lado de un cuadrado (usando prompt) y muestra por pantalla su perímetro.
Fórmula: Perímetro = lado × 4
 */

const lado = prompt("Ingrese un lado")

console.log("Se recibio el valor", lado)
console.log("Y su tipo de dato es", typeof lado)

let perimetro = lado * 4;

document.writeln(`El perimetro del cuadrado de lado ${lado} es ${perimetro}`)