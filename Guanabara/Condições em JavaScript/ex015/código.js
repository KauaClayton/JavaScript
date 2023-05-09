function clicou(){
    var res = window.document.querySelector('p#res')
    var agora = new Date()
    var dia = agora.getUTCDate()
    var mes = agora.getUTCMonth()//fazer o switch
    var ano = agora.getUTCFullYear()
    var diasem = agora.getUTCDay() //fazer o switch
    var hora = agora.getHours()
    var min = agora.getUTCMinutes()
    var seg = agora.getUTCSeconds()
    res.innerHTML = `<p>Dia: <strong>${dia}</strong></p>`
    switch(mes){
        case 0:
            mes = 'Jan'
            break
        case 1:
            mes = 'Fev'
            break
        case 2:
            mes= 'Mar'
            break
        case 3:
            mes = 'Abr'
            break
        case 4:
            mes = 'Mai'
            break
        case 5:
            mes = 'Jun'
            break
        case 6:
            mes = 'Jul'
            break
        case 7:
            mes = 'Ago'
            break
        case 8:
            mes = 'Set'
            break
        case 9:
            mes = 'Out'
            break
        case 10:
            mes = 'Nov'
            break
        case 11:
            mes = 'Dez'
            break
    }
    res.innerHTML += `<p>Mês: <strong>${mes}</strong></p>`
    res.innerHTML += `<p>Ano: <strong>${ano}</strong></p>`
    switch(diasem){
        case 0:
            diasem = 'Dom'
            break
        case 1:
            diasem = 'Seg'
            break
        case 2:
            diasem = 'Ter'
            break
        case 3:
            diasem = 'Qua'
            break
        case 4:
            diasem = 'Qui'
            break
        case 5:
            diasem = 'Sex'
            break
        case 6:
            diasem = 'Sab'
            break
    }
    res.innerHTML += `<p>Dia da semana: <strong>${diasem}</strong></p>`
    res.innerHTML += `<p>Hora: <strong>${hora}</strong></p>`
    res.innerHTML += `<p>Minutos: <strong>${min}</strong></p>`
    res.innerHTML += `<p>Segundos: <strong>${seg}</strong></p>`
}