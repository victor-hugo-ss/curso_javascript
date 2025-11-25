const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(6, 5)
imprimirResultado(6, 5, soma)
imprimirResultado(8, 5, function(x, y) {
    return x - y
})
imprimirResultado(6, 8, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa!');  
    }
}

pessoa.falar()