/* 
Elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
Para isso, sua função deve receber três parâmetros,
“ax2”, “bx” e “c”, de tal modo que na equação: 3x² -5x + 12
os valores seriam respectivamente: 3, -5, 12.
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais.
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

function calcularDelta(ax, bx, c) {
    delta = (bx ** 2) - (4 * ax * c)
    return delta
}

function calcularBhaskara(ax, bx, c) {
    
    const delta = calcularDelta(ax, bx, c)

    if (delta > 0) {
        // Terá duas raízes
        let x1 = (- bx + (delta ** 0.5)) / (2 * ax)
        let x2 = (- bx - (delta ** 0.5)) / (2 * ax)
        resultados = {x1, x2}
        return console.log(resultados)
         
    } else if (delta < 0) {
        // Duas raízes reais e distintas
        let mensagem = console.log(`Delta é negativo: ${delta}`);
        return mensagem
        
    } else {
        // somente uma raiz
        let mensagem = console.log(`Somente uma raiz: ${delta}`);
        return mensagem
    }
}

calcularBhaskara(2, -3, -5)
calcularBhaskara(3, -5, 12)
calcularBhaskara(1, -2, 1)
