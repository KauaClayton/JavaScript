const tipomilitar = document.querySelector('#f_tipoMilitar')
const tiponormal = document.querySelector('#f_tipoNormal')
const nome = document.querySelector('#f_nome')
const portas = document.querySelector('#f_portas')
const munição = document.querySelector('#f_municao')
const blindagem = document.querySelector('#f_blindagem')
const carros = document.querySelector('#carros')
const botao = document.querySelector('#btn_addCarro')

let array_carros = []
tipomilitar.addEventListener('click', (evt)=>{
    nome.value = ''
    portas.value = 0
    blindagem.value = 0
    munição.value = 0
    blindagem.removeAttribute('disabled')
    munição.removeAttribute('disabled')

})

tiponormal.addEventListener('click', (evt)=>{
    nome.value = ''
    portas.value = 0
    blindagem.value = 0
    munição.value = 0
    blindagem.setAttribute('disabled', 'disabled')
    munição.setAttribute('disabled', 'disabled')
})
const gerenciarexibiton = ()=>{
    carros.innerHTML =''
    console.log(array_carros)
    array_carros.map((el)=>{
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')
        div.innerHTML = `nome:${el.nome} <br> Portas:${el.portas}`
        if(el.blindagem > 0){
            div.innerHTML += `<br> Blindagem: ${el.blindagem}`
        }
        if(el.munição >0){
            div.innerHTML += `<br> Munição:${el.munição}`
        }
        carros.appendChild(div)
    })
}

botao.addEventListener('click', ()=>{
    if(tiponormal.checked){
        const c= new Carro(nome.value, portas.value)
        array_carros.push(c)
    }
    else if(tipomilitar.checked){
        const c = new militar(nome.value, portas.value, blindagem.value, munição.value)
        array_carros.push(c)
    }
    gerenciarexibiton()
})


class Carro{ //classe pai / base
    constructor(nome, portas){
        this.cor = undefined
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
    }
    ligar=function(){
        this.ligado = true
    }
    desligar=function(){
        this.ligado = false
    }
    Setcor=function(cor){
        this.cor = cor
    }
}

class militar extends Carro{//classe filho
    constructor(nome, portas, blingagem, munição){
        super(nome, portas)
        this.blingagem = blingagem
        this.munição = munição
        this.Setcor('verde')
    }
    atirar=function(){
        if(this.munição > 0){
            this.munição--
        }
    }
}

const c1 = new Carro('golf', 4)
const c2 = new militar('Tanque', 8, 500, 100)
c1.ligar()
c1.Setcor('preto')
c2.ligar()


