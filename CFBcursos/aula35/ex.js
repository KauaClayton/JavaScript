"use strict"


const msg = ()=>{
  alert('clicou')
}

//teste 02 usando tudo no js:
const cursos = [...document.querySelectorAll('.curso')]
cursos.map((el)=>{
        el.addEventListener('click', (evt)=>{
            const el = evt.target
        if(el.classList.contains('destaque') == false){
            el.classList.add('destaque')}
        else if(el.classList.contains('destaque') == true){
            el.classList.remove('destaque')
    }        
})
    })



