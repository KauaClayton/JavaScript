const teclasNum = [...document.querySelectorAll('.num')]
const teclasOpe = [...document.querySelectorAll('.op')]
const telcares = document.querySelector('.res')
const display = document.querySelector('#display')
const ligar = document.querySelector('#on')
const limpar = document.querySelector('#CL')
const teclaigual = document.querySelector('#igual')

let sinal = false
let decimal = false
let parenteses = false
console.log(teclasNum)
console.log(teclasOpe)

teclasNum.map((el)=>{
    el.addEventListener('click', (evt)=>{
        
        if(evt.target.innerHTML == '.'){

            if(!decimal){
                decimal = true
                if(display.innerHTML =='0'){
                    display.innerHTML = '0.'
                }
                else{
                    
                    display.innerHTML += evt.target.innerHTML
                }
        }
        }else{
            if(display.innerHTML =='0'){
                display.innerHTML = ''
            }
        display.innerHTML += evt.target.innerHTML
        sinal = false}
        
    })
})

teclasOpe.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(!sinal){
            sinal = true
            if(display.innerHTML =='0'){
                display.innerHTML = ''
            }
            if(evt.target.innerHTML == 'x'){
                display.innerHTML += '*'
            }
            else{
            display.innerHTML += evt.target.innerHTML
            }
        }

    })
})
limpar.addEventListener('click', (evt)=>{
    display.innerHTML = 0
    sinal = true
    decimal = true
})

teclaigual.addEventListener('click',(evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})