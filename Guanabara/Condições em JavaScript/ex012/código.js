function impa(){
    var resp = document.querySelector('p#res')
    var num = window.prompt('Qual o número?')
    var resul = Number(num.slice(-1))
    
    if(resul%2 == 0){
        resp.innerHTML = `<p>O número ${num} é <strong>PAR</strong`
    }
    else if(resul%2 != 0){
        resp.innerHTML = `<p>O número ${num} é <strong>IMPAR!</strong></p>`
    }
}