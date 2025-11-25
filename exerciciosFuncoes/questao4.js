/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function calculaDivisaoEResto(dividendo, divisor) {
    let divisao = dividendo / divisor
    let restoDivisao = dividendo % divisor

    const imprimirResultado = console.log(`Divisão: ${divisao}\nResto da divisão: ${restoDivisao}`);
    return imprimirResultado
}

calculaDivisaoEResto(25, 5)