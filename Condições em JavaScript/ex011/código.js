function clicou(){
    var resp = document.querySelector('p#res')
    var nome = window.prompt('Qual é o nome do aluno?')
    var n1 = window.prompt(`Qual foi a primeira nota de ${nome}?`)
    var n2 = window.prompt(`além de ${n1}, qual foi a outra nota de ${nome}?`)
    resp.innerHTML = `Calculando a média final de <mark>${nome}</mark>`

}