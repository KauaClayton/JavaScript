var agora = new Date()
var hora = agora.getHours()
var texto = window.document.querySelector('p#te')

texto.innerHTML = `Agora são ${hora} horas.`
if(6 <= hora &&  hora < 12){
    document.body.style.background = "#E6CB95"   
    document.body.querySelector('div#caixa').querySelector('div#img').style = 'background-image:url("http://apfel.com.br/wp-content/uploads/2021/01/flor-e-sol.jpg")'
}
else if(12 <= hora && hora < 18){
    document.body.style.background = '#9F6C49'
    document.body.querySelector('div#caixa').querySelector('div#img').style = 'background-image: url("https://static.vecteezy.com/ti/fotos-gratis/p1/1752040-navio-no-mar-durante-o-por-do-sol-gratis-foto.jpeg")'
    
}
else if (18 <= hora && hora < 24){
    document.body.style.background = '#5B5D63'
    document.body.querySelector('div#caixa').querySelector('div#img').style = 'background-image: url("http://2.bp.blogspot.com/-3hOI92nt1Xc/UK0wuND78ZI/AAAAAAAAQXA/qJQwhyiy35w/s1600/163393_279721975458093_1416357960_n.jpg")'
}

else if (0 <= hora && hora < 6){
    document.body.style.background = '#2F302C'
    document.body.querySelector('div#caixa').querySelector('div#img').style = 'background-image: url("https://www.jornaldocomercio.com/_midias/jpg/2021/04/27/img_7666-9303421.jpg")'
}