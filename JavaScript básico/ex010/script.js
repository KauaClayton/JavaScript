var sec = document.querySelector('section#saida')

function clicou1(){
    sec.innerHTML += '<p>Clicou no primeiro botão</p>'
}

function clicou2(){
    sec.innerHTML += '<p>Clicou no segundo botão</p>'
}

function clicou3(){
    sec.innerHTML += '<p>Clicou no terceiro botão</p>'
}

function clicou4(){
    sec.innerHTML += '<p>Clicou no quarto botão</p>'
}

function limpou(){
    sec.innerHTML = ' <p>Aqui vou registrar suas ações com os botões acima.</p>'
}