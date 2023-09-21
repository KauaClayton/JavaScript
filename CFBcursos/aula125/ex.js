const p_temperatura = document.querySelector('#p_temperatura')
const p_nivel = document.querySelector('#p_nivel')
const p_pressao = document.querySelector('#p_pressao')
const obter_dados = ()=>{
    const endpoint = 'https://cfbcursos.kauaclaytonng.repl.co/'
    let res = fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temperatura.innerHTML = 'temperatura:' + dados.temp
        p_nivel.innerHTML = 'nível:' + dados.nivel
        p_pressao.innerHTML = 'pressão' + dados.pressão 
    })
}

// let intervalo = setInterval(obter_dados, 3000)

let dados={
    nome:'Bruno',
    canal:'CFBcursos',
    curso:'JavaScript'
}

let cabecalho={
    method:'POST',
    body:JSON.stringify(dados)
}

const gravardados=()=>{
    const endpoint = 'https://cfbcursos.kauaclaytonng.repl.co/'
    fetch(endpoint, cabecalho)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })
}
