"use strict"


const caixa1 = document.querySelector('#caixa01')
const btn = document.querySelector('button#button')
const caixa2 = document.querySelector('#caixa02')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el)=>{el.addEventListener('click', (evt)=>{
    const curso = evt.target
    curso.classList.toggle('selecionado')
    
})})

btn.addEventListener('click', ()=>{
    const selecionados = [...document.querySelectorAll('.selecionado')]   
    selecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    const child_caixa_2 = [...caixa2.children]
    child_caixa_2.map((el)=>{
        if(selecionados.includes(el) == false && child_caixa_2.includes(el) ==  true){
                caixa1.appendChild(el)
        }
    })

})

