"use strict"


const caixa1 =  document.querySelector('#caixa1')
const btn = [...document.querySelectorAll('.curso')]
const cursos = ['HTML', "CSS", "JavaScript", 'PHP', "React", 'MySQL', 'Python']

cursos.map((el, chave)=>{
    const novoel = document.createElement('div')
    novoel.setAttribute('id', 'c'+chave++)
    novoel.setAttribute('class', 'curso c1')
    novoel.innerHTML += el
    caixa1.appendChild(novoel)
})

// const novoel = document.createElement('div')
// novoel.setAttribute('id', 'c7')
// novoel.setAttribute('class', 'curso c1')
// novoel.innerHTML += 'Python'
// caixa1.appendChild(novoel)



