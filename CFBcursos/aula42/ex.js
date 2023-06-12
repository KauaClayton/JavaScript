"use strict"


const caixa1 =  document.querySelector('#caixa1')
const btn = [...document.querySelectorAll('.curso')]
const cursos = ['HTML', "CSS", "JavaScript", 'PHP', "React", 'MySQL', 'Python']

cursos.map((el, chave)=>{
    const novoel = document.createElement('div')
    novoel.setAttribute('id', 'c'+chave++)
    novoel.setAttribute('class', 'curso c1')
    novoel.innerHTML += el
    const btnlixeira = document.createElement('img')
    btnlixeira.setAttribute('src', 'data:image/png;base64,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')
    novoel.appendChild(btnlixeira)
    btnlixeira.setAttribute('class', 'btnlixeira')
    btnlixeira.addEventListener('click', (evt)=>{
        caixa1.removeChild(evt.target.parentElement)
    })
    caixa1.appendChild(novoel)
})


// const novoel = document.createElement('div')
// novoel.setAttribute('id', 'c7')
// novoel.setAttribute('class', 'curso c1')
// novoel.innerHTML += 'Python'
// caixa1.appendChild(novoel)



