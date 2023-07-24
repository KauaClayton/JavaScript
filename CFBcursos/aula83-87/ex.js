class bola{
    constructor(){
        this.tam =math.floor((math.random()*10)+10)
        this.r = math.floor((math.random()*255))
        this.g = math.floor((math.random()*255))
        this.b = math.floor((math.random()*255))
        this.px = math.floor(math.random()*(largura_palco-this.tam))
        this.py = math.floor(math.random()*(altura_palco-this.tam))
    
    }

}


const palco = document.querySelector('#palco')
const num_objs = document.querySelector('#num_objetos')
const txt_objs = document.querySelector('#txt_qtde')
const btn_add = document.querySelector('#btn_adicionar')
const btn_remover = document.querySelector('#btn_remover')

let bolas = []
let num_bolas = 0
let largura_palco= palco.offsetWidth
let altura_palco= palco.offsetHeight


window.addEventListener('resize',(evt)=>{
    let largura_palco= palco.offsetWidth
    let altura_palco= palco.offsetHeight

})

btn_add.addEventListener('click', (evt)=>{
    const qtde = txt_objs.value
    for(let i=0; i<qtde; i++){
        //rotina criação de bolinhas
    }
})

btn_remover.addEventListener('click', (evt)=>{
    bolas.map((el)=>{
        //remover a bolinha:)
    })
})