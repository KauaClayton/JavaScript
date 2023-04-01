var resp = document.querySelector('p#res')
function clicou(){
    var num = Math.random()*100
    resp.innerHTML += '<p>Acabei de pensar no número ' + num.toFixed(0) + '</p>'
}

function limpou(){
    resp.innerHTML = 'Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100'
}

