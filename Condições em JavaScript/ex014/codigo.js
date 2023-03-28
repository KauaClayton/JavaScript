function clicou(){
    var resp = document.querySelector('p#res')
    var data = new Date()
    var diasem = data.getUTCDay()
    var mes = data.getUTCMonth()
    var dianum = data.getUTCDate()
    var ano = data.getUTCFullYear()
    var hora = data.getUTCHours()
    var min = data.getUTCMinutes()
    var seg = data.getUTCSeconds()
    resp.innerHTML = 'O que eu recebi do sistema foi '
    switch(diasem){
        case 0:
            resp.innerHTML += 'Dom '
            break
        case 1:
            resp.innerHTML += 'Seg '
            break
        case 2:
            resp.innerHTML += 'Ter'
            break
        case 3:
            resp.innerHTML += 'Qua '
            break
        case 4: 
            resp.innerHTML += 'Qui '
            break
        case 5:
            resp.innerHTML += 'Sex '
        case 6:
            resp.innerHTML += 'sab '
    }
    switch(mes){
        case 0:
            resp.innerHTML += 'Jan'
            break
        case 1:
            resp.innerHTML += 'Fev'
            break
        case 2:
            resp.innerHTML += 'Mar'
            break
        case 3:
            resp.innerHTML += 'Abr'
            break
        case 4:
            resp.innerHTML += 'Mai'
            break
        case 5:
            resp.innerHTML += 'Jun'
            break
        case 6:
            resp.innerHTML += 'Jul'
            break
        case 7:
            resp.innerHTML += 'Ago'
            break
        case 8:
            resp.innerHTML += 'Set'
            break
        case 9:
            resp.innerHTML += 'Out'
            break
        case 10:
            resp.innerHTML += 'Nov'
            break
        case 11:
            resp.innerHTML += 'Dez'
            break
            }
    resp.innerHTML += ` ${dianum} ${ano} ${hora}:${min}:${seg} GMT-0300 (Horário Padrão de Brasília)`
}
