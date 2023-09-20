const f_texto = document.querySelector('#f_texto');
const p_texto = document.querySelector('#p_texto');
const btn_texto = document.querySelector('#btn_texto');

btn_texto.addEventListener('click',(evt)=>{

})

let num = 10
window.localStorage.setItem('numero', num)
alert(localStorage.getItem('numero'))
localStorage.setItem('nome','bruno')
localStorage.setItem('canal','bruno')
localStorage.clear()