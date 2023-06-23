const caixa = document.querySelector('#caixa')

let musicas= new Set(['Música1', 'Músicaboa', 'Música10'])

musicas.add('MusicaMuitoLegal')
musicas.add('Musica1')
musicas.add('Musica10')
musicas.add('Musica1')
musicas.delete('Música10')
// musicas.forEach((el)=>{
//     caixa.innerHTML += `${el}, <br>`
// })
// console.log(musicas)

for(let music of musicas){
    caixa.innerHTML += `${music} <br>`
}