const numero = document.getElementById('numero')
let promise = new Promise((resok, rejec)=>{
    let resultado = true
    let tempo =3000
    setTimeout(() => {
        if(resultado){
            resok('Deu tudo certo')
        }else rejec('deu tudo errado')
    }, tempo);
    
})



//resok deu ok
promise.then((retorno)=>{
    numero.innerHTML =  retorno
    numero.classList.remove('error')
    numero.classList.add('ok')
    window.close()
})
//rejec saiu
promise.catch((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.add('error')
    numero.classList.remove('ok')
})
numero.innerHTML = 'Processando...'