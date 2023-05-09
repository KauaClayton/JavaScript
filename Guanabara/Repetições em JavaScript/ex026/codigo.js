function clicou(){
    var resp = document.querySelector('p#res')
    var ni = Number(document.querySelector('input#ini').value)
    var fi = Number(document.querySelector('input#fim').value)
    
    resp.innerHTML += `<h2>Contando de ${ni} até ${fi}</h2>`
    if( ni < fi ){
        s = ni
        while( s <= fi){
            resp.innerHTML += `${s} \uD83D\uDC49`
            s++
        }
    }
    else if(ni > fi){
        s = ni
        while(s >= fi){
            resp.innerHTML += `${s} \uD83D\uDC49`
            s--
        }
    }
    resp.innerHTML += '\uD83C\uDFC1'
}