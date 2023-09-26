const header =document.head
const body = document.body
const estilo = '<link rel="stylesheet" href="topo.css">'
header.innerHTML += estilo

const topo = document.createElement('header')
topo.setAttribute('id', 'topo')
topo.setAttribute('class', 'topo')
body.prepend(topo)