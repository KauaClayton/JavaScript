function Contador(){
    var resp = document.querySelector('p#res')
    var inicio = Number(document.querySelector('input#ini').value)
    var fim = Number(document.querySelector('input#fim').value)
    var incre = Number(document.querySelector('input#inc').value)
    var sec = document.querySelector('section#sec')

    resp.innerHTML += '<p>Contando...</p>'
    if(inicio < fim){
        sec.style = 'Height:400px'
        for(inicio; inicio <= fim; inicio += incre){
            resp.innerHTML += `${inicio} \uD83D\uDC49`
        }
        resp.innerHTML += '\uD83C\uDFC1'
    }
    else if(inicio > fim){
        sec.style = 'Height: 400px'
        for(inicio; inicio >= fim; inicio -= incre){
            resp.innerHTML += `${inicio} \uD83D\uDC49`
        }
        resp.innerHTML += '\uD83C\uDFC1'
    }
}