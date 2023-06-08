"use strict"


const caixa1 = document.querySelector('#caixa1')
const cursos= [...caixa1.children]

caixa1.addEventListener('click', (evt)=>{
    console.log('clicou')

})

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation()
    })
})