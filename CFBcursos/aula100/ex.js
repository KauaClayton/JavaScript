class Jogador{
    constructor(nome){
        this.nome = nome
        this.id =Symbol()
    }
}

let jogadores = [new Jogador('Pelé'), new Jogador('Neymar'), new Jogador('Ronaldinho'), new Jogador('Messi'), new Jogador('Pelé'), new Jogador('Ronaldinho')]

let s1 = jogadores[0].id

jogadores = jogadores.filter((j)=>{
    return j.nome !== 'Pelé' 
})
console.log(jogadores)