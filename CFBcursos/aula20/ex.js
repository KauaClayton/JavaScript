"use strict"

let n = 0
let max = 100
let pares = 0

for(n; n < max; n++){
    if(n%2!=0){
        continue
}
    pares++
}
console.log(`Quantidade de pares:${pares}`)
console.log('Fim do programa')