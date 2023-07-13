const div_data = document.getElementById('div_data')
const div_relogio = document.getElementById('div_relogio')
const btn_ativar = document.getElementById('btn_ativar')
const btn_parar = document.getElementById('btn_parar')
const tmp_alarme = document.getElementById('tmp_alarme')
const hora_alarme = document.getElementById('hora_alarme')
const timer = document.getElementById('timer')
let som_alarme = new Audio('som.mp3')
som_alarme.loop = -1
let ts_atual = null //ts =time stemp atual, quando ativar vai pegar o time atual e vai colocar nessa variavel
let ts_alarme = null //vai pegar o time do alarme, time stemp atual + tempoalarme
let alarme_ativado =false
let alarme_tocando = false

btn_ativar.addEventListener('click', ()=>{
    ts_atual = Date.now()
    ts_alarme=ts_atual+(tmp_alarme.value*1000)

    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML='Hora do Alarme:'+dt_alarme.getHours() + ':' + dt_alarme.getMinutes() + ':' + dt_alarme.getSeconds()
})
btn_parar.addEventListener('click', ()=>{
    alarme_ativado = false
    alarme_tocando = false 
    hora_alarme.innerHTML = 'Hora do Alarme:'
    tmp_alarme.value = 0
    timer.classList.remove('alarme')
    som_alarme.pause()
    som_alarme.currentTime = 0

})
const dados=()=>{  
    const data = new Date()
    div_data.innerHTML = data.toLocaleDateString()
    div_relogio.innerHTML = data.toLocaleTimeString()
    if(alarme_ativado && !alarme_tocando){
            if(data.getTime() >= ts_alarme){
                alarme_tocando = true
                som_alarme.play()
                timer.classList.add('alarme')
            }
    } 
}
setInterval(() => {
    dados()
}, 1000);