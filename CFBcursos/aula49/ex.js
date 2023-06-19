const verde = document.querySelector('div.verde')
const button = document.querySelector('button#button')
const resul = document.querySelector('p#result')
const array = [21, 25, 19, 20, 26, 18, 22]

verde.innerHTML +=  `<br>[${array}]`

button.addEventListener('click', (evt)=>{

    const retorno = array.every((e, i)=>{
        if(e < 18){
            resul.innerHTML = 'Array não conforme na posição '+ i
        }
            return e>= 18
    })
    if(retorno == true){
        resul.innerHTML = 'está tudo nos conformes patrão'
    }
    console.log(retorno)
})
