class Militar{
    constructor(nome, portas, blindagem, munição){
        this.nome = nome
        this.portas = portas
        this.blindagem = blindagem
        this.munição = munição
    }

    SetNome=function(Nome){
        this.nome = Nome
    }
    Setportas=function(Portas){
        this.portas = Portas
    }
    Setblindagem=function(Blinds){
        this.blindagem = Blinds
    }
    setmunição=function(muni){
        this.munição = muni
    }
    getNome=function(){
        return this.nome
    }
    getportas=function(){
        return this.portas
    }
    getblindagem=function(){
        return this.blindagem
    }
    getmunicao=function(){
        return this.munição
    }
}

class normau extends Militar{
    constructor(nome, portas){
        super(nome, portas)
        this.nome = nome
        this.portas = portas
    }
}


const nome = document.querySelector('#Inome')
const portas = document.querySelector('#Portas')
const blindagem = document.querySelector('#Blindagem')
const muni = document.querySelector('#Muni')
const militar = document.querySelector('#Militar')
const normal = document.querySelector('#Normal')
const botao = document.querySelector('#Butao')
const resul = document.querySelector('#resultados')
let array = []
nome.focus()
const c1 = new normau('camaro', 10)

botao.addEventListener('click', ()=>{
    console.log(array)
    if(nome.value == ""){
        alert('Por favor, coloque um nome válido!')
    }
    else{
        if(portas.value < 3 || portas.value > 10){
            alert('Coloque um número real de portas que um carro pode ter!')
        }
        else{
            if(militar.checked == false){
                    blindagem.setAttribute('readonly', true)
                    muni.setAttribute('readonly', true)
                    normal.checked == true
                    let novoel = document.createElement('div')
                    novoel.setAttribute('class', 'selecionado')
                    novoel.innerHTML += `Nome:${nome.value} <br> Tipo:Normal <br> Portas:${portas.value}`
                    resul.appendChild(novoel)
                    nome.value = ''
                    portas.value = 0
                    nome.focus()
                    array.push(novoel)
            }
            else{
                if(muni < 0 || muni > 1000){
                    alert('Bote uma munição real!')
                }
                else if(blindagem < 0 || blindagem >10000){
                    alert('coloque uma blindagem no seu carro!!!!!!!')
                }
                else{
                    let novoel = document.createElement('div')
                    novoel.setAttribute('class', 'selecionado')
                    novoel.innerHTML += `Nome:${nome.value} <br> Tipo:Militar <br> Portas:${portas.value} <br> Blindagem:${blindagem.value} <br> Munição:${muni.value}`
                    resul.appendChild(novoel)
                    nome.value = ''
                    portas.value = '0'
                    blindagem.value = '0'
                    muni.value = '0'
                    array.push(novoel)
                    nome.focus()
                }
            }
            // let novoel = document.createElement('div')
            // novoel.setAttribute('class', 'selecionado')
            // novoel.innerHTML += `Nome:${nome.value} <br> Tipo:${militar.checked?'Militar':'Normal'} <br>Portas:${portas.value} <br> blindagem:${blindagem.value} <br> Munição:${muni.value}`
            // resul.appendChild(novoel)
            // nome = ''
            // portas = '0'
            // blindagem = ''
            // muni = ''
            // nome.focus()
        }
    }
})

