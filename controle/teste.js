const imprimirDia = function (data) {
    switch (data) {
        case 0:
            day = 'Domingo'
            break;
        
        case 1:
            day = 'Segunda-feira'
            break;

        case 2:
            day = 'Terça-feira'
            break;

        case 3:
            day = 'Quarta-feira'
            break;

        case 4:
            day = 'Quinta-feira'
            break;

        case 5:
            day = 'Sexta-feira'
            break;

        case 6:
            day = 'Sábado'
            break;
    }
    console.log(`Hoje é ${day}.`);
}

let dia = new Date('2025/11/19').getDay()
imprimirDia(dia)

const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

const ds = new Date().getDay()

let texto = `Hoje é ${diasSemana[ds]}-feira.`

console.log(texto);
