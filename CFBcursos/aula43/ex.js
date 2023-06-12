"use strict"

const idades = [9, 21, 30, 17, 18, 44, 12, 50]
const maior = idades.filter((valor, indice, array)=>{
    if(valor >= 18){
        return valor
    }
}
)
console.log(idades)
console.log(maior)