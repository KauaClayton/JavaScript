const teclasNum = [...document.querySelectorAll('.num')]
const teclasOpe = [...document.querySelectorAll('.op')]
const telcares = document.querySelector('.res')
const display = document.querySelector('#display')
const ligar = document.querySelector('#on')
const limpar = document.querySelector('#CL')
const teclaigual = document.querySelector('#igual')
const tcpy = document.querySelector('#copy')
const teste = document.querySelector('#teste')
const aba = document.querySelector('#aba')
const img = document.querySelector('#img')
const calc = document.querySelector('#calc')
let sinal = false
let decimal = false
let parenteses = false

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

tcpy.addEventListener('click', ()=>{
    // teste.select()
    // teste.setSelectionRange(0, 9999999999999)//mobile
    navigator.clipboard.writeText(display.innerHTML)
})

aba.addEventListener('click', (evt)=>{
    calc.classList.toggle('calcexibir')
    if(calc.classList.contains('calcexibir')){
        img.setAttribute('src', 'esquerda.svg')
    }
    else{
        img.setAttribute('src', 'direita.svg')
    }
})