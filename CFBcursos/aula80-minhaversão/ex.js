const dataano = document.querySelector('#data')
const relogio = document.querySelector('#relogio')
const botao_setar_alarme = document.querySelector('#btn_ativar')
const botao_parar_alarme = document.querySelector('#btn_parar')
const horalarme = document.querySelector('#horaalarme')
const caixa = document.querySelector('#caixa')
const audio = document.querySelector('#audio')
const dados=()=>{  
    const data = new Date()
    dataano.innerHTML = data.toLocaleDateString()
    relogio.innerHTML = data.toLocaleTimeString() 
}
setInterval(() => {
    dados()
}, 1000);

let promessa =(tempoalarme)=>{ new Promise((resul, rejeck)=>{
    tempo = tempoalarme/0.001
    console.log(tempo)
    setTimeout(() => {     
        setInterval(() => {
            audio.play()
            caixa.classList.toggle('tocou')
        }, 500);      
    }, tempo);})}

botao_setar_alarme.addEventListener('click', ()=>{
    const tempoalarme = document.querySelector('#inum').value
    const data = new Date()  
    const dataalterada = new Date()
    dataalterada.setSeconds(dataalterada.getSeconds() + tempoalarme/0001)
    horalarme.innerHTML =  dataalterada.toLocaleTimeString();
    promessa(tempoalarme)})

botao_parar_alarme.addEventListener('click', ()=>{
    horalarme.innerHTML = '00:00:00'
    caixa.classList.remove('tocou')
    audio.pause()})
