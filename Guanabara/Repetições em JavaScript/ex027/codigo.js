function clicou(){
    var resp = document.querySelector('p#res')
    var num = Number(document.querySelector('input#num').value)
    var s = 1
    resp.innerHTML += `<h2>Tabuada do ${num}</h2>`
    while(s <= 10){
        resp.innerHTML += `<p>${num} x ${s} = ${num*s}</P>`
        s++
    }
}

function limpar(){
    var resp = document.querySelector('p#res')
    resp.innerHTML = ''
}