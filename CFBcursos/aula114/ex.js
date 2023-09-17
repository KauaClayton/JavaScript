const q1 = document.querySelector('#q1')
const q2 = document.querySelector('#q2')
const posx = document.querySelector('#posx')
const posy = document.querySelector('#posy')
const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')

q1.accessKey = 'b'
q2.accessKey = 'a'
const info=(el)=>{
    let DOMRec = el.getBoundingClientRect()
    posx.innerHTML = 'posx:' + DOMRec.x
    posy.innerHTML = 'posy:' + DOMRec.y
    largura.innerHTML = 'largura:'+ DOMRec.width
    altura.innerHTML = 'altura:' + DOMRec.height
}
q1.addEventListener('click', ()=>{
        info(q1)
})
q2.addEventListener('click', ()=>{
        info(q2)
})

