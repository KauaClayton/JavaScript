var agora = new Date()
var diasem = agora.getDay()
/*
    domingo - 0
    sabado - 6
*/

switch(diasem){
    case 0:
        console.log('olá, hoje é domingo')
        break
    case 1:
        console.log('olá, boa segunda-feira')
        break
    case 2:
        console.log('opa, terça abençoada')
        break
    case 3:
        console.log('epa! já é quarta-feira')
        break
    case 4:
        console.log('Já toma sem cinta, ja tamo na quinta')
        break
    case 5:
        console.log('Bem vindo a feira de sexta-feira')
        break
    case 6:
        console.log('Já é sabado meus bacanos')
        break
    default:
        console.log('[ERRO] Deu número inválido!')
}