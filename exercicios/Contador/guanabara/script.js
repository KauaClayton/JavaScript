function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var resul = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght ==0){
        window.alert('ERRO! VALOR NECESSÁRIO NÃO ENCONTRADO')
    }
    else{
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('PASSO INVÁLIDO!!!!!!!!!')
        }
        resul.innerHTML = 'Contando...'
        if(i< f){
            for(i; i <= f; i += p){
                resul.innerHTML += `${i} \uD83D\uDC49`
            }
            resul.innerHTML += '\uD83C\uDFC1'
        }
        else if(i > f){
            for(i; i >= f; i-=p){
                resul.innerHTML += `${i} \uD83D\uDC49`
            }
            resul.innerHTML += '\uD83C\uDFC1'
        }

}
}