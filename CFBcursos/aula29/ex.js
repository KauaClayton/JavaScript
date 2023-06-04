"use strict"

// let el = document.getElementsByTagName('div')
// el = [...el]
// console.log(el)
// el.map((e, i)=>{
//     console.log(e.innerHTML)
// })

// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, (innerHTML)=>innerHTML )
// console.log(val)
const cnvINT = (el)=>parseInt(el*2)

let num = ['2', '5', '9', '22'].map(cnvINT)
console.log(num)


// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
// var c = cursos.map((el, i)=>{
//     return el
// })

// console.log(c)

