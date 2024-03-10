let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado1 === lado3) {
        console.log("Triângulo equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Triângulo isósceles.");
    } else {
        console.log("Triângulo escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo válido.");
}