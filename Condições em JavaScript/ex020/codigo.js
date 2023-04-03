function clicou(){
    var resp = document.querySelector('p#res')
    var mes = window.prompt('Digite o mês em extenso (ex:Setembro)').toLowerCase()
    if(mes === 'dezembro' || mes === 'janeiro' || mes === 'fevereiro'){
        document.body.style.backgroundColor = 'yellow'
        resp.innerHTML = `No mês de ${mes} estamos no <strong>VERÃO</strong>`
    }
    else if(mes === 'março' || mes === 'abril' || mes === 'maio'){
        document.body.style.backgroundColor = 'orange'
        resp.innerHTML = `No mês de ${mes} estamos no <strong>OUTONO</strong>`
    }
    else if(mes ==='junho' || mes ==='julho' || mes === 'agosto'){
        document.body.style.backgroundColor = 'blue'
        resp.innerHTML = `No mês de ${mes} estamos no <strong>INVERNO</strong`
    }
    else if(mes ==='setembro' || mes === 'outubro' || mes === 'novembro'){
        document.body.style.backgroundColor = 'red'
        resp.innerHTML = `No mês de ${mes} estamos na <strong>PRIMAVERA</strong>`
    }
    else{
        document.body.style.backgroundColor = 'lightslategray'
        resp.innerHTML = `No mês de ${mes} estamos na estação <strong>INDEFINIDO</strong>`
    }
    
}