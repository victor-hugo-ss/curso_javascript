const escola = [
    {
        nome: 'Turma M1',
        alunos: [
            {
                aluno: 'Victor',
                nota: 8.1
            },
            {
                aluno: 'Ana',
                nota: 9.3
            }
        ]
    },
    {
        nome: 'Turma M2',
        alunos: [
            {
                aluno: 'Douglas',
                nota: 8.9
            },
            {
                aluno: 'Lizete',
                nota: 7.3
            }
        ]
    }
]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.flatMap(getNotasTurma)
console.log(notas1)

