const caixa = document.querySelector('#caixa')
let mapa = new Map()

mapa.set('curso', 'Javascript')
mapa.set(10, 'CFB CURSOS')
mapa.set(1, 100)
mapa.set('canal', 100)

console.log(mapa)
mapa.delete('canal')
let pes = 1
caixa.innerHTML =mapa.get('curso')
if(mapa.has(pes)){
    caixa.innerHTML += '<br> a chave existe na coleção com o valor:' + mapa.get(pes)
}
else{
    caixa.innerHTML += '<br> a chave não existe na coleção'
}

caixa.innerHTML += `O tamanho do mapa é: ${mapa.size}`

mapa.forEach((el)=>{
    console.log(el)
})