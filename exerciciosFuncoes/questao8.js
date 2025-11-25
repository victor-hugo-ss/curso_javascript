/* 
Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”
escreva uma função que ao recebê-la irá comparar os valores um a um
e irá retornar um vetor com o número de vezes que ele bateu seu recorde
de maior número de pontos e quando fez seu pior jogo (Número do pior jogo).

Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor
pontuação e a pior pontuação aconteceu no sétimo jogo.)
*/

function verificaPontuacao(pontuacoes) {

    pontuacoes = pontuacoes.split(", ").map(Number)

    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    let quantidadeVezes = 0
    let numeroPartida = 0
    
    for (let i = 0; i < pontuacoes.length; i++) {
        let ponto = pontuacoes[i]
        
        if (ponto > maiorPontuacao) {
            maiorPontuacao = ponto
            quantidadeVezes++
        } else if (ponto < menorPontuacao) {
            menorPontuacao = ponto
            numeroPartida = i + 1
        }
    }

    const mensagem = `Bateu o record: ${quantidadeVezes} vezes\nA pior pontuação foi no ${numeroPartida}º jogo.`

    return mensagem
}

let string = "10, 20, 20, 8, 25, 3, 0, 30, 1"
console.log(verificaPontuacao(string));
console.log();
console.log(verificaPontuacao("2, 4, 7, 3, 4, 6, 8, 9, 0, 7, 5, 4, 3, 8"));
