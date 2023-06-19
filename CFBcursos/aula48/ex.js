const verde = document.querySelector('div.verde')
const azul = document.querySelector('div.azul')
const vermelho = document.querySelector('div.vermelho')
const text = document.querySelector('input#itex')
const button = document.querySelector('button#button')
const resul = document.querySelector('p#result')
const array = ['HTML', 'CSS', 'JS']

verde.innerHTML +=  `<br>[${array}]`

button.addEventListener('click', (evt)=>{ 
    resul.innerHTML = '<br>Valor não encontrado' 
    const retorno = array.find((e, i, array)=>{
        if(e.toUpperCase() == text.value.toUpperCase()){
            resul.innerHTML = `valor encontrado - ${e} - na posição ${i}`
            return true
        }
        
    })
    
})

