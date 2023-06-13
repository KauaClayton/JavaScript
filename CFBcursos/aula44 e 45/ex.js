"use strict"

const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSeleciona = document.getElementById('btnCursoSelecionado')
const  bntremover = document.getElementById('RemoverCurso')

cursos.map((el, chave)=>{
    const novoel = document.createElement('div')
    novoel.setAttribute('class', 'curso c1')
    novoel.setAttribute('id', 'c'+chave)
    novoel.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoel.appendChild(comandos)
    caixaCursos.appendChild(novoel)
}

)

const radioselecionado = ()=>{
    const todos = [...document.querySelectorAll('input[type=radio]')]
    const radioselecionado = todos.filter((val, indice, array)=>{
        return val.checked
    })
    return radioselecionado[0]
}

btnCursoSeleciona.addEventListener('click', (evt)=>{
    var rs = radioselecionado()
    console.log(rs)
    try{
        alert("curso selecionado:" + rs.parentNode.previousSibling.textContent)
    }
    catch(error){
        alert('selecione algum curso')
    }
})

bntremover.addEventListener('click', (evt)=>{
    const rs = radioselecionado()
    if(rs!=undefined){
        const cursoselecionado = rs.parentNode.parentNode
        cursoselecionado.remove(cursoselecionado)}
    else{
        alert('selecione um curso')
    }
})