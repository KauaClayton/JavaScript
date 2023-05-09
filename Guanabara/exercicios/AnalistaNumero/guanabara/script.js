var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false}
}


function adicionar(){
    if(isnumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Coloque valores antes de finalizar!!!')
    }
    else{
        var total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                 maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>O total de números cadastrados é ${total}</p>`
        res.innerHTML += `<p>O menor valor registrado foi ${menor}</p>`
        res.innerHTML += `<p>O maior valor registrado foi ${maior}</P>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A media tirada da lista foi ${soma/valores.length}`

    }
}

