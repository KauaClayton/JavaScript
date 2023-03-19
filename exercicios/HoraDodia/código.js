var agora = new Date()
var hora = agora.getHours()
var texto = window.document.querySelector('p#te')

if(6 <= hora &&  hora < 13){
    document.body.style.background = "#E6CB95"
    texto.innerHTML = `Agora são ${hora} horas.`
    document.querySelector('div#img').backgroung = ''
    
}