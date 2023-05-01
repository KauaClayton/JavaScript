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
        
    }
    else{
        window.alert('Valor invalido ou ja encontrado na lista')
    }
}

