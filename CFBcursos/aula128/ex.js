const ptexto = document.getElementById('texto')
const endpoint = 'flores.txt'

fetch(endpoint)
.then(res=>res.text())
.then(res=>{
    res=JSON.parse(res)
    console.log(res)
})