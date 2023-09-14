const carro = document.querySelector('#carro')
const btn_esquerdo = document.querySelector('#btn_esquerdo')
const btn_direito = document.querySelector('#btn_direito')
let anima = null

const init=()=>{
    carro.style='position:relative; left:0px'
}
window.onload=init()

 const inter=(dir)=>{
   
    carro.style.left = parseInt(carro.style.left) + (10*dir) + 'px'
    console.log(carro.style.left)
 }



btn_esquerdo.addEventListener('click', ()=>{
    anima=setInterval(inter,50, -1)
   
})

btn_direito.addEventListener('click', ()=>{
    anima=setInterval(inter,50, 1)
})

