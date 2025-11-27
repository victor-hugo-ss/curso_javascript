const alunos = [
    { nome: 'Victor', nota: 7.3, bolsista: false },
    { nome: 'Luiz', nota: 9.2, bolsista: true },
    { nome: 'Manoel', nota: 9.8, bolsista: false },
    { nome: 'Douglas', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsitas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const bolsistas = alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas)
console.log(bolsistas)

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
const bolsista = alunos.map(aluno => aluno.bolsista).reduce(algumBolsista)
console.log(bolsista)
