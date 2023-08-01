const url = document.getElementById('url')
const btn_url = document.getElementById('btn_url')

btn_url.addEventListener('click', (evt)=>{
    //  window.location.replace() //deleta a url corrente do histórico
    // window.location.reload()
    // window.history.forward()
    // window.history.go()
    window.location = url.value
})