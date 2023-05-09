function clicou(){
    var resp = document.querySelector('p#res')
    resp.innerHTML += '<h2>Contando de 1 até 10</h2>'
    s = 0
    while(s <= 8){
        s ++
        resp.innerHTML += s + '\uD83D\uDC49'
    }                                                                                                                                                                                      
    resp.innerHTML += '10 '
}