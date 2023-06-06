"use strict"

const cursosTodos = [...document.getElementsByClassName('curso')]
const cursosc1 = [...document.getElementsByClassName('c1')]
const cursosc2 = [...document.getElementsByClassName('c2')]
const cursoespecial = document.getElementsByClassName('curso')[1]
console.log(cursosTodos)
console.log(cursosc1)
console.log(cursosc2)
cursosc2.map((el)=>{el.classList.add('destaque')})