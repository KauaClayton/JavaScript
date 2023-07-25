class bola{
    constructor(arrayBolas, palco){
        this.tam = Math.floor((Math.random()*15)+10)
        this.g = Math.floor((Math.random()*255))
        this.b = Math.floor((Math.random()*255))
        this.r = Math.floor((Math.random()*255))
        this.px = Math.floor(Math.random()*(largura_palco-this.tam))
        this.py = Math.floor(Math.random()*(altura_palco-this.tam))
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
        this.dirx = (Math.random()*10)>5?1:-1
        this.diry = (Math.random()*10)>5?1:-1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.Desenhar()
        this.id = Date.now() + '_' + Math.floor(Math.random()*100000000000)
        this.controle = setInterval(this.controlar, 10)
        
        this.eu = document.getElementById(this.id)
        console.log(this.eu)
        num_bolas++
        num_objs.innerHTML = num_bolas
    }
    minhapos=()=>{
        return this.arrayBolas.indexOf(this)
    }
    remover=()=>{
        clearInterval(this.controle)
        bolas = bolas.filter((b)=>{
            if(b.id != this.id)return b
        })
        this.eu.remove()
        bolas--
        num_objs.innerHTML = num_bolas
    }
    Desenhar=()=>{
        const div = document.createElement('div')
        div.setAttribute('id', this.id)
        div.setAttribute('class', 'bola')
        div.setAttribute('style', `left:${this.px}; top:${this.py};width:${this.tam};height:${this.tam};background-color:rgb(${this.r}, ${this.g}, ${this.b}) `)
        this.palco.appendChild(div)

    }
    colisãobordas=()=>{
        if(this.px + this.tam >= largura_palco){
            this.dirx = -1
        }
        else if(this.px <= 0){
            this.dirx = 1
        }
        if(this.py + this.tam >= altura_palco){
            this.diry= -1
        }
        else if(this.py <= 0){
            this.diry = 1
        }

    }
    controlar=()=>{
        this.colisãobordas()     
        this.px += this.dirx*this.velx
        this.py += this.diry*this.vely
        this.eu.setAttribute('style', `left:${this.px}; top:${this.py};width:${this.tam};height:${this.tam};background-color:rgb(${this.r}, ${this.g}, ${this.b}) `)
        if(this.posx > largura_palco || this.posy > altura_palco){
            this.remover()
        }
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
       bolas.push(new bola(bolas, palco))
    }
})

btn_remover.addEventListener('click', (evt)=>{
    bolas.map((el)=>{
        el.remover()
    })
})