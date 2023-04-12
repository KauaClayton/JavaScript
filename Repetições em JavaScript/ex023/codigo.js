function clicou(){
    var resp = document.querySelector('p#res')
    var s = 1
    resp.innerHTML += '<h2>Contando de 1 a 10(só os pares)'
    while(s < 10){
        if(s%2==0){
            resp.innerHTML += `${s} \uD83D\uDC49`
           
        }
        s++
    }
    resp.innerHTML += '10'

}