const numero = document.getElementById('numero')
const btn = document.getElementById('button')

btn.addEventListener('click',()=>{
   console.log(promessa())
   //resok deu ok
    // .then((retorno)=>{
    //     numero.innerHTML =  retorno
    //     numero.classList.remove('error')
    //     numero.classList.add('ok')
  
    // })
    // //rejec saiu
    // .catch((retorno)=>{
    //     numero.innerHTML = retorno
    //     numero.classList.add('error')
    //     numero.classList.remove('ok')
    // })
})
const promessa =()=>{
    numero.innerHTML = 'processando...'
    let promise = new Promise((resok, rejec)=>{
        let resultado = false
        let tempo =3000
        setTimeout(() => {
            if(resultado){
                resok('Deu tudo certo')
                numero.innerHTML =  'Deu tudo certo'
                numero.classList.remove('error')
                numero.classList.add('ok')
                
            }else{ 
                rejec('deu tudo errado')
                numero.innerHTML = 'deu tudo errado'
                numero.classList.add('error')
                numero.classList.remove('ok')}
        }, tempo);})
        return promise  
}
numero.innerHTML = 'Esperando...'