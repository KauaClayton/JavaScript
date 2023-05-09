function clicou(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var resp = window.document.querySelector('p#res')
    var idade = Number(window.prompt('Qual ano do seu nascimento?'))
    resp.innerHTML = `Quem nasceu em ${idade} vai completar <strong>${ano-idade}</strong> anos em ${ano}`
}