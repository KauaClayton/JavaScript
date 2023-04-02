var resul = Math.random() * 100
var resul = resul.toFixed(0)

function  clicou(){
    var resp = document.querySelector('p#res')
    var num = Number(window.prompt('Qual é o seu palpite?'))
    if(num < resul){
        resp.innerHTML += `<p>você falou ${num} . Meu número é <strong>MAIOR</strong></p>`
    }
    else if(num > resul){
        resp.innerHTML += `<p>você falou ${num}. Meu número é <strong>MENOR</strong></p>`
    }
    else if(num == resul){
        resp.innerHTML += '<p><strong>PARABÉNS</strong>! Você acertou! eu tinha sorteado o valor ' + resul + '!</p>' 
    }
}