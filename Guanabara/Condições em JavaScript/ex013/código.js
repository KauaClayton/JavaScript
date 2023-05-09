function clicou(){
    var resp = document.querySelector('p#res')
    resp.style = 'font-size: 1.1em'
    var n1 = Number(window.prompt('Digite um número:'))
    var n2 = Number(window.prompt('Digite outro:'))
    resp.innerHTML = `<p>Analisando os valores ${n1} e ${n2} chegamos a conclusão:</p> `
    if(n1 > n2){      
        resp.innerHTML += `${n1} >>> ${n2}`
    }
    else if( n1 == n2){
        resp.innerHTML += `${n1} === ${n2}`
    }
    else if(n1 < n2){
        resp.innerHTML += `${n1} <<< ${n2}`
    }
}