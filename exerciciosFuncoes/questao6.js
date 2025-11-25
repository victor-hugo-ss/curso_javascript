/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function calcularJurosSimples(valor, taxa, tempo) {
    let juros = valor * (taxa / 100) * tempo
    let valorTotal = (valor + juros)
    imprimirResultado = console.log(`Juros: R$${juros.toFixed(2)}\nValor total com juros: R$${valorTotal.toFixed(2)}`);
    
    return imprimirResultado
}

function calcularJurosComposto(valor, taxa, tempo) {
    let taxaJuros = 1 + (taxa / 100)
    let jurosComposto = (valor * Math.pow(taxaJuros, tempo)).toFixed(2)
    let valorJuros = (jurosComposto - valor).toFixed(2)
    let valorParcelas = (jurosComposto / tempo).toFixed(2)
    imprimirResultado = console.log(`Valor final: R$${jurosComposto}\nValor do juros: R$${valorJuros}\nValor das parcelas: R$${valorParcelas}`);
    return imprimirResultado
}

console.log('Juros Simples:');
calcularJurosSimples(100, 10, 2)

console.log();

console.log('Juros Composto:');
calcularJurosComposto(100, 10, 2)