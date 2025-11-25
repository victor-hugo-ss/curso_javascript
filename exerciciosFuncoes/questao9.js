/* 

Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação:
Todo aluno recebe uma nota de 0 a 100.

Alunos com nota abaixo de 40 são reprovados.

As notas possuem a seguinte regra de arredondamento:

Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5.

Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno.

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno.
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
*/

function calcularNota(nota) {

    let verificaNumero = Math.ceil(nota / 5)
    let proximoMultiplo = verificaNumero * 5
    let diferença = proximoMultiplo - nota
    let mensagem = ''

    if (nota >= 0 && nota < 38) {
        mensagem = `Aluno reprovado com nota: ${nota}`

    } else if (nota >= 38 && nota <= 100) {
        if (diferença < 3 ) {
            nota = proximoMultiplo
            mensagem = `Aluno aprovado com nota: ${nota}`
        } else {
            mensagem = `Aluno aprovado com nota: ${nota}`
        }
    } else if (nota < 0 || nota > 100) {
        mensagem = `Nota inválida: ${nota}`
    } else {
        mensagem = `Nota inválida: ${nota}`
    }
    
    return mensagem
}

console.log(calcularNota(38));
