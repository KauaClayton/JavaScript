function clicou(){
    var resp = document.querySelector('p#res')
    var nome = window.prompt('Qual é o nome do aluno?')
    var n1 = window.prompt(`Qual foi a primeira nota de ${nome}?`)
    var n2 = window.prompt(`além de ${n1}, qual foi a outra nota de ${nome}?`)
    var media = (Number(n1)+ Number(n2))/2
    resp.innerHTML = `<p>Calculando a média final de ${nome}</p>`
    resp.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}</p>`
    resp.innerHTML += `<p>A média final será ${media}</p>`
    if(media < 5 ){
        document.body.style = 'background-color: #ff0000'
        resp.style = 'color:#ffffff'
        resp.innerHTML += '<p><strong>Estude Mais!!!!!!</strong></p>'
    }
    else if(media >= 5 && media < 8){
        document.body.style = 'background-color:#ffff00'
        document.body.querySelector('h1#h1').style = 'color:#000000'
        resp.innerHTML += '<p><strong>Preste mais atenção!!! Você consegue mais!</strong></p>'
    } 
    else if(media >=8 && media <= 10){
        document.body.style = 'background-color:#90ee90'
        resp.innerHTML += '<p><strong>PARABÈNS POR SER ESPERTO!!!!!!!!!!</strong></p>'
    }


}