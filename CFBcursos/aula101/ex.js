const nome = Symbol('nome')
const numero = Symbol('numero')
const coruniforme = Symbol('coruniforme')

const jogador = {
    [nome]:'j1',
    [numero]:'10',
    [coruniforme]:'amarelo'
}

console.log(jogador[nome])
console.log(jogador[numero])
console.log(jogador[coruniforme])
