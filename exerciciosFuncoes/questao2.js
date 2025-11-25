/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

function identificaTipoTriangulo(a, b, c) {
    
    let triangulo = ''

    if (a !== b && a !== c && b !== c) {
        triangulo = 'Escaleno'
    } else if (a === b && a === c && b === c) {
        triangulo = 'Equilatero'
    } else if (a === b || a === c || b === c) {
        triangulo = 'Isóceles'
    }

    return `Triangulo é ${triangulo}.`
}

console.log(identificaTipoTriangulo(2, 1, 1));
