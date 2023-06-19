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
const tirarselecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })

}
const criarcurso = (curso)=>{
    const novoel = document.createElement('div')
    novoel.setAttribute('class', 'curso c1')
    novoel.setAttribute('id', 'c'+indice)
    indice++
    novoel.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')
    
    novoel.addEventListener('click', (evt)=>{
        tirarselecao()
        evt.target.classList.toggle('selecionado')
    })

    novoel.appendChild(comandos)

    return novoel
}
cursos.map((el)=>{
    const novoelemento = criarcurso(el)
    caixaCursos.appendChild(novoelemento)
    
}

)

const cursoselecionado = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
        }



btnCursoSeleciona.addEventListener('click', ()=>{
    let ele = cursoselecionado()

    try{
        const cursoselecionado = ele
        alert(`Curso selecionado:${ele.textContent}`)
    }
    catch(error){
        alert('selecione algum curso')
    }

})

bntremover.addEventListener('click', (evt)=>{
    const ele = cursoselecionado()
    if(ele!=undefined){

        ele.remove(cursoselecionado)}
    else{
        alert('selecione um curso')
    }
})

btnAddAntes.addEventListener('click', ()=>{

    try{
        if(curso.value != ''){
            const novocurso = criarcurso(curso.value)
            caixaCursos.insertBefore(novocurso, cursoselecionado())}
        else{alert('digite o nome do curso')}

    }
    catch(error){
        alert('selecione algum curso')
    }
})

btnAdddps.addEventListener('click', ()=>{


    try{
   
        if(curso.value != ''){
        const novocurso = criarcurso(curso.value)
        caixaCursos.insertBefore(novocurso, cursoselecionado().nextSibling)}
        else{alert('digite o nome do curso')}

    }
    catch(error){
        alert('selecione algum curso')
    }
  
})