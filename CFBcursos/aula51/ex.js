const verde = document.querySelector('div.verde')
const button = document.querySelector('button#button')
const resul = document.querySelector('p#result')
const array = [2, 2, 2, 2]
let ant= []
let atu= []
let dobro= []

verde.innerHTML +=  `<br>[${array}]`

button.addEventListener('click', (evt)=>{
        resul.innerHTML = array.reduce((anterior, atual, pos)=>{
                // ant.push(anterior)
                // atu.push(atual)
                // dobro.push(atual*2)
                // return atual+anterior
                return anterior+atual
        })
        // resul.innerHTML += `<br>Anterior:[${ant}]`
        // resul.innerHTML += `<br>Atual:[${atu}]`
        // resul.innerHTML += `<br>Dobro:[${dobro}]`
        resul.innerHTML = '['+anterior+']'
})


