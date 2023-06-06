"use strict"
const cursosdiv= [...document.getElementsByTagName('div')]
const cursosTodos = [...document.getElementsByClassName('curso')]
const cursosc1 = [...document.getElementsByClassName('c1')]
const cursosc2 = [...document.getElementsByClassName('c2')]
const cursoespecial = document.getElementById('c1')
const query_DivTodas = [...document.querySelectorAll('div[class]')]
const query_cursosTodos = [...document.querySelectorAll('.curso')]
const query_cursosp = [...document.querySelectorAll('div > p')]
const query_cursosc1 = [...document.querySelectorAll('.c1')]
const query_cursosc2 = [...document.querySelectorAll('.c2')]
const query_cursoespecial = document.querySelector('#c1')
console.log(query_DivTodas)
console.log(query_cursosTodos)
console.log(query_cursosc1)
console.log(query_cursosc2)
console.log(query_cursoespecial)
console.log(query_cursosp)
// console.log(cursosTodos)
// console.log(cursosc1)
// console.log(cursosc2)
// console.log(cursoespecial)
// console.log(cursosdiv)
// cursosc2.map((el)=>{el.classList.add('destaque')})