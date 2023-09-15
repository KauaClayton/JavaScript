const carro = document.querySelector('#carro')
const parar = document.querySelector('#parar')
const play = document.querySelector('#play')
let anima = null
let tamax = null
let tamcarro = null
dir = 1

const init=()=>{
    carro.style='position:relative; left:0px; width:100px; height:100px'
    tamcarro = parseInt(carro.style.width)
    tamax = window.innerWidth-parseInt(carro.style.width)
}
window.onload=init()

const inter=()=>{
    if(dir>0 && parseInt(carro.style.left) <= tamax){
        carro.style.left = parseInt(carro.style.left) + (10*dir) + 'px'
    }
    else{ 
        dir = -1
       }
    if(dir<0 && parseInt(carro.style.left) >= 0){
        carro.style.left = parseInt(carro.style.left) + (10*dir) + 'px'
    }
    else{
        dir = 1
        clearTimeout(anima)}
    anima=setTimeout(inter, 20, dir)
 }



parar.addEventListener('click', ()=>{
        clearTimeout(anima)
       
})

play.addEventListener('click', ()=>{
    inter()
})

window.addEventListener('resize',()=>{
    tamax = window.innerWidth-parseInt(carro.style.width)
})

window.addEventListener('keydown', (evt)=>{
    if(evt.code==='ArrowUp'){
        carro.style.width = parseInt(carro.style.width)+10+'px'
        carro.style.height = parseInt(carro.style.height)+10+'px'}
    if(evt.code==='ArrowDown'){
        carro.style.width = parseInt(carro.style.width)-10+'px'
        carro.style.height = parseInt(carro.style.height)-10+'px'
    }
    tamcarro = parseInt(carro.style.width)
    tamax = window.innerWidth - tamcarro
})

