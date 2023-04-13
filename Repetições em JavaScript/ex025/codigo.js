function clicou(){
    var resp = window.document.querySelector('p#res')
    var final = Number(document.querySelector('input#inum').value)
    var s = 0
    resp.innerHTML += `<h2>Contando de 0 até ${final}</h2>`
    while (s < final){
        resp.innerHTML += `${s} \uD83D\uDC49`
        s++
    }
    resp.innerHTML += s + ' \uD83C\uDFC1'
}