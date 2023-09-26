const header =document.head
const body = document.body
const estilo = '<link rel="stylesheet" type="text/css" href="topo.css">'
header.innerHTML += estilo

const topo = document.createElement('header')
topo.setAttribute('id', 'topo')
topo.setAttribute('class', 'topo')
body.prepend(topo)

const logo = 
    '<div id="logo" class ="logo">'+
        '<img src="imagem.jpg" title="montanha"/> '+
    '</div>'
topo.innerHTML += logo
const login = 
    '<div id="login" class ="login">'+
        '<p id="matricula">Matricula:<span></span></p>'+
        '<p id="nome">Nome:<span></span></p>'+
    '</div>'

topo.innerHTML += login