const dataano = document.querySelector('#data')
const dados=()=>{
    const data = new Date()
    dataano.innerHTML = data.toLocaleDateString()
}

setInterval(() => {
    dados()
}, 1000);