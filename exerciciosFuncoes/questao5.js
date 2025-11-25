/* 
Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

function mostrarDinheiro(dinheiro) {
    const dinheiroFormatado = dinheiro.toFixed(2).toString().replace('.', ',')
    const imprimirResultado = console.log(`R$${dinheiroFormatado}`);
    return imprimirResultado
}

mostrarDinheiro(4.30)