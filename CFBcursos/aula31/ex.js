"use strict"

const c1 = document.getElementById("c1")
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
const c4 = document.getElementById('c4')
const c5 = document.getElementById('c5')
const c6 = document.getElementById('c6')

const ele = [c1, c2, c3, c4, c5, c6]

ele.map((el, i)=>el.innerHTML = 'CFB QUERO CURSOS')
console.log(ele)