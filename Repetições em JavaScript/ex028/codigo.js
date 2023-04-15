function clicou(){
    var resp = document.querySelector('p#res')
    var cont = Number(document.querySelector('input#num').value)
    var resul = 
    resp.innerHTML += `<h2>Calculando fatorial de ${cont}</h2>`
    while(cont > 1){
        resp.innerHTML += `${cont} x `
        resul = resul*cont
        cont--
    }
    resp.innerHTML += ` 1 = <strong>${resul}</strong>`

    
}