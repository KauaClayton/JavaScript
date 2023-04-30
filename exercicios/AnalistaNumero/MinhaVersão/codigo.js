function clicou(){
    itens.innerHTML = ''
    var num = Number(document.querySelector('input#inum').value)
    var select = document.querySelector('select#isel')
    if(100 < num || 0 > num){
        window.alert('Por favor, digite um valor entre 0 e 100 que não tenha sido escrito ainda!')
    }
    else if(num == undefined){
        window.alert('Por favor, digite um valor na caixa abaixo para ser enviado ao sistema')
    }
    else if(arar.includes(num) == true){
       window.alert('Esse valor já foi adicionado a nossa lista! Escolha outro!!!!!!')
    }
    else{
        arar.push(num)
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        select.appendChild(item)}
}

function verificação(){
    arar.sort()
        var sum = arar.reduce(function(accumulator, value){
            return accumulator + value
        })
    itens.innerHTML += `<p>Ao todo temos ${arar.length} elementos cadastrados</p>`
    itens.innerHTML += `<p>O maior valor informado foi ${arar.at(-1)}</p>`
    itens.innerHTML += `<p>O menor valor informado foi ${arar[0]}</p>`
    itens.innerHTML += `<p>A soma de todos valores informados da ${sum}</p>`
    itens.innerHTML += `<p>A media dos valores digitados é ${sum / arar.length}`

}

var arar = []
var itens = document.querySelector('p#veri')