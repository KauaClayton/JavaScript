function clicou(){
    var resp = document.querySelector('p#res')
    s = 1
    resp.innerHTML += '<h2>Contando marcando os pares</h2>'
    while( s < 10){
        if(s%2 == 0){
            resp.innerHTML += `<mark><strong>${s}</strong></mark>\uD83D\uDC49`
        }
        else{
            resp.innerHTML += `${s} \uD83D\uDC49`
        }
        s++
    }
    resp.innerHTML += '<mark><strong>10</strong></mark>'
}