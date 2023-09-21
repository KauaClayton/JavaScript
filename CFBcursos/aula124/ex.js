const p_temperatura = document.querySelector('#p_temperatura')
const p_nivel = document.querySelector('#p_nivel')
const p_pressao = document.querySelector('#p_pressao')
const fetchar = document.querySelector('#btn_texto')
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

fetchar.addEventListener('click', ()=>{
    obter_dados()
})


