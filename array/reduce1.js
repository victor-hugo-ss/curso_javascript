const alunos = [
    { nome: 'Victor', nota: 7.3, bolsista: false },
    { nome: 'Luiz', nota: 9.2, bolsista: true },
    { nome: 'Manoel', nota: 9.8, bolsista: false },
    { nome: 'Douglas', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)
