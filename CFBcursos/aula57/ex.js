const caixa = document.querySelector('#caixa')
const carros = ['polo', 'golfe', 'T-cross', 'HRB']
let ol = '<ul>'
carros.forEach((el)=>{
    ol+= `<li>${el}</li>`
})
ol+= '</ul>'
caixa.innerHTML += ol
const nome = 'bruno'
const curso = 'JavaScript'
const canal = 'CFB cursos'
const frase = `Este é o\ncurso de ${curso} \do canal ${canal} do professor ${nome}`

