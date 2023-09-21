const endpoint = 'https://cfbcursos.kauaclaytonng.repl.co/'
let res = fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})