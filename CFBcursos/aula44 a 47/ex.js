"use strict"

const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSeleciona = document.getElementById('btnCursoSelecionado')
const  bntremover = document.getElementById('RemoverCurso')
const btnAddAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdddps = document.getElementById('BtnAdicionarNovoCursoDepois')
const curso = document.getElementById('nomeCurso')
let indice = 0
const criarcurso = (curso)=>{
    const novoel = document.createElement('div')
    novoel.setAttribute('class', 'curso c1')
    novoel.setAttribute('id', 'c'+indice)
    indice++
    novoel.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoel.appendChild(comandos)

    return novoel
}
cursos.map((el)=>{
    const novoelemento = criarcurso(el)
    caixaCursos.appendChild(novoelemento)
    
}

)

const elementoselecionado = ()=>{
    
}

btnCursoSeleciona.addEventListener('click', (evt)=>{
    var rs = elementoselecionado()
    console.log(rs)
    try{
        alert("curso selecionado:" + rs.parentNode.previousSibling.textContent)
    }
    catch(error){
        alert('selecione algum curso')
    }
})

bntremover.addEventListener('click', (evt)=>{
    const rs = elementoselecionado()
    if(rs!=undefined){
        const cursoselecionado = rs.parentNode.parentNode
        cursoselecionado.remove(cursoselecionado)}
    else{
        alert('selecione um curso')
    }
})

btnAddAntes.addEventListener('click', ()=>{
    var rs = elementoselecionado()

    try{
        const cursoselecionado = rs.parentNode.parentNode
        if(curso.value != ''){
            const novocurso = criarcurso(curso.value)
            caixaCursos.insertBefore(novocurso, cursoselecionado)}
        else{alert('digite o nome do curso')}

    }
    catch(error){
        alert('selecione algum curso')
    }
})

btnAdddps.addEventListener('click', ()=>{
    var rs = elementoselecionado()

    try{
        const cursoselecionado = rs.parentNode.parentNode
        if(curso.value != ''){
        const novocurso = criarcurso(curso.value)
        caixaCursos.insertBefore(novocurso, cursoselecionado.nextSibling)}
        else{alert('digite o nome do curso')}

    }
    catch(error){
        alert('selecione algum curso')
    }
  
})