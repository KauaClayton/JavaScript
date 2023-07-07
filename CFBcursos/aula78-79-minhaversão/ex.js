const relogio = document.querySelector('#relógio')
const c=()=>{
    const data = new Date()
    relogio.innerHTML = data.toLocaleTimeString()}
setInterval(() => {
    c()}, 1000);