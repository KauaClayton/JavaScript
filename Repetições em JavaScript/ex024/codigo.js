function clicou(){
    var resp = document.querySelector('p#res')
    s = 10
    resp.innerHTML += '<h2>Contando regressivamente'
    while( s > 1){
        resp.innerHTML += `${s} \uD83D\uDC49`
        s --
    }
    resp.innerHTML += '1'
}