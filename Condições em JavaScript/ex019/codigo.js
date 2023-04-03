function clicou(){
    var resp = document.querySelector('p#res')
    var n1 = Number(window.prompt('Qual é o primeiro valor?'))
    var n2 = Number(window.prompt('E qual o outro?'))
    var calculo = window.prompt(`Valores informados:${n1} e ${n2}. \nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir `)
    resp.innerHTML = '<p>Calculando...</p>'
    if(calculo == 1){
        resp.innerHTML += `${n1} + ${n2} = <strong>${n1+n2}</strong>`
    }
    else if(calculo == 2){
        resp.innerHTML += `${n1} - ${n2} = <strong>${n1-n2}</strong>`
    }
    else if(calculo == 3){
        resp.innerHTML += `${n1} x ${n2} = <strong>${n1*n2}</strong>`
    }
    else if(calculo == 4){
        resp.innerHTML += `${n1} / ${n2} = <strong>${n1/n2}</strong>`
    }
    else{
        resp.innerHTML += `OPÇÂO INVÁLIDA!!!! Você me informou ${n1} e ${n2}, mas não sei o que fazer com eles`
    }
}
