const pilotos = ['Victor', 'Kaue', 'Rafinha', 'Douglas']

pilotos.pop() // Remove o último elemento da lista.
console.log(pilotos)

pilotos.push('Luiz') // Adiciona um novo elemento no final da lista.
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista.
console.log(pilotos)

pilotos.unshift('Rafael') // Adiciona o elemento no primeiro indice da lista [0].
console.log(pilotos)

// splice pode adicionar e remover elementos da lista.

// Adicionar
pilotos.splice(2, 0, 'Douglas', 'Matheus') // Índice 2, 0 = não remove ninguem, Parâmetros para adicionar.
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // 3 = Remove a partir do índice 3, 1 = Números de elementos a partir do índice informado.
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Gera uma nova lista a partir do indice informado.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Cria uma lista a partir do primeiro parâmetro, não incluindo o valor do ultimo parâmetro.
console.log(algunsPilotos2)