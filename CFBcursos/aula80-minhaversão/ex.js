const dataano = document.querySelector('#data')
const relogio = document.querySelector('#relogio')
const botao_setar_alarme = document.querySelector('#btn_ativar')
const botao_parar_alarme = document.querySelector('#btn_parar')
const horalarme = document.querySelector('#horaalarme')
const dados=()=>{  
    const data = new Date()
    dataano.innerHTML = data.toLocaleDateString()
    relogio.innerHTML = data.toLocaleTimeString() 
}

setInterval(() => {
    dados()

}, 1000);

botao_setar_alarme.addEventListener('click', ()=>{
    const tempoalarme = document.querySelector('#inum').value
    const data = new Date()  
    const dataalterada = new Date()
    dataalterada.setSeconds(dataalterada.getSeconds() + tempoalarme/0001)
    horalarme.innerHTML =  dataalterada.toLocaleTimeString(); 
})
botao_parar_alarme.addEventListener('click', ()=>{
    horalarme.innerHTML = '00:00:00'
})