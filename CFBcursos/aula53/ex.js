let dados = ['azul','verde', 'vermelho', ['claro', 'escuro', 'médio']] 
let cursos = ['HTMl', 'CSS', 'JavaScript', dados]
const caixa = document.querySelector('#caixa')

// cursos[0] = 'C++'
// cursos.shift()
// cursos.unshift('lulalindo')



// console.log(cursos[0])
cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML += el
    caixa.appendChild(p)
})
console.log(cursos[3][3][1])
