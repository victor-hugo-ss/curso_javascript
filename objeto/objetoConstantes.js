// pessoa -> 123 -> {...}
const pessoa = { nome: 'Victor' }
pessoa.nome = 'Hugo'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Juliana' }

// Congela o objeto e não poderá ser feita nenhuma alteração
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa)