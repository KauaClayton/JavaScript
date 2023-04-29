function clicou(){
    var array = []
    var num = document.querySelector('input#inum'.value)
    if(100 > num || num < 0){
        window.alert('Por favor, digite um valor entre 0 e 100 que não tenha sido escrito ainda!')
    }
}