function Pessoa(pnome, pidade){
        this.nome = pnome,
        this.idade = pidade,   
    this.getNome= function(){
        return this.nome
    },
    this.getIdade=function(){
        return this.idade
    },
    this.setNome=function(idade){
        this.idade = idade
    },
    this.info=function(){
        console.log(`Nome..: ${this.nome}\n Idade.: ${this.idade}\n --------------------`)
    }
    
    
}

const inome = document.querySelector('#iname')
const iidade = document.querySelector('#idade')
const button = document.querySelector('#butao')
const dados = document.querySelector('#dados')
let pessoas = []
button.addEventListener('click',()=>{
    if(iidade.value > 110 || iidade.value < 0){
        alert('coloque uma idade provavel') 
    }
    else{
        if(inome.value == ""){
            alert('insira um nome por favor')
        }
        else{
            let p = new Pessoa(inome.value, iidade.value)
            pessoas.push(p)
            const divnew = document.createElement('div')
            divnew.setAttribute('class', 'pessoa')
            divnew.innerHTML += `Nome:${p.getNome()} <br> Idade:${p.getIdade()}<br>`
            dados.appendChild(divnew)
            iidade.value = ''
            inome.value = ''
            inome.focus()
            console.log(pessoas)

        }
    }
    
    
})