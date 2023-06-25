const Pessoa={
    nome:'',
    idade:'',
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    SetIdade:function(idade){
        this.idade = idade
    },
    SetNome:function(nome){
        this.nome = nome
    }

}
const inome = document.querySelector('#iname')
const idade = document.querySelector('#idade')
const butao = document.querySelector('button#butao')
const dados = document.querySelector('div#dados')


butao.addEventListener('click', ()=>{
    if(idade.value > 100 || idade.value < 1){
        alert('Coloque uma idade valida!')
    }
    else{
        Pessoa.SetIdade(idade.value)
        if(inome.value == ''){
            alert('digite o nome por favor')
        }
        else{
            Pessoa.SetNome(inome.value)
            const div = document.createElement('div')
            div.setAttribute('class', 'pessoa')
            div.innerHTML += `Nome:${Pessoa.getNome()}<br> Idade:${Pessoa.getIdade()}`
            dados.appendChild(div)
            inome.value = ''
            idade.value = ''
            inome.focus
        }
    }
})