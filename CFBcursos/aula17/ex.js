'use strict'

const objs = document.getElementsByTagName('div')

// for(let i=0; i< num.length;i++){
//     console.log(num[i])
// }

for(let i of objs){
    console.log(i.innerHTML = 'sexoooo')
}

for(let o in objs){
    console.log(o)
}