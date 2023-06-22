let valor1 = document.querySelector('#inum1')
let valor2 = document.querySelector('#inum2')
let resul = document.querySelector('#resul')
let soma = document.querySelector('#soma')
let subtrai = document.querySelector('#subtrai')
let multiplica = document.querySelector('#multiplica')
let divide =document.querySelector('#divide')

const op = [
    //soma
    (val1=0, val2=0)=>{
        let num = 0
        num = val1+val2
        resul.innerHTML = num
        return num

    },
    //subtrai
    (val1=0, val2=0)=>{
        let num = 0
        num = val1-val2
        resul.innerHTML = num
        return num
    },
    //multiplica
    (val1=0, val2=0)=>{
        let num = 0
        num = val1*val2
        resul.innerHTML = num
        return num
    },
    //divide
    (val1=0, val2=0)=>{
        let num = 0
        num = val1/val2
        resul.innerHTML = num
        return num
    }
]

soma.addEventListener('click',()=>{
    op[0](Number(valor1.value), Number(valor2.value))
} )


subtrai.addEventListener('click', ()=>{
    op[1](Number(valor1.value), Number(valor2.value))
})

multiplica.addEventListener('click', ()=>{
    op[2](Number(valor1.value), Number(valor2.value))
})

divide.addEventListener('click',()=>{
    op[3](Number(valor1.value), Number(valor2.value))
})
