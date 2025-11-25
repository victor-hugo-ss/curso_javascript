/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function operacoes(x, y) {
    let soma = x + y
    let sub = x - y
    let div = x / y
    let mult = x * y
    const imprimirResultado = `Soma: ${soma}\nSubtração: ${sub}\nMultiplicação: ${mult}\nDivisão: ${div}\n`
    return console.log(imprimirResultado);
}

operacoes(25, 5)