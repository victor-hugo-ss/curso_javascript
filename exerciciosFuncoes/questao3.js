// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

const calculaExponenciacao = function (base, expoente) {
    let resultado = Math.pow(base, expoente)
    let imprimirResultado = `O resultado de ${base} elevado a ${expoente} é: ${resultado}`
    return imprimirResultado
}

console.log(calculaExponenciacao(2, 4));
