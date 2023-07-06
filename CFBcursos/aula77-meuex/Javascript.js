const email = document.querySelector('#imail') //seletor email no html
const senha = document.querySelector('#isenha') // seletor senha no html
const butao_verifica = document.querySelector('#button') //botão de clique no html
const verificacao = document.querySelector('#resul') // onde será imprimido o resultado
var num = 0 //Essa variavel será utilizada quando eu verificar se tem espaços no email


const verificaemail=()=>{ //A Promise ficará em uma constante nos dois casos, esse é de verificação do email
    let promessa = new Promise((aprovado, rejeitado)=>{ //promisse
        tempo = 2000        
    
        var arrayemail = email.value.split('') //picota o valor de email em um array com cada valor separadamente
        arrayemail.map((el)=>{  //percorre o array procurando espaços e caso ache num ganha ++
            if(el == ' ') num++   })
        setTimeout(()=>{
            if(email.value.length < 1){ //verifica se o array tem caracteres
                rejeitado('deu erro')
                verificacao.innerHTML = 'Coloque um valor no email por favor'
                verificacao.classList.add('false')
            }
            else if(email.value.includes('@gmail.com') == false){ //verifica se está terminando corretamente
                rejeitado('Coloque @gmail.com no final')
                verificacao.innerHTML = 'Coloque @gmail.com no final'
                verificacao.classList.add('false')
            }
            else if(num > 0){ //verifica se tem espaços, caso o valor de num seja maior que 0 é porque tem
                rejeitado('Não pode ter espaços')
                verificacao.innerHTML = 'Seu email não pode ter espaços'
                verificacao.classList.add('false')
            }
            else if(arrayemail[0] == '@'){ // verifica se tem algum caractere antes do @
                rejeitado('Coloque algum email')
                verificacao.innerHTML = 'Coloque algum valor de email antes do @'
                verificacao.classList.add('false') 
            }
         
        }, tempo)
    })
}

const verificasenha=()=>{
    let promessa = new Promise((resul, rejeitado)=>{
        arraysenha = senha.value.split('')
        var nume = 0
        arraysenha.map((el)=>{
            if(el == ' ') nume++
        })
        tempo = 2000
        setTimeout(()=>{
            if(senha.value.length < 8 || senha.value.length > 16){
                rejeitado('Senha pequena ou longa')
                verificacao.innerHTML = 'coloque uma senha de 8 a 16 caracteres'
                verificacao.classList.add('false')
            }
            else if(nume > 0){
                rejeitado('Senhanãoespaço')
                verificacao.innerHTML = 'Sua senha só pode contar letras, números e caracteres especiais'
                verificacao.classList.add('false')
            }
         
        }, tempo)})}

butao_verifica.addEventListener('click', ()=>{
    if(verificacao.classList.contains('false')){
        verificacao.classList.remove("false")
    }
    if(verificacao.classList.contains('true')){
        verificacao.classList.remove('true')
    }
    verificacao.innerHTML = 'analisando...'
     verificaemail()
    verificasenha()
    if(verificaemail() == true && verificasenha() == true){
        verificacao.innerHTML = 'Seu email e senha estão corretas e entrarão para nosso banco de dados!'
        verificacao.classList.add('true')
    }
    

})

//para kauã do futuro: você ainda está tentando fazer com que a verificação certa seja somente quando 
//os dois derem certo além de estar terminando seus testes:)