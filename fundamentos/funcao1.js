// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(`A soma de ${a} + ${b} =`, a + b);
};

imprimirSoma(6, 6);
imprimirSoma(3);
imprimirSoma(3, 4, 65, 3);
imprimirSoma();

// Funcao com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());
