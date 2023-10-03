const tpm = document.querySelector('#tpm')
const nvl = document.querySelector('#nvl')
const prs = document.querySelector('#prs')

let dados={
    _temperatura:0,
    _nivel:0,
    _pressao:0,
    set valores(val){
        this._temperatura = val.temperatura
        this._nivel = val.nivel
        this._pressao = val.pressao
    },
    get valores(){
        return [this._temperatura, this._nivel, this._pressao]
    }
}

const buscar_dados=()=>{

const endpoint = 'https://cfbcursos.kauaclaytonng.repl.co'
fetch(endpoint)
.then(res=>res.json())
.then(res=>{
    dados.valores =res
    tpm.innerHTML = dados.valores[0]
    nvl.innerHTML = dados.valores[1]
    prs.innerHTML = dados.valores[2]

})}

setInterval(buscar_dados, 1000)