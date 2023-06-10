"use strict"


const caixa1 =  document.querySelector('#caixa1')
const btn = [...document.querySelectorAll('.curso')]

// console.log(caixa1.children)
// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
console.log(btn[0].getRootNode())
console.log(btn[0].ownerDocument)