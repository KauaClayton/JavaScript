const verde = document.querySelector('div.verde')
const button = document.querySelector('button#button')
const resul = document.querySelector('p#result')
const array = [16, 12, 110, 6, 4, 17, 15, 13, 3, 11]

verde.innerHTML +=  `<br>[${array}]`

button.addEventListener('click', (evt)=>{

    const retorno = array.some((e, i)=>{
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
